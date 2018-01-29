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

Route::group(['namespace' => 'Auth'], function () {
   Route::post('dashboard/login', 'LoginController@login')->name('user.login');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

# ==================== Dashboard =----------------------

Route::group(['namespace' => 'Admin', 'prefix' => 'dashboard', 'middleware' => ['auth:api']], function () {
    Route::resource('users', 'UserController', ['except' => ['create', 'show']]);
    Route::post('/users/{user}/status', 'UserController@status');
});