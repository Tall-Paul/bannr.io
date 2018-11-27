<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Auth;

class Team extends Model
{
  protected $fillable = [
      'name', 'url', 'tier'
  ];

  public function users()
  {
      return $this->belongsToMany('App\User')->withPivot('admin');
  }

  public function sites()
  {
    return $this->hasMany('App\Site');
  }

  public function tier()
  {
    return $this->belongsTo('App\Tier');
  }

  public function tierName(){
    return $this->tier->name;
  }

  public function save(array $options = Array()){
    parent::save($options);
    $this->users()->attach(Auth::user()->id);
  }
}
