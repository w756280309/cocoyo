<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CommentRequest extends FormRequest
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
            'content' => 'required|string',
            'commentable_id' => 'required',
            'commentable_type' => 'required',
        ];
    }

    /**
     * @return array
     */
    public function messages() : array
    {
        return [
            'content.required' => '请输入评论内容'
        ];
    }
}
