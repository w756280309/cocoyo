<?php

namespace App\Modules;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = 'tags';

    protected $fillable = [
        'tag', 'title', 'meta_description'
    ];
}
