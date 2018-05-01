<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\RegisterConfirmedRequest;
use App\Http\Requests\RegisterRequest;
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
     * @return \App\Http\Resources\User
     */
    public function register(RegisterRequest $request)
    {
        //创建用户
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'avatar' => '/images/default_avatar.png'
        ]);

        //发送验证码
        $user->notify(new UserRegisterVerficationCode($user));

        return new \App\Http\Resources\User($user);
    }

    /**
     * 确认邮箱
     *
     * @param RegisterConfirmedRequest $request
     * @return \App\Http\Resources\User|\App\Traits\json|mixed
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
                'user' => new \App\Http\Resources\User($user)
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

        //发送验证码
        $user->notify(new UserRegisterVerficationCode($user));

        return $this->success('success');
    }
}
