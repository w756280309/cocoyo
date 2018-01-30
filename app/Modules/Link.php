<?php

namespace App\Modules;

use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    protected $table = 'links';

    protected $fillable = [
        'name', 'link', 'image', 'status'
    ];
}
