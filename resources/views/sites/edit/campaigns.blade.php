
@section('pane-campaigns')
  <div class="rowElem nopad">
    <label for="campaign">Campaign: </label>
    <select id='campaign_editor_campaign'>
    </select>
  </div>
  <div class="rowElem">
    <label for="name">Name: </label>
    <input type='text' id='campaign_editor_name'/>
  </div>
  <div class="rowElem nopad">
    <label for="name">Template: </label>
    <select id='campaign_editor_template'>
    </select>
    <button type="button" class='btn btn-small' id="campaign_editor_add_template">Add</button>
  </div>
  <div class="rowElem">
  <div id="campaign_editor_template_container">
    <div id="campaign_editor_accordion" class='template_accordian'>
    </div>
</div>
</div>
<button type="button" class='btn btn-primary' id="campaign_editor_preview_campaign">Preview</button>
  <button type="button" class= 'btn btn-primary' id="campaign_save_button">Save</button>
  @if (!$demo)
  <div class="pull-right">
      <button type="button" class= 'btn btn-primary' id="campaign_delete_button">Delete</button>
  </div>
  @endif
  @endsection
