<?php

namespace App\Policies;

use App\Models\Comment;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommentPolicy
{
    public function destroy(User $user, Comment $comment)
    {
        return ($user->id == $comment->user_id) || ($user->id == $comment->reply_user_id);
   }
}
