@extends('layouts.frame')
@section('content')
<form method="POST" action="/users/add">
    <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>"/>
    <div class="pull-right" style="margin-top:5px;margin-bottom:10px;">
        <a href="/users/frame" class="btn btn-default">Back</a>
    </div>
    <div style="clear:both"></div>
    <div class="rowElem">
      <label for="name">Email Address: </label>
      <input type='text' id='new_user_email' name='email'/>
    </div>
    <div class="rowElem">
        <label for="name">Admin</label>
        <input type="checkbox" name="admin" value="1">
    </div>
    <div class="top-margin-20">
     <input type="submit" name="add_user" class="btn btn-primary" value="Invite"/>
    </div>
</form>
@endsection
