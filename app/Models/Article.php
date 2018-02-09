<?php

namespace App\Models;

use App\Services\MarkDown;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    /**
     * @var string
     */
    protected $table = 'articles';

    /**
     * @var array
     */
    protected $fillable = [
        'user_id', 'last_user_id', 'category_id', 'title', 'icon', 'slug', 'page_image',
        'content', 'meta_description', 'is_draft', 'is_original', 'published_at', 'view_count',
    ];

    protected $dates = ['published_at'];

    /**
     * Get the category for the blog article.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class , 'category_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commenttable');
    }

    /**
     * Get the tag for the blog article.
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphToMany
     */
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    /**
     * Get the user for the blog article
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Set the title and the readable slug.
     *
     * @param string $value
     */
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;

        $this->attributes['slug'] = translug($value);
    }

    /**
     * Set the content attribute.
     *
     * @param $value
     */
    public function setContentAttribute($value)
    {
        $data = [
            'raw' => $value,
            'html' => (new MarkDown)->convertMarkdownToHtml($value)
        ];

        $this->attributes['content'] = json_encode($data);
    }
}
