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

# ==================== Login =----------------------
Route::group(['namespace' => 'Auth'], function () {
   Route::post('dashboard/login', 'LoginController@login')->name('user.login');
});

# ==================== Upload =----------------------
Route::group(['prefix' => 'upload'], function () {
    Route::post('image', 'UploadController@uploadImage');
});


# ==================== Dashboard =----------------------

Route::group(['namespace' => 'Admin', 'prefix' => 'dashboard', 'middleware' => ['auth:api']], function () {

    # ==================== User Manager =----------------------
    Route::resource('users', 'UserController', ['except' => ['create', 'show']]);
    Route::put('users/{user}/status', 'UserController@status');
    Route::post('users/{user}/avatar', 'UserController@avatar');

    # ==================== Article Manager =----------------------
    Route::resource('articles', 'ArticleController', ['except' => ['create', 'show']]);

    # ==================== Comments Manager =----------------------
    Route::resource('comments', 'CommentController', ['except' => ['create', 'show', 'store']]);

    # ==================== Category Manager =----------------------
    Route::resource('category', 'CategoryController', ['except' => ['create', 'show']]);

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