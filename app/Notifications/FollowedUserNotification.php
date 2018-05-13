<?php

namespace App\Notifications;

use App\Models\User;
use App\Notifications\Messages\UserNotificationMessage;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class FollowedUserNotification extends Notification
{
    use Queueable;

    /**
     * @var UserNotificationMessage
     */
    protected $message;

    /**
     * @var boolean
     */
    protected $mail;

    /**
     * Create a new notification instance.
     *
     * @param UserNotificationMessage $message
     * @param bool $mail 是否邮件发送
     */
    public function __construct(UserNotificationMessage $message, $mail = true)
    {
        $this->message = $message;
        $this->mail = $mail;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        if ($this->mail) {
            return ['database', 'mail'];
        }

        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Cocoyo’Blog 消息提醒')
            ->greeting($this->message->getSubject())
            ->line($this->message->getContent())
            ->line('感谢您使用我们的应用程序!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return $this->message->toArray();
    }
}
