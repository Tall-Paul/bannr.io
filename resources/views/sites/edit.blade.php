@extends('layouts.app')
@section('content')
 @include('sites.edit.templates')
 @include('sites.edit.campaigns')
 @include('sites.edit.settings')
  @include('sites.edit.schedule')
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Site: {{ $site->name }}
                </div>
                <div class="panel-body editor-panel">
                  <div class="col-sm-9 col-md-9 col-lg-9" style="padding:0px">
                    <div style="padding:5px" id="behaviour">
                       <label class="radio-inline"><input type="radio" name="behaviour" checked='1' value='navigate'>Navigate</label>
                       <label class="radio-inline"><input type="radio" name="behaviour" value='select'>Select</label>
                     </div>
                    <iframe id="preview" src= "http://{{$site->id}}.nodeploy.it"></iframe>
                  </div>
                  <div class="col-sm-3 col-md-3 col-lg-3" style="padding:0px">
                    <input type="hidden" name="_token" id='_token' value="<?php echo csrf_token(); ?>">
                    <input type='text' id='editor_siteid' value='{{$site->id}}' style='display:none'/>
                    <ul class="nav nav-tabs" id="editorTabs" role="tablist">
                        <li class='active'><a href="#templates" role="tab" data-toggle="tab" onClick="templateBuilder.reInit();">Templates</a></li>
                        <li><a href="#campaigns" role="tab" data-toggle="tab" onClick="campaignBuilder.reInit();">Campaigns</a></li>
                        <li><a href="#schedule" role="tab" data-toggle="tab" onClick="scheduleBuilder.reInit();">Schedule</a></li>
                        <li><a href="#live" role="tab" data-toggle="tab">Live</a></li>
                      <li><a href="#settings" role="tab" data-toggle="tab"><i class="fa fa-btn fa-gears"></i></a></li>
                    </ul>

                   <div class="tab-content">
                      <div class="tab-pane active" id="templates">
                        @yield('pane-templates')
                      </div>
                      <div class="tab-pane" id="campaigns">
                        @yield('pane-campaigns')
                      </div>
                      <div class="tab-pane" id="schedule">
                        @yield('pane-schedule')
                      </div>
                      <div class="tab-pane" id="live">
                        @yield('pane-live')
                      </div>
                      <div class="tab-pane " id="settings">
                        @yield('pane-settings')
                      </div>
                  </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
