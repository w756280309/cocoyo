<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class PreviewUserResource extends Resource
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
            'id' => $this->id,
            'name' => $this->name,
            'nickname' => $this->nickname,
            'email' => $this->email,
            'avatar' => $this->avatar,
            'github_name' => $this->github_name,
            'weibo_name' => $this->weibo_name,
            'weibo_link' => $this->weibo_link,
            'website' => $this->website,
            'description' => $this->description,
            'followings_count' => $this->followings_count,
            'comments_count' => $this->comments_count,
            'is_following' => $this->is_following ?: false,
            'last_actived_at' => $this->last_actived_at->diffForHumans(),
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
