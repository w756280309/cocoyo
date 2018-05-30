<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Notifications\SendRushCouponSuccessNotification;
use Illuminate\Console\Command;
use GuzzleHttp\Client;

class RushCoupon extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cocoyo:rush';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '这是抢购神州租车优惠券所写的';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $client = new Client();

        $user = User::find(1);
        // 抢购接口
        $url = 'https://mktm.zuche.com/weika/getQuan.do';
        // 所需参数
        $params = [
            'mobile' => '18707532644',
            'szhdbm' => '',
            'from' => 'msduanwu'
        ];

        // 循环100次抢购
        for ($i = 0; $i < 100; $i ++) {
            $response = $client->request('POST', $url, ['form_params' => $params]);
            $response = json_decode($response->getBody()->getContents(), true);
            if ($response['status'] == 1) {
                $user->notify(new SendRushCouponSuccessNotification($user));
                break;
            }
            logger('抢购' . $i . '次');
        }
    }
}
