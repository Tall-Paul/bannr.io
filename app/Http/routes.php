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

Validator::extend('teamurl', 'customValidation@teamurl','That url is taken! You need to be invited to join an existing team');

Route::group(array('domain' => 'proxy.bannr.io'), function()
{
    Route::any('/{site_id}/', 'ProxyController@index');
    Route::any('/{site_id}/{any}', 'ProxyController@index');
    Route::get("/{site_id}/{path}", "ProxyController@index")->where('path', '.+');
});


Route::get('/', 'HomeController@index');

Route::get('/api/sites/{site_id}/schedules/current','ApiController@getCurrentSchedule');
Route::get('/loader/{site_id}.js','ApiController@getJsFile');
Route::get('/loader/{site_id}.css','ApiController@getCssFile');
Route::get('/api/sites/{site_id}/currentJson.json','ApiController@getCurrentScheduleJson');




Route::auth();



Route::get('/home', 'HomeController@index');
Route::get('/teams', 'TeamsController@index');
Route::any('/teams/edit', 'TeamsController@edit');

Route::get('/tiers', 'TiersController@index');
Route::any('/tiers/edit', 'TiersController@edit');

//Route::get('/sites', 'SitesController@index');
Route::get('/sites/edit', 'SitesController@edit');
Route::get('/sites/frame', 'SitesController@frame');
Route::any('/sites/edit/frame', 'SitesController@editframe');

Route::get('/users/frame', 'UsersController@frame');
Route::get('/users/edit/frame', 'UsersController@editframe');
Route::post('/users/add','UsersController@adduser');

//api routes
//
Route::get('/api/sites/{site_id}','ApiController@getSite');
Route::post('/api/sites/{site_id}','ApiController@postSite');

Route::get('/api/sites/{site_id}/templates','ApiController@getTemplates');
Route::post('/api/sites/{site_id}/templates/{template_id}','ApiController@postTemplate');

Route::get('/api/sites/{site_id}/campaigns','ApiController@getCampaigns');
Route::post('/api/sites/{site_id}/campaigns/{campaign_id}','ApiController@postCampaign');

Route::get('/api/sites/{site_id}/schedules','ApiController@getSchedules');
Route::get('/api/sites/{site_id}/schedules/live/{time}','ApiController@getLiveSchedule');
Route::post('/api/sites/{site_id}/schedules/{schedule_id}','ApiController@postSchedule');

Route::post('/api/sites/{site_id}/images','ApiController@uploadImage');
