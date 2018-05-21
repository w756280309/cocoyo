<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Notifications\UserRegisterVerficationCode;
use App\Traits\ProxyHelpers;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers, ProxyHelpers;

    /**
     * Handle a login request to the application.
     *
     * @param Request $request
     * @return mixed
     * @throws ValidationException
     */
    public function login(Request $request)
    {
        $this->validateLogin($request);

        $user = User::where($this->username(), $request->input($this->username()))->first();

        // 如果邮箱没有验证
        if (!$user->status) {
            // 发送验证链接
            $user->notify(new UserRegisterVerficationCode($user));

            return $this->respond(['code' => 0]);
        }

        $tokens = $this->authenticate();

        return $this->respond(['data' => ['token' => $tokens, 'user' => new UserResource($user)]]);
    }

    /**
     * Validate the user login request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    protected function validateLogin(Request $request)
    {
        $this->validate($request, [
            $this->username() => 'required|string|exists:users,'. $this->username(),
            'password' => 'required|string',
        ]);
    }

    /**
     * 退出登录
     *
     * @param Request $request
     * @return \Response
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return $this->noContent();
    }
}
