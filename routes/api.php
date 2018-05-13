<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
# ---------------------------- Upload Manager ----------------------------
Route::post('upload/image', 'UploadController@uploadImage');

Route::group(['namespace' => 'Api'], function () {
    # ------------------- 文章列表 ----------------------------
    Route::get('articles', 'ArticleController@index')->name('articles.index');
    # ------------------- 文章详情 ----------------------------
    Route::get('articles/{slug}', 'ArticleController@show')->name('articles.show');
    # ------------------- 评论详情 ----------------------------
    Route::get('commentable/{commentableId}/comment', 'CommentController@show')->name('comments.show');
    # ------------------- 用户详情 ----------------------------
    Route::get('users/{username}', 'UserController@show')->name('users.show');
    # ------------------- 用户评论 ----------------------------
    Route::get('users/{username}/replies', 'UserController@replies')->name('users.replies');
    # ------------------- 用户关注 ----------------------------
    Route::get('users/{username}/following', 'UserController@following')->name('users.following');

    # ------------------- 需要登录路由 ----------------------------
    Route::group(['middleware' => 'auth:api'], function () {
        # ------------------- 用户消息 ----------------------------
        Route::get('users/{username}/notifications', 'UserController@notifications')->name('users.notifications');
        # ------------------- 用户资料 ----------------------------
        Route::get('users/{username}/profile', 'UserController@edit');
        # ------------------- 编辑用户资料 ----------------------------
        Route::put('users/{username}/profile', 'UserController@update');
        # ------------------- 修改头像 ----------------------------
        Route::put('users/{username}/avatar', 'UserController@avatar');
        # ------------------- 修改邮件通知 ----------------------------
        Route::put('users/{username}/email_notify_enabled', 'UserController@email_notify_enabled');
        # ------------------- 修改密码 ----------------------------
        Route::put('users/{username}/edit_password', 'UserController@edit_password');
        # ------------------- 关注用户 ----------------------------
        Route::post('users/{user}/follow', 'UserController@doFollow')->name('users.doFollow');
        # ------------------- 评论 ----------------------------
        Route::post('comments', 'CommentController@store')->name('comments.store');
        # ------------------- 删除评论 ----------------------------
        Route::delete('comments/{comment}', 'CommentController@destroy')->name('Comment.destroy');
    });
});


# ------------------- Auth ----------------------------
Route::group(['namespace' => 'Auth'], function () {
    # ------------------- 用户登录 ----------------------------
    Route::post('login', 'LoginController@login')->name('login');
    # ------------------- 第三方登录 ----------------------------
    Route::post('socials/{social_type}/authorizations', 'AuthorizationsController@socialStore')->name('socials.authorizations.store');
    # ------------------- 用户注册 ----------------------------
   Route::post('register', 'RegisterController@register')->name('register');
    # ------------------- 退出登录 ----------------------------
    Route::post('logout', 'LoginController@logout')->name('logout')->middleware('auth:api');
    # ------------------- 确认邮箱 ----------------------------
   Route::put('register/confirmed', 'RegisterController@confirmed')->name('register.confirmed');
    # ------------------- 重新发送确认邮箱 ----------------------------
   Route::put('register/send-register-email', 'RegisterController@sendRegisterEmail')->middleware('throttle:2,1')->name('register.send.register.email');
    # ------------------- 发送重置密码链接 ----------------------------
    Route::post('send-forget-password-mail', 'ForgotPasswordController@sendForgetPasswordMail')->name('send.forget.password.mail');
    # ------------------- 重置密码 ----------------------------
    Route::post('forget-password', 'ForgotPasswordController@forgetPassword')->name('forget.password');
});

# ------------------- Dashboard ----------------------------
Route::group(['namespace' => 'Admin', 'prefix' => 'dashboard', 'middleware' => 'auth:api'], function () {
    # ---------------------------- statistics ----------------------------
    Route::get('statistics', 'DashboardController@statistics');
    # ---------------------------- User Manager ----------------------------
    Route::resource('users', 'UserController', ['except' => ['create', 'show']]);
    Route::put('users/{user}/status', 'UserController@status');
    Route::post('users/{user}/avatar', 'UserController@avatar');
    # ---------------------------- Article Manager ----------------------------
    Route::resource('articles', 'ArticleController', ['except' => ['create', 'show']]);

    # ---------------------------- Comments Manager ----------------------------
    Route::resource('comments', 'CommentController', ['except' => ['create', 'show', 'store']]);

    # ---------------------------- Category Manager ----------------------------
    Route::resource('categories', 'CategoryController', ['except' => ['create', 'show']]);

    # ----------------------------Tags Manager ----------------------------
    Route::resource('tags', 'TagController', ['except' => ['create', 'show']]);

    # ----------------------------Links Manager ----------------------------
    Route::resource('links', 'LinkController', ['except' => ['create', 'show']]);
    Route::put('links/{link}/status', 'LinkController@status');

    # ---------------------------- Visitors Manager ----------------------------
    Route::get('visitors', 'visitorController@index');

    # ---------------------------- Upload Manager ----------------------------
    Route::post('upload/image', 'UploadController@image');
});