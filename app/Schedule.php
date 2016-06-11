<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
  public function campaigns()
  {
      return $this->belongsToMany('App\Campaign');
  }

  public function site(){
      return $this->belongsTo('App\Site');
  }

  public function getMergedCampaigns(){
      return null;
  }
}
