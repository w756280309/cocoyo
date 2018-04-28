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
        dd($user->getId(),
        $user->getNickname(),
        $user->getName(),
        $user->getEmail(),
        $user->getAvatar());
    }
}
