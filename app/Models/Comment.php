<?php

namespace App\Models;

use App\Services\Markdown;
use App\Services\Mention;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id', 'commenttable_id', 'commenttable_type', 'content'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     *多态
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function commentable()
    {
        return $this->morphTo();
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
            'html' => (new Markdown)->convertMarkdownToHtml($content)
        ];

        $this->attributes['content'] = json_encode($data);
    }
}
