<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\CommentRequest;
use App\Models\Article;
use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CommentResource;

class CommentController extends Controller
{
    /**
     * 评论列表
     *
     * @param Request $request
     * @param $commentableId
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function show(Request $request, $commentableId)
    {
        $commentableType = $request->input('commentable_type');

        $comments = Comment::where('commentable_id', $commentableId)->where('commentable_type', $commentableType)->get();

        $comments->load('user');

        return CommentResource::collection($comments);
    }

    /**
     * 评论
     *
     * @param CommentRequest $request
     * @return CommentResource
     */
    public function store(CommentRequest $request)
    {
        $data = array_merge($request->all(), [
            'user_id' => $request->user()->id
        ]);

        $comment = Comment::create($data);

        //TODO 发消息给用户
        $comment->load('user');

        return new CommentResource($comment);
    }

    /**
     * @param Comment $comment
     * @return \Response
     * @throws \Exception
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Comment $comment)
    {
        $this->authorize('destroy', $comment);

        $comment->delete();

        return $this->noContent();
    }
}
