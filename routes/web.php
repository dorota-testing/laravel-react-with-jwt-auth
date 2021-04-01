<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// this makes all urls go to react view. So it is possible to reload page
Route::get('/{path?}', [
    'uses' => 'App\Http\Controllers\ReactController@react',
    'as' => 'react',
    'where' => ['path' => '.*']
]);

// Auth::routes();

// Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'dashboard'])->name('dashboard');
