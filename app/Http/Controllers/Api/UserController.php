<?php

namespace App\Http\Controllers\Api;

use App\Events\NotificationPushEvent;
use App\Http\Requests\UserRequest;
use App\Http\Resources\FollowingResource;
use App\Http\Resources\PreviewUserResource;
use App\Http\Resources\UserResource;
use App\Models\Comment;
use App\Models\User;
use App\Notifications\FollowedUserNotification;
use App\Notifications\Messages\UserNotificationMessage;
use App\Services\FileManager\BaseManager;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CommentResource;
use Illuminate\Validation\Rule;


class UserController extends Controller
{
    /**
     * 获取用户信息
     *
     * @param Request $request
     * @return UserResource
     */
    public function index(Request $request)
    {
        return new UserResource($request->user());
    }

    /**
     * 用户详情
     *
     * @param Request $request
     * @param $username
     * @return PreviewUserResource
     */
    public function show(Request $request, $username)
    {
        $user = $this->getUserByName($username);

        $user->followings_count = $user->followings()->count();
        $user->comments_count = $user->comments()->count();

        $currentAuthUser = \Auth::guard('api');

        if ($currentAuthUser->check()) {
            if ($currentAuthUser->user()->id != $user->id) {
                $user->is_following = $currentAuthUser->user()->isFollowing($user->id);
            }
        }

        return new PreviewUserResource($user);
    }

    /**
     * 编辑用户
     *
     * @param Request $request
     * @return UserResource
     */
    public function edit(Request $request)
    {
        return new UserResource($request->user());
    }

    /**
     *  编辑用户信息
     *
     * @param UserRequest $request
     * @return UserResource
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(UserRequest $request)
    {
        $user = $request->user();

        $this->authorize('update', $user);

        $data = $request->only(['nickname', 'avatar', 'website', 'weibo_name', 'weibo_link', 'github_name', 'description']);
        // 验证用户名
        if ($request->has('name')) {
            $validate = \Validator::make($request->all(), [
                'name' => [
                    'required',
                    'min:3',
                    'max:8',
                    Rule::unique('users')->ignore($user->id)
                ]
            ], [
                'name.required' => '请输入昵称',
                'name.min' => '昵称最少为3个字符',
                'name.max' => '昵称最长为8个字符',
                'name.unique' => '昵称已存在',
            ]);

            $validate->validate();

            $data = array_merge($data, ['name' => $request->name]);
        }

        // 更新
        $user->fill($data);
        $user->save();

        return new UserResource($user);
    }

    /**
     * 关注或者取消关注.
     *
     * @param Request $request
     * @param User $user
     * @return mixed
     */
    public function doFollow(Request $request, User $user)
    {
        $oauthUser = $request->user();
        if ($oauthUser->id === $user->id) {
            return $this->failed('你不能对自己进行关注操作');
        }

        if ($oauthUser->isFollowing($user->id)) {
            $oauthUser->unfollow($user->id);
        } else {
            $oauthUser->follow($user->id);

            //发送关注消息通知
            $user->notify(new FollowedUserNotification($oauthUser));
            // 推送事件
            broadcast(new NotificationPushEvent($user));
        }

        return $this->success('success');
    }

    /**
     * 用户评论
     *
     * @param Request $request
     * @param $username
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function replies(Request $request, $username)
    {
        $user = $this->getUserByName($username);

        $comments = Comment::where([
            ['user_id', $user->id],
            ['parent_id', 0]
        ])->orWhere([
            ['reply_user_id', $user->id],
            ['parent_id', '<>', 0]
        ])
            ->with(['user' => function ($query) {
                return $query->select('id', 'name', 'avatar');
            }, 'reply_user' => function ($query) {
                return $query->select('id', 'name', 'avatar');
            }, 'commentable'])
            ->latest()
            ->paginate(10);

        return $this->respond($comments);
    }

    /**
     * 显示用户关注列表
     *
     * @param $username
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function following($username)
    {
        $user = $this->getUserByName($username);

        $followings = $user->followings;

        return FollowingResource::collection($followings);
    }

    /**
     * 消息列表
     *
     * @param $username
     * @return mixed
     */
    public function notifications($username)
    {
        $user = $this->getUserByName($username);

        // 获取通知消息列表
        $notifications = $user->notifications()->paginate(20);

        // 全部设置为已读
        $user->unreadNotifications->markAsRead();

        return $this->respond(['data' => $notifications]);
    }

    /**
     * 修改头像
     *
     * @param Request $request
     * @param $username
     * @return mixed
     */
    public function avatar(Request $request, $username)
    {
       $this->validate($request, [
           'avatar' => 'required|string'
       ]);

        $user = $request->user();

        $user->avatar = $request->input('avatar');
        $user->save();

        return $this->success('success');
    }

    /**
     * 小程序上传头像
     *
     * @param Request $request
     * @param BaseManager $manager
     * @return mixed
     */
    public function wx_avatar(Request $request, BaseManager $manager)
    {
        $this->validate($request, [
            'image' => 'required|image'
        ]);

        $path = date('Y') . date('m') . '/' . date('d');

        $resource = $manager->store($request->file('image'), $path);

        $user = $request->user();

        switch ($request->input('type')) {
            case 'avatar':
                $user->avatar = $resource['relative_url'];
                $user->save();
                break;
            case 'wx_bg':
                $user->wx_bg = $resource['relative_url'];
                $user->save();
                break;
        }

        return $this->respond($resource);
    }

    /**
     * 修改消息通知
     *
     * @param Request $request
     * @param $username
     * @return mixed
     */
    public function email_notify_enabled(Request $request, $username)
    {
        $this->validate($request, [
            'email_notify_enabled' => 'required|boolean'
        ]);

        $user = $request->user();

        $user->email_notify_enabled = $request->input('email_notify_enabled') ? 'yes' : 'no';
        $user->save();

        return $this->success('success');
    }

    /**
     * 修改密码
     *
     * @param Request $request
     * @param $username
     * @return mixed
     */
    public function edit_password(Request $request, $username)
    {
        $this->validate($request, [
            'password' => 'required|min:8|max:16|confirmed'
        ]);

        $user = $request->user();

        $user->password = bcrypt($request->input('password'));
        $user->save();

        return $this->success('success');
    }

    /**
     * 获取用户
     *
     * @param $username
     * @return mixed
     */
    protected function getUserByName($username)
    {
        $user = User::where('name', $username)->first();

        if (! $user) return abort(404);

        return $user;
    }
}
