<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\User as UserResource;
use App\Modules\User;
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
        if ($user == $request->user()->id) {
            return $this->errorUnauthorized('您无法为自己和其他管理员更改状态');
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
}
