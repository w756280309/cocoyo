<?php

namespace App\Http\Controllers\Api;

use App\Events\NotificationPushEvent;
use App\Http\Requests\CommentRequest;
use App\Models\Article;
use App\Models\Comment;
use App\Notifications\ReceivedCommentNotification;
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
        //获取评论类型  评论是多态  限制返回类型
        $commentableType = $request->input('commentable_type') ?: 'article';

        if ($commentableType == 'article') {
            $commentableType = 'App\Models\Article';
        }

        //获取评论列表
        $comments = Comment::where('commentable_id', $commentableId)
            ->where('commentable_type', $commentableType)
            ->with(['user' => function ($query) {
                return $query->select('id', 'name', 'avatar');
            }, 'reply_user' => function ($query) {
                return $query->select('id', 'name', 'avatar');
            }])
            ->get()
            ->groupBy('parent_id');

        //评论不为空  对数据做处理
        if (! $comments->isEmpty()) {
            $comments['root'] = $comments[0];
            unset($comments[0]);
        }

        //获取总评论数
        $comments['count'] = Comment::where('commentable_id', $commentableId)
            ->where('commentable_type', $commentableType)
            ->count();

        return $this->respond(['data' => $comments]);
    }

    /**
     * 评论
     *
     * @param CommentRequest $request
     * @return CommentResource
     */
    public function store(CommentRequest $request)
    {
        // 判断是否有父id
        if ($request->has('parent_id')) {
            //获取父评论详情
            $real_comment = Comment::findOrFail($request->input('parent_id'));
            // 当前评论等级+1
            $level = $real_comment->level + 1;
            //获取评论用户id
            $user_id = $real_comment->reply_user_id ?: $real_comment->user_id;
            //当父等级大于0时评论人应该是回复用户id
            if ($real_comment->level > 0) {
                $user_id = $real_comment->reply_user_id;
            }

            //限制等级只为2
            if ($level >= 2) {
                $level = 2;
            }
        }

        // 合并所需数据
        $data = array_merge($request->all(), [
            'user_id' => isset($user_id) ? $user_id : $request->user()->id,
            'level' => isset($level) ? $level : 0,
            'commentable_type' => $request->input('commentable_type') == 'article' ? 'App\Models\Article' : '',
            'parent_id' => $request->input('parent_id', 0),
            'reply_user_id' => isset($user_id) ? $request->user()->id : 0
        ]);

        $comment = Comment::create($data);
        // 对评论数据进行修正
        if (! $comment->parent_id) {
            $comment->fill([
                'user_id' => $comment->commentable->user->id,
                'reply_user_id' => $comment->user_id
            ]);

            $comment->save();
        }

        $new_comment = Comment::where('id', $comment->id)->with(['user' => function ($query) {
            return $query->select('id', 'name', 'avatar');
        }, 'reply_user' => function ($query) {
            return $query->select('id', 'name', 'avatar');
        }])->first();

        // 发送消息
        $comment->user->notify(new ReceivedCommentNotification($comment));
        // 推送事件
        broadcast(new NotificationPushEvent($comment->user));

        return $this->respond(['data' => $new_comment]);
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

        $this->recursive($comment);

        return $this->noContent();
    }

    /**
     * 递归删除评论
     *
     * @param Comment $comment
     * @return bool
     * @throws \Exception
     */
    protected function recursive(Comment $comment)
    {
        $comment->delete();

        $child_comment = Comment::where('parent_id', $comment->id)->first();

        if (! $child_comment) {
            return true;
        }

        $child_comment->delete();

        return $this->recursive($child_comment);
    }
}
