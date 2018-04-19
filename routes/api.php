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

Route::group(['namespace' => 'Api'], function () {
    Route::get('articles', 'ArticleController@index');
    Route::get('articles/{slug}', 'ArticleController@show');

    Route::get('commentable/{commentableId}/comment', 'CommentController@show');
    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('comments', 'CommentController@store');
        Route::delete('comments/{comment}', 'CommentController@destroy');

        Route::get('users/{username}', 'UserController@show');
    });
});


# ==================== Auth =----------------------
Route::group(['namespace' => 'Auth'], function () {
   Route::post('login', 'LoginController@login')->name('user.login');
});

# ==================== Dashboard =----------------------

Route::group(['namespace' => 'Admin', 'prefix' => 'dashboard', 'middleware' => 'auth:api'], function () {

    # ==================== User Manager =----------------------
    Route::get('statistics', 'DashboardController@statistics');

    # ==================== User Manager =----------------------
    Route::resource('users', 'UserController', ['except' => ['create', 'show']]);
    Route::put('users/{user}/status', 'UserController@status');
    Route::post('users/{user}/avatar', 'UserController@avatar');

    # ==================== Article Manager =----------------------
    Route::resource('articles', 'ArticleController', ['except' => ['create', 'show']]);

    # ==================== Comments Manager =----------------------
    Route::resource('comments', 'CommentController', ['except' => ['create', 'show', 'store']]);

    # ==================== Category Manager =----------------------
    Route::resource('categories', 'CategoryController', ['except' => ['create', 'show']]);

    # ==================== Tags Manager =----------------------
    Route::resource('tags', 'TagController', ['except' => ['create', 'show']]);

    # ==================== Links Manager =----------------------
    Route::resource('links', 'LinkController', ['except' => ['create', 'show']]);
    Route::put('links/{link}/status', 'LinkController@status');

    # ==================== Visitors Manager =----------------------
    Route::get('visitors', 'visitorController@index');

    # ==================== Upload Manager =----------------------
    Route::post('upload/image', 'UploadController@image');
});