<?php
  header('Content-Type: text/javascript');
 ?>

var bannr_data = JSON.parse(<?php echo(json_encode(html_entity_decode($data))); ?>);
var script = document.createElement('script');
script.setAttribute('src', 'http://{{$site}}/js/bQuery.js');
script.setAttribute('type', 'text/javascript');
document.getElementsByTagName('head')[0].appendChild(script);
