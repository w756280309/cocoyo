<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ForgetPasswordRequest extends FormRequest
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
            'email' => 'required|email|exists:users,email',
            'code' => 'required|string',
            'password' => 'required|min:6|max:16|confirmed',
        ];
    }

    /**
     * @return array
     */
    public function messages() : array
    {
        return [
            'email.required' => '请输入邮箱',
            'email.email' => '无效的邮箱',
            'email.exists' => '邮箱不存在',
            'token.requred' => '无效的token',
            'token.string' => '无效的token',
            'password.required' => '密码不能为空',
            'password.min' => '密码最小为6个字符',
            'password.max' => '密码最大为10个字符',
            'password.confirmed' => '两次密码不一致',
        ];
    }
}
