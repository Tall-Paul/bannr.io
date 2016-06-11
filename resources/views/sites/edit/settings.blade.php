
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
</form>
@endsection
