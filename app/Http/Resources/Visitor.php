<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Visitor extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'            => $this->id,
            'article'       => '', //ToDO Post::collection($this->whenLoaded('posts')) 避免N+1查询
            'ip'            => $this->ip,
            'country'       => $this->country,
            'clicks'        => $this->clicks,
            'created_at'    => $this->created_at->toDateTimeString(),
        ];
    }
}
