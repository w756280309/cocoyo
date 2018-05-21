<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class ProfileResource extends Resource
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
            'status' => $this->status,
            'github_name' => $this->github_name,
            'github_url' => $this->github_url,
            'weibo_name' => $this->weibo_name,
            'weibo_link' => $this->weibo_link,
            'website' => $this->website,
            'description' => $this->description,
            'created_at' => $this->created_at->toDateTimeString(),
            'comment' => CommentResource::collection($this->whenLoaded('comments'))
        ];
    }
}
