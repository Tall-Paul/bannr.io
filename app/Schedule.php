<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
  public function campaign()
  {
      return $this->belongsTo('App\Campaign');
  }

  public function site(){
      return $this->belongsTo('App\Site');
  }
}
