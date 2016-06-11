<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
  public function campaigns()
  {
      return $this->belongsToMany('App\Campaign');
  }

  public function site(){
      return $this->belongsTo('App\Site');
  }
}
