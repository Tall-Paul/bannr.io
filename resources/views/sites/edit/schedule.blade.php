@section('pane-schedule')
<form>
  <div class="rowElem nopad">
    <label for="campaign">Schedule: </label>
    <select id='schedule_editor_schedule'>
    </select>
  </div>
  <div class="rowElem">
    <label for="name">Name: </label>
    <input type='text' id='schedule_editor_name'/>
  </div>
  <div class="rowElem">
    <label for="name">Start: </label>
    <input type='text' id='schedule_editor_start' class='datetimepicker'/>
  </div>
  <div class="rowElem">
    <label for="name">Finish: </label>
    <input type='text' id='schedule_editor_finish' class='datetimepicker'/>
  </div>
  <div class="rowElem">
    <label for="geo">Countries: </label>
    <input type='text' id='schedule_editor_geo'/>
  </div>
  <div class="rowElem nopad">
    <label for="name">Campaign: </label>
    <select id='schedule_editor_campaigns'>
    </select>
    <button type="button" class='btn btn-small' id="schedule_editor_add_campaign">Add</button>
  </div>
  </form>
   <div class="rowElem">
  <div id="schedule_editor_template_container">
    <div id="schedule_editor_accordion" class='template_accordion'>
    </div>
</div>
  </div>
  <button type="button" class='btn btn-primary' id="schedule_editor_preview_schedule">Preview</button>
    <button type="button" class='btn btn-primary' id="schedule_save_button">Save</button>
    @if (!$demo)
    <div class="pull-right">
        <button type="button" class= 'btn btn-primary' id="schedule_delete_button">Delete</button>
    </div>
    @endif
  @endsection
