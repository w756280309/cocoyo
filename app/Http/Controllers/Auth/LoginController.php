<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Traits\ProxyHelpers;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

    public function login(Request $request)
    {
        $this->validateLogin($request);

        if (! Auth::attempt($request->only($this->username(), 'password'))) {
            return $this->failed();
        }

        $tokens = $this->authenticate();

        return $this->respond(['data' => ['token' => $tokens, 'user' => new UserResource($request->user())]]);
    }
}
