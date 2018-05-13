<?php

namespace App\Models;

use App\Services\Markdown;
use App\Services\Mention;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id', 'commentable_id', 'commentable_type', 'content', 'parent_id', 'level', 'reply_user_id'
    ];

    /**
     * 评论用户
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * 回复用户
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function reply_user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function commentable()
    {
        return $this->morphTo();
    }

    /**
     * 获取内容
     *
     * @param $value
     * @return mixed
     */
    public function getContentAttribute($value)
    {
        return $this->attributes['content'] = json_decode($value);
    }

    /**
     * 获取评论时间
     *
     * @param $value
     * @return array
     */
    public function getCreatedAtAttribute($value)
    {
        return [
            'created_diff' => Carbon::parse($value)->diffForHumans(),
            'created_at' => Carbon::parse($value)->toDateTimeString()
        ];
    }

    /**
     * 设置内容
     * @param $value
     */
    public function setContentAttribute($value)
    {
        $content = (new Mention)->parse($value);

        $data = [
            'raw' => $content,
            'html' => (new Markdown)->convertMarkdownToHtml(emoji($content))
        ];

        $this->attributes['content'] = json_encode($data);
    }
}
