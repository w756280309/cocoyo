<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Link extends Model
{
    use SoftDeletes;

    /**
     * @var string
     */
    protected $table = 'links';

    /**
     * @var array
     */
    protected $fillable = [
        'name', 'link', 'image', 'status'
    ];

    /**
     * 获取有效的友链
     *
     * @param Builder $query
     * @return $this
     */
    public function scopeValid(Builder $query)
    {
        return $query->where('status', 1);
    }
}
