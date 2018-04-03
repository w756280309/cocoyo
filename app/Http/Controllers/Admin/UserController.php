<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\User as UserResource;
use App\Models\User;
use App\Services\FileManager\BaseManager;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return UserResource::collection(User::latest()->paginate(10));
    }

    /**
     * Update User Status By User ID
     *
     * @param User $user
     * @param Request $request
     * @return \Response
     */
    public function status(User $user, Request $request)
    {
        if ($user->id == $request->user()->id) {
            return $this->failed('您无法为自己和其他管理员更改状态');
        }

        $user->status = ! $user->status;

        $user->save();

        return $this->noContent();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return UserResource
     */
    public function edit(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param User $user
     * @param  \Illuminate\Http\Request $request
     * @return UserResource
     */
    public function update(User $user, Request $request)
    {
        $user->fill($request->only(['nickname', 'website', 'description', 'github_url', 'weibo_link', 'weibo_name']));

        $user->save();

        return new UserResource($user);
    }

    /**
     * 上传头像
     *
     * @param User $user
     * @param Request $request
     * @param BaseManager $manager
     * @return mixed
     */
    public function avatar(User $user, Request $request, BaseManager $manager)
    {
        $this->validate($request, [
            'image' => 'required|image'
        ]);

        $path = date('Y') . date('m') . '/' . date('d');

        $resource = $manager->store($request->file('image'), $path);

        $user->avatar = $resource['relative_url'];

        $user->save();

        return $this->respond($resource);
    }
}
