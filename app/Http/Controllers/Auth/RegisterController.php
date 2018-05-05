<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\RegisterConfirmedRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Notifications\UserRegisterVerficationCode;
use App\Traits\PassportToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class RegisterController extends Controller
{
    use PassportToken;

    /**
     * 用户注册
     *
     * @param RegisterRequest $request
     * @return \App\Http\Resources\UserResource
     */
    public function register(RegisterRequest $request)
    {
        //创建用户
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'avatar' => $request->input('avatar') ?: '/images/default_avatar.png',
            'qq_id' => $request->input('qq_id') ?: '',
            'weibo_id' => $request->input('weibo_id') ?: '',
        ]);

        //发送验证码
        $user->notify(new UserRegisterVerficationCode($user));

        return new UserResource($user);
    }

    /**
     * 确认邮箱
     *
     * @param RegisterConfirmedRequest $request
     * @return \App\Http\Resources\UserResource|\App\Traits\json|mixed
     */
    public function confirmed(RegisterConfirmedRequest $request)
    {
        $code = Cache::get($request->input('email'));

        if (! $code) {
            return $this->formError(['email' => '验证链接已失效']);
        }

        if (! hash_equals($code, $request->input('code'))) {
            return $this->formError('验证链接错误');
        }

        $user = User::where('email', $request->input('email'))->first();

        $user->status = 1;
        $user->save();

        // 清除验证码缓存
        Cache::forget($request->input('email'));

        return $this->respond([
            'data' => [
                'token' => $this->getBearerTokenByUser($user, 1, false),
                'user' => new UserResource($user)
            ]
        ]);
    }

    /**
     * 发送注册邮件
     *
     * @param Request $request
     * @return \Response
     */
    public function sendRegisterEmail(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|exists:users,email'
        ]);

        $user = User::where('email', $request->input('email'))->first();

        if ($user->status) {
            return $this->failed('您已经确认过邮箱');
        }

        //发送验证码
        $user->notify(new UserRegisterVerficationCode($user));

        return $this->success('success');
    }
}
