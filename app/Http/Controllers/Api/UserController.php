<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ProfileResource;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function show($username)
    {
        $user = User::where('name', $username)->first();

        if (!isset($user)) abort(404);

        $user->load(['comments' => function ($query) {
            return $query->paginate(2);
        }]);

        return new ProfileResource($user);
    }
}
