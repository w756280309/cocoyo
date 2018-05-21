<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class FollowingResource extends Resource
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
            'user_id' => $this->id,
            'name' => $this->name,
            'nickname' => $this->nickname,
            'avatar' => $this->avatar,
            'description' => $this->description
        ];
    }
}
