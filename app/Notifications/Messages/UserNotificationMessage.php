<?php
/**
 * Created by PhpStorm.
 * User: cocoyo
 * Date: 2017/12/7 0007
 * Time: 9:37
 */

namespace App\Notifications\Messages;

class UserNotificationMessage
{
    /**
     * the message content
     *
     * @var string
     */
    protected $content;

    /**
     * The notification subject
     *
     * @var string
     */
    protected $subject = '';

    /**
     * The message extra data.
     *
     * @var array
     */
    protected $extra = [];

    /**
     * UserNotificationMessage constructor.
     * @param string $subject
     * @param string $content
     * @param array $extra
     */
    public function __construct(string $content, string $subject = '', array $extra = [])
    {
        $this->subject = $subject;
        $this->content = $content;
        $this->extra = $extra;
    }


    /**
     * @return string
     */
    public function getSubject() : string
    {
        return $this->subject;
    }

    /**
     * @return string
     */
    public function getContent() : string
    {
        return $this->content;
    }

    /**
     * The message to array.
     *
     * @return array
     * @author Seven Du <shiweidu@outlook.com>
     */
    public function toArray(): array
    {
        return [
            'subject' => $this->subject,
            'content' => $this->content,
            'extra' => $this->extra,
        ];
    }
}