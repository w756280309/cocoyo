<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\FollowingResource;
use App\Http\Resources\PreviewUserResource;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Comment as CommentResource;


class UserController extends Controller
{
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

        return new PreviewUserResource($user);
    }

    /**
     * 判断当前登录用户使用关注查看的用户
     *
     * @param Request $request
     * @param $username
     * @return mixed
     */
    public function isFollowing(Request $request, $username)
    {
        $user = $this->getUserByName($username);

        return $this->respond(['data' => [
            'is_follow' => $request->user()->isFollowing($user->id)
        ]]);
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
        if ($request->user()->id === $user->id) {
            return $this->failed('你不能对自己进行关注操作');
        }

        if ($request->user()->isFollowing($user->id)) {
            $request->user()->unfollow($user->id);
            //TODO 消息通知
        } else {
            $request->user()->follow($user->id);
            //TODO 消息通知
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

        $comments = $user->comments()->latest()->paginate(10);

        return CommentResource::collection($comments);
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
     * 获取用户
     *
     * @param $username
     */
    protected function getUserByName($username)
    {
        $user = User::where('name', $username)->first();

        if (! $user) return abort(404);

        return $user;
    }
}
