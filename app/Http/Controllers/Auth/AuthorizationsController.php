<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\SocialAuthorizationRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Notifications\UserRegisterVerficationCode;
use App\Traits\PassportToken;
use function GuzzleHttp\Psr7\uri_for;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;

class AuthorizationsController extends Controller
{
    use PassportToken;

    /**
     * 重定向到第三方登陆
     *
     * @param $driver
     * @return mixed
     */
    public function redirectToProvider($driver)
    {
        if (!in_array($driver, ['qq', 'weibo'])) {
            abort(404);
        }

        return Socialite::driver($driver)->redirect();
    }

    /**
     * 第三方登录回调
     *
     * @param $type
     * @param SocialAuthorizationRequest $request
     * @return \App\Traits\json|mixed
     */
    public function socialStore($type, SocialAuthorizationRequest $request)
    {
        if (! in_array($type, ['qq', 'weibo'])) {
            return $this->failed();
        }

        $driver = Socialite::driver($type);

        try {
            if ($code = $request->input('code')) {
                $response = $driver->getAccessTokenResponse($request->input('code'));
                $token = array_get($response, 'access_token');
            } else {
                $token = $request->input('access_token');
            }
            $oauthUser = $driver->userFromToken($token);
        } catch (\Exception $exception) {

            return $this->errorUnauthorized('参数错误，未获取用户信息');
        }

        $socialMapping = $type == 'qq' ? 'qq_id' : 'weibo_id';

        $user = User::where($socialMapping, $oauthUser->getId())->first();

        return $this->handleResponse($user, $oauthUser, $socialMapping);
    }

    /**
     * 处理响应
     *
     * @param $user
     * @param $oauthUser
     * @param $socialMapping
     * @return mixed
     */
    protected function handleResponse($user, $oauthUser, $socialMapping)
    {
        if (! $user) {
            return $this->respond([
                'data' => [
                    'code' => 1001,
                    'social_user' => [ //未注册
                        $socialMapping => $oauthUser->getId(),
                        'name' => $oauthUser->getNickname(),
                        'avatar' => $oauthUser->getAvatar()
                    ]
                ]
            ]);
        }

        if (! $user->status) {
            //发送验证码
            $user->notify(new UserRegisterVerficationCode($user));

            return $this->respond([
                'data' => [
                    'code' => 1002, //未验证邮箱
                    'user' => new UserResource($user)
                ]
            ]);
        }

        return $this->respond([
            'data' => [
                'code' => 1003, //授权成功
                'user' => new UserResource($user),
                'token' => $this->getBearerTokenByUser($user, 1, false)
            ]
        ]);
    }
}
