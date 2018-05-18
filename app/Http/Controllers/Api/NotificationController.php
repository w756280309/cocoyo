<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NotificationController extends Controller
{
    /**
     * 消息列表
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        $notifications = $request->user()->notifications;

        foreach ($notifications as &$notification) {
            $notification->type = snake_case(class_basename($notification->type) , '-' );
            $notification->created_diff = $notification->created_at->diffForHumans();
        }

        //全部设为已读
        $request->user()->unreadNotifications->markAsRead();

        return $this->respond(['data' => $notifications]);
    }

    /**
     * 获取未读消息数
     *
     * @param Request $request
     * @return mixed
     */
    public function getUnReadCount(Request $request)
    {
        return $this->respond(['count' => $request->user()->unreadNotifications->count()]);
    }
}
