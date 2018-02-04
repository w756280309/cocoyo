<?php

namespace App\Modules;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * @var string 
     */
    protected $table = 'tags';

    /**
     * @var array 
     */
    protected $fillable = [
        'tag', 'title', 'meta_description'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphToMany
     */
    public function articles()
    {
        return $this->morphedByMany(Article::class, 'taggable');
    }
}
