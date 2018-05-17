<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Broadcast;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Broadcast::routes(['middleware' => ['auth:api']]);
//        Broadcast::auth('user_room_*', function ($user, $room_id) {
//            dd($user);
//            return $user->id == $room_id;
//        });

        require base_path('routes/channels.php');
    }
}
