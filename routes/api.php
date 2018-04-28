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

Route::get('user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

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
        # ------------------- 当前用户是否关注查看用户 ----------------------------
        Route::get('users/{username}/is-follow', 'UserController@isFollowing')->name('users.is.follow');
        # ------------------- 评论 ----------------------------
        Route::post('comments', 'CommentController@store')->name('comments.store');
        # ------------------- 删除评论 ----------------------------
        Route::delete('comments/{comment}', 'CommentController@destroy')->name('Comment.destroy');
    });
});


# ------------------- Auth ----------------------------
Route::group(['namespace' => 'Auth'], function () {
   Route::post('login', 'LoginController@login')->name('user.login');
    Route::group(['prefix' => 'auth/qq'], function () {
        Route::get('/', 'SocialiteAuthController@redirectToProvider');
        Route::get('callback', 'SocialiteAuthController@handleProviderCallback');
    });
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