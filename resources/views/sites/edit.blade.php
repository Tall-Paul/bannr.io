@extends('layouts.app')
@section('content')
 @include('sites.edit.templates')
 @include('sites.edit.campaigns')
 @include('sites.edit.settings')
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Site:
                @if($new)
                  New
                @else
                  {{ $site->name }}
                @endif
                </div>

                <div class="panel-body editor-panel">
                  <div class="col-sm-9 col-md-9 col-lg-9" style="padding:0px">
                    <iframe id="preview" src="@if ($new) @else http://{{$site->proxyurl}}.nodeploy.it @endif"></iframe>
                  </div>
                  <div class="col-sm-3 col-md-3 col-lg-3" style="padding:0px">
                    <ul class="nav nav-tabs" id="editorTabs" role="tablist">
                      @if (!$new)
                        <li class='active'><a href="#templates" role="tab" data-toggle="tab">Templates</a></li>
                        <li><a href="#campaigns" role="tab" data-toggle="tab">Campaigns</a></li>
                        <li><a href="#schedule" role="tab" data-toggle="tab">Schedule</a></li>
                        <li><a href="#live" role="tab" data-toggle="tab">Live</a></li>
                      @endif
                      <li><a href="#settings" role="tab" data-toggle="tab"><i class="fa fa-btn fa-gears"></i></a></li>
                    </ul>

                   <div class="tab-content">
                     @if (!$new)
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
                      @endif
                      <div class="tab-pane @if ($new) active @endif" id="settings">
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
