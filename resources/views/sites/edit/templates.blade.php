
@section('pane-templates')
<form class='sites_form'>
  <div class="rowElem">
    <label for="name">Site: </label>
    <select id='template_editor_sites'>
    </select>
  </div>
</form>
<form>
  <div class="rowElem nopad">
    <label for="name">Template: </label>
    <select id='template_editor_template'>
    </select>
  </div>
  <div class="rowElem">
    <label for="name">Name: </label>
    <input type='text' id='template_editor_name' name='name' />
  </div>
  <div class="rowElem">
    <label for="target">Target: </label>
    <input type='text' id='template_editor_target' name='target' />
  </div>
  <div class="rowElem">
    <label for="replacement">inject: </label>
    <select id='template_editor_inject'>
      <option value="replace">replace</option>
      <option value="prepend">prepend</option>
      <option value="append">append</option>
    </select>
  </div>
  <div class="rowElem">
    <label for="html">Javascript: </label>
    <textarea id="template_editor_javascript" name='javascript'></textarea>
  </div>
  <div class="rowElem">
    <label for="html">HTML: </label>
    <textarea id="template_editor_html" name='html'></textarea>
  </div>
  <div id="template_editor_data_inputs">
  </div>
  <button type="button" id="preview_button">Preview</button>
  <form>
@endsection
