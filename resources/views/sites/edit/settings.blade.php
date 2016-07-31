
@section('pane-settings')
<h2>Settings</h2>
<form>
  <div class="rowElem">
    <label for="name">Name: </label>
    <input type='text' id='site_editor_name' name='name' value='{{ $site->name }}'/>
  </div>
  <div class="rowElem">
    <label for="name">URL: </label>
    <input type='text' id='site_editor_url' name='name' value='{{ $site->url }}' />
  </div>
  <div class="rowElem">
      <p>Add the following tag to your site within the head tag</p>
      <pre><?php echo htmlentities("<script src='https://loader.bannr.io/loader/".$site->id.".js'></script>"); ?></pre>
  </div>
  @if (!$demo)
  <button type="button" class='btn btn-primary' id="settings_save_button">Save</button>
  @endif
</form>
@endsection
