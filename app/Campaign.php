<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
  public function templates()
  {
      return $this->belongsToMany('App\Template');
  }

  public function site(){
    return $this->belongsTo('App\Campaign');
  }

  public function schedules()
  {
      return $this->belongsToMany('App\Schedule');
  }

}
