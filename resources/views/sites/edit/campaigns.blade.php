
@section('pane-campaigns')
<form>
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
    <button type="button" class='btn btn-primary' id="campaign_editor_add_template">Add</button>
  </div>
  </form>
  <div id="campaign_editor_template_container">
    <form>
    <div id="campaign_editor_accordion" class='template_accordian'>
    </div>
  </form>
    <button type="button" class='btn btn-primary' id="campaign_editor_preview_campaign">Preview</button>
      <button type="button" class= 'btn btn-primary' id="campaign_save_button">Save</button>
  </div>
  @endsection
