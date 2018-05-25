哈哈！我也不知道在业余时间怼了多少次自己的博客了:smile:

## 安装
克隆项目
```
git clone git@github.com:ningge123/cocoyo.git
```

进入目录

```
composer install
```

下载前端资源

```
npm install
```

复制`.env.example`为`.env`

```
cp .env.example .env
```

配置`.env`

### 介绍一些所需要的配置项

 `Redis`因为需要记录文章统计访问数和用户最后访问时间,所以你需要配置`redis`项

```
REDIS_HOST=
REDIS_PASSWORD=
REDIS_PORT=
```

用户注册验证邮箱需要用到邮件发送，所以需要配置邮件服务,我这里使用的是`sendcloud`

```
MAIL_DRIVER=
SEND_CLOUD_USER=
SEND_CLOUD_KEY=
MAIL_FROM_ADDRESS=
MAIL_FROM_NAME=
```

站内消息提醒使用的是`laravel`的广播系统,所以需要配置`pusher`:

```
PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=

//还需要配置`/resources/assets/js/commponents/Navbar.vue`里的:
key: '65f5c4e6ce56d46ab2c6',
```

文件系统用的是`public`目录:

```
FILESYSTEM_DRIVER=public
```

所以需要执行:

```
php artisan storage:link
```

`api`认证用的是`passport`:

```
OAUTH_GRANT_TYPE=
OAUTH_CLIENT_ID=
OAUTH_CLIENT_SECRET=
OAUTH_SCOPE=*
```

所以需要执行:

```
php artisan make:passport:install
```

文章标题转为英文,用的是有道翻译接口:

```
YOUDAO_APP_KEY=
YOUDAO_APP_SECRET=
```

第三方登陆`QQ`和`weibo`,当然你也可以屏蔽:

```
WEIBO_KEY=
WEIBO_SECRET=
WEIBO_REDIRECT_URI=

QQ_KEY=
QQ_SECRET=
QQ_REDIRECT_URI=
```

配置就是这些！下面介绍两个自定义`artisan`:

```
php artisan  cocoyo:sync-database-visit // 将访问数从 Redis 同步到数据库中
php artisan cocoyo:sync-user-actived-at // 将用户最后登录时间从 Redis 同步到数据库中
```

还有定义了两个任务调度:

```
// 每日零时执行一次 同步redis最后用户访问时间到数据库
$schedule->command('cocoyo:sync-user-actived-at')->dailyAt('00:00');
// 每周六零时执行一次 同步redis 访问数至数据库
$schedule->command('cocoyo:sync-database-visit')->weekly()->saturdays()->dailyAt('00:00');
```

所以需要加上定时任务

```
* * * * * php /data/www/cocoyo/artisan schedule:run >> /dev/null 2>&1
```

最后是一些截图:

![8W%5D(M3_L(Z3W39NZ{GZP.png](https://www.cocoyo.xin/storage/201805/22/40OWriP9T8BSLR4gWL5xwganX9aXm10Xrg3uydfw.png)

![XL5AF{ZD@3YC{$PU})AU%V.png](https://www.cocoyo.xin/storage/201805/22/eflLfLwPMWVD7YJEjjLIosA0TQvPmw0SqIJjfooD.png)

附上地址[cocoyo](https://www.cocoyo.xin)。:laughing: