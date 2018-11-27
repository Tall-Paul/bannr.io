<?php
  header('Content-Type: text/javascript');
 ?>

var bannr_data = JSON.parse(<?php echo(json_encode(html_entity_decode($data))); ?>);


document.write('<scr'+'ipt type="text/javascript" src="https://loader.bannr.io/js/bQuery.js" ></scr'+'ipt>');
