<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::auth();

Route::get('/home', 'HomeController@index');
Route::get('/teams', 'TeamsController@index');
Route::any('/teams/edit', 'TeamsController@edit');

Route::get('/tiers', 'TiersController@index');
Route::any('/tiers/edit', 'TiersController@edit');

Route::get('/sites', 'SitesController@index');
Route::get('/sites/edit', 'SitesController@edit');
Route::get('/sites/frame', 'SitesController@frame');
Route::any('/sites/edit/frame', 'SitesController@editframe');
