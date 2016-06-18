@extends('layouts.app')
@section('content')
 @include('sites.edit.templates')
 @include('sites.edit.campaigns')
 @include('sites.edit.settings')
  @include('sites.edit.schedule')
  @include('sites.edit.live')
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Site: {{ $site->name }}
                    <div class="pull-right">
                        <button type="button" class='btn btn-primary header-btn' id="show_editor">+</button>
                        <button type="button" class='btn btn-primary header-btn' id="hide_editor">-</button>
                    </div>
                </div>
                <div class="panel-body editor-panel">
                  <div class="col-lg-8 main-panel" style="padding:0px">
                    <div style="padding:5px" id="behaviour">
                       <label class="radio-inline"><input type="radio" name="behaviour" checked='1' value='navigate'>Navigate</label>
                       <label class="radio-inline"><input type="radio" name="behaviour" value='select'>Select</label>
                     </div>
                    <iframe id="preview" class='preview_iframe' src= "http://{{$site->id}}.nodeploy.it"></iframe>
                  </div>
                  <div class="col-lg-4 side-panel" style="padding:0px">

                    <input type="hidden" name="_token" id='_token' value="<?php echo csrf_token(); ?>">
                    <input type='text' id='editor_siteid' value='{{$site->id}}' style='display:none'/>
                    <div class="editor_hidden">
                    <ul class="nav nav-tabs" id="editorTabs" role="tablist">
                        <li class='active'><a href="#templates" role="tab" data-toggle="tab" onClick="templateBuilder.reInit();">Templates</a></li>
                        <li><a href="#campaigns" role="tab" data-toggle="tab" onClick="campaignBuilder.reInit();">Campaigns</a></li>
                        <li><a href="#schedule" role="tab" data-toggle="tab" onClick="scheduleBuilder.reInit();">Schedule</a></li>
                        <li><a href="#live" role="tab" data-toggle="tab" onClick="scheduleBuilder.setLive();"><i class="fa fa-btn fa-clock-o"></i></a></li>
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
</div>
@endsection
