<?php
/**
 * Created by PhpStorm.
 * User: cocoyo
 * Date: 2018/6/8 0008
 * Time: 0:20
 */
if (!function_exists('ddd')) {
    /**
     * 封装dd打印函数,使postman显示格式化
     * @param array ...$args
     */
    function ddd(...$args)
    {
        http_response_code(500);
        call_user_func_array('dd', $args);
    }
}

if (! function_exists('rand_avatar')) {
    function rand_avatar() {
        $avatars = [
            '/images/default_avatar.png',
            '/images/default_avatar_1.png',
            '/images/default_avatar_2.png',
            '/images/default_avatar_3.png',
            '/images/default_avatar_4.png'
        ];

        return array_random($avatars);
    }
}