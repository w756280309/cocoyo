<?php
/**
 * Created by PhpStorm.
 * User: cocoyo
 * Date: 2018/5/13 0013
 * Time: 21:19
 */
namespace App\Traits;

use App\Models\User;
use App\Notifications\FollowedUserNotification;
use App\Notifications\Messages\UserNotificationMessage;

trait UserNotificationHelper
{
    /**
     * 发送关注消息
     *
     * @param User $user
     */
    public function followedUserNotification(User $user)
    {
        $subject = '用户关注提醒';
        $content = '用户' . $user->name . '关注了您!';
        $mail = true;

        if ($this->email_notify_enabled == 'no') {
            $mail = false;
        }

        $this->notify(
            new FollowedUserNotification(
                new UserNotificationMessage($content, $subject),
                $mail
            )
        );
    }
}