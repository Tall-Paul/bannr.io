
@section('pane-templates')
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
<ul class="nav nav-tabs" id="editorTabs" role="tablist">
    <li class='active'><a href="#template_settings" role="tab" data-toggle="tab">Design</a></li>
    <li ><a href="#template_data" role="tab" data-toggle="tab">Data</a></li>
</ul>

<div class="tab-content" style="min-height:500px">
  <div class="tab-pane active" id="template_settings">
      <form>
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


  </div>
  <div class="tab-pane" id="template_data">
      <div id="template_editor_data_inputs">
      </div>
  </div>
</div>

<button type="button" class='btn btn-primary' id="template_preview_button">Preview</button>
<button type="button" class= 'btn btn-primary' id="template_save_button">Save</button>
<div class="pull-right">
    <button type="button" class= 'btn btn-primary' id="template_delete_button">Delete</button>
</div>
</div>
@endsection
