<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
  public function templates()
  {
      return $this->belongsToMany('App\Template');
  }
}
