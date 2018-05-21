<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\ForgetPasswordRequest;
use App\Models\User;
use App\Notifications\SendForgetPasswordMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ForgotPasswordController extends Controller
{
    /**
     * 发送充值密码链接
     *
     * @param Request $request
     * @return mixed
     */
    public function sendForgetPasswordMail(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|exists:users,email'
        ], $this->messages());

        $user = User::where('email', $request->input('email'))->first();

        $user->notify(new SendForgetPasswordMail($user));

        return $this->success('success');
    }

    /**
     * 重置密码
     *
     * @param ForgetPasswordRequest $request
     * @return mixed
     */
    public function forgetPassword(ForgetPasswordRequest $request)
    {
        $code = Cache::get($request->input('email'));

        if (! $code) {
            return $this->formError(['email' => '验证链接已失效']);
        }

        if (! hash_equals($code, $request->input('code'))) {
            return $this->formError('验证链接错误');
        }

        $user = User::where('email', $request->input('email'))->first();

        $user->password = bcrypt($request->input('password'));
        $user->save();

        // 清除验证码缓存
        Cache::forget($request->input('email'));

        return $this->success('success');
    }
    
    /**
     * @return array
     */
    protected function messages() : array
    {
        return [
            'email.required' => '请输入邮箱',
            'email.email' => '无效的邮箱',
            'email.exists' => '邮箱不存在',
        ];
    }
}
