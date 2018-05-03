<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\SocialAuthorizationRequest;
use function GuzzleHttp\Psr7\uri_for;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;

class AuthorizationsController extends Controller
{
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

    }
}
