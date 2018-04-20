<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\PreviewUserResource;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
        $user = User::where('name', $username)->first();

        if (!isset($user)) abort(404);

        $user->followings_count = $user->followings()->count();
        $user->comments_count = $user->comments()->count();
        $user->is_following = $user->isFollowing(optional($request->user())->id);

        return new PreviewUserResource($user);
    }
}
