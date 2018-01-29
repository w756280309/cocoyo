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
   Route::post('/dashboard/login', 'LoginController@login')->name('user.login');
});

# ==================== Upload =----------------------
Route::group(['prefix' => 'upload'], function () {
    Route::post('image', 'UploadController@uploadImage');
});


# ==================== Dashboard =----------------------

Route::group(['namespace' => 'Admin', 'prefix' => 'dashboard', 'middleware' => ['auth:api']], function () {
    Route::resource('users', 'UserController', ['except' => ['create', 'show']]);
    Route::post('/users/{user}/status', 'UserController@status');
});