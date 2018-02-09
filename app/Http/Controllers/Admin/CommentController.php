<?php

namespace App\Http\Controllers\Admin;

use App\Models\Comment;
use App\Http\Resources\Comment as CommentResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $comments = Comment::latest()->paginate(10);

        $comments->load('user');

        return CommentResource::collection($comments);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
    {
        $comment->load('user');

        return new CommentResource($comment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Response
     */
    public function update(Comment $comment, Request $request)
    {
        $comment->fill(['content' => $request->input('content_raw')]);

        $comment->save();

        return $this->noContent();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Comment::destroy($id);

        return $this->noContent();
    }
}
