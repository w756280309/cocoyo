<?php

namespace App\Traits;

use GuzzleHttp\Client;
use App\Exceptions\UnauthorizedException;
use GuzzleHttp\Exception\RequestException;

trait ProxyHelpers
{
    public function authenticate()
    {
        $client = new Client();

        try {
            $url = request()->root() . '/api/oauth/token';

            $params = array_merge(config('passport.proxy'), [
                'email' => request('email'),
                'password' => request('password'),
            ]);

            $respond = $client->request('POST', $url, ['form_params' => $params]);
        } catch (RequestException $exception) {
            return $this->failed('请求失败，服务器错误');
        }

        if ($respond->getStatusCode() !== 401) {
            return json_decode($respond->getBody()->getContents(), true);
        }

        return $this->failed('账号或密码错误');
    }
}