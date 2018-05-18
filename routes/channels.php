<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

// 对私有频道进行监听
Broadcast::channel('user_room_{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
