<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\LinkResource;
use App\Models\Link;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class LinkController extends Controller
{
    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $links = Cache::rememberForever('cocoyo_links', function () {
            return Link::valid()->paginate(3);
        });

        return LinkResource::collection($links);
    }
}
