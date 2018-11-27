@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Teams</div>

                <div class="panel-body">
                  {!! $edit->header !!}
                  <div class="col-md-10 col-md-offset-1">
                    {!! $edit->render('name') !!}
                  </div>
                   <div class="col-md-10 col-md-offset-1 top-margin-20">
                    {!! $edit->render('tier_id') !!}
                  </div>

                <div class="col-md-10 col-md-offset-1 top-margin-20">
                <ul class="nav nav-tabs" id="teamTabs" role="tablist">
                    <li class='active'><a href="#sites" role="tab" data-toggle="tab">Sites</a></li>
                    <li><a href="#users" role="tab" data-toggle="tab" >Users</a></li>
                </ul>
                <div class="tab-content">
                   <div class="tab-pane active" id="sites">
                       {!! $edit->field('site_iframe') !!}
                   </div>
                   <div class="tab-pane" id="users">
                       {!! $edit->field('user_iframe') !!}
                   </div>

               </div>
               </div>
               <div class="col-md-10 col-md-offset-1">
                 {!! $edit->footer !!}
                </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
