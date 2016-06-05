
@section('pane-campaigns')
<form class='sites_form'>
  <div class="rowElem">
    <label for="name">Site: </label>
    <select id='campaign_editor_sites'>
    </select>
  </div>
</form>
<form>
  <div class="rowElem nopad">
    <label for="name">Campaign: </label>
    <select id='campaign_editor_campaign'>
    </select>
  </div>
  <div class="rowElem nopad">
    <label for="name">Template: </label>
    <select id='campaign_editor_template'>
    </select>
    <button type="button" id="campaign_editor_add_template">Add</button>
  </div>
  </form>
  <div id="campaign_editor_template_container">
    <form>
    <div id="campaign_editor_accordion">
    </div>
  </form>
    <button type="button" id="campaign_editor_preview_campaign">Preview</button>
  </div>
  @endsection
