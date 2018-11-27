<?php
class customValidation
 {
  public function teamurl($field, $value, $parameters){
      return true;
      //return true if field value is foo
      $check = Team::where('url',$value);
      Log::info('in validator');
      if ($check)
        return false;
      else
        return true;
  }
 }
