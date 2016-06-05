<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBannrTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('teams', function (Blueprint $table) {
          $table->increments('id');
          $table->string('name');
          $table->integer('tier_id');
          $table->dateTime('created_at');
          $table->dateTime('updated_at');
      });

      Schema::create('sites', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('team_id');
          $table->string('name');
          $table->string('url');
          $table->string('proxyurl');
          $table->boolean('validated')->default(0);
          $table->dateTime('created_at');
          $table->dateTime('updated_at');
      });

      Schema::create('templates', function (Blueprint $table) {
          $table->increments('id');
          $table->string('name');
          $table->string('target');
          $table->string('inject');
          $table->text('javascript');
          $table->text('html');
          $table->text('defaults');
          $table->integer('site_id');
          $table->dateTime('created_at');
          $table->dateTime('updated_at');
      });

      Schema::create('campaigns', function (Blueprint $table) {
          $table->increments('id');
          $table->string('name');
          $table->text('data');
          $table->integer('site_id');
          $table->dateTime('created_at');
          $table->dateTime('updated_at');
      });

      Schema::create('tiers', function (Blueprint $table) {
          $table->increments('id');
          $table->boolean('special');
          $table->string('name');
          $table->integer('users');
          $table->integer('sites');
          $table->integer('templates');
          $table->integer('campaigns');
          $table->dateTime('created_at');
          $table->dateTime('updated_at');
      });

      //relations
      Schema::create('team_user', function (Blueprint $table) {
          $table->integer('team_id');
          $table->integer('user_id');
          $table->boolean('admin');
      });

      Schema::create('campaign_template', function(Blueprint $table){
          $table->integer('campaign_id');
          $table->integer('template_id');
      });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
