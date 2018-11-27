<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateScheduleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('schedules', function (Blueprint $table) {
          $table->increments('id');
          $table->string('name');
          $table->dateTime('start_at');
          $table->dateTime('finish_at');
          $table->string('country_codes');
          $table->text('data');
          $table->integer('site_id');
          $table->dateTime('created_at');
          $table->dateTime('updated_at');
      });


      Schema::create('campaign_schedule', function(Blueprint $table){
          $table->integer('campaign_id');
          $table->integer('schedule_id');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('schedules');
        Schema::drop('campaign_schedule');
    }
}
