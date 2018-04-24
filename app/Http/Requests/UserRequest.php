<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nickname' => 'nullable|min:1|max:10',
            'website' => 'nullable|active_url',
            'weibo_name' => 'nullable|min:1|max:10',
            'weibo_link' => 'nullable|active_url',
            'github_name' => 'nullable|min:1|max:10',
            'description' => 'nullable|min:1|max:255'
        ];
    }

    /**
     * @return array
     */
    public function messages() : array
    {
        return [
            'nickname.min' => '昵称最小为1个字符',
            'nickname.max' => '昵称最大为10个字符',
            'weibo_name.min' => '微博昵称最小为1个字符',
            'weibo_name.max' => '微博昵称最大为10个字符',
            'website.active_url' => '不是一个有效的链接',
            'github_name.min' => 'github最小为1个字符',
            'github_name.max' => 'github最大为10个字符',
            'description.min' => '描述最小为1个字符',
            'description.max' => '描述最大为255个字符',
        ];
    }
}
