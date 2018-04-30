<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;

class SocialiteAuthController extends Controller
{
    public function redirectToProvider()
    {
        return Socialite::driver('qq')->redirect();
    }

    public function handleProviderCallback()
    {
        $user = Socialite::driver('qq')->user();

        http_response_code(500);
        dd($token = $user->token,
        $refreshToken = $user->refreshToken,
        $expiresIn = $user->expiresIn);
//        dd($user->getId(),
//        $user->getNickname(),
//        $user->getName(),
//        $user->getEmail(),
//        $user->getAvatar());

        return view('auth.test');
    }

    public function test()
    {
        $user = Socialite::driver('qq')->userFromToken('D6D835F5CB83479816088C3ACE0D23E5');

        dd($user->getId(),
        $user->getNickname(),
        $user->getName(),
        $user->getEmail(),
        $user->getAvatar());
    }
}
