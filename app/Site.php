<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
  public function users()
  {
    return $this->belongsToMany('App\User');
  }

  public function templates()
  {
    return $this->hasMany('App\Template');
  }

  public function campaigns()
  {
    return $this->hasMany('App\Campaign');
  }

  public function schedules()
  {
    return $this->hasMany('App\Schedule');
  }

  public function save(array $options = Array()){
    //TODO: add site to proxy
    return parent::save();
  }
}
