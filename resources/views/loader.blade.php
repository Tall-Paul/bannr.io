<?php
  header('Content-Type: text/javascript');
 ?>

var bannr_data = JSON.parse(<?php echo(json_encode(html_entity_decode($data))); ?>);


document.write('<scr'+'ipt type="text/javascript" src="http://loader.bannr.io/js/bQuery.js" ></scr'+'ipt>');


//var script = document.createElement('script');
//script.setAttribute('src', 'http://loader.bannr.io/js/bQuery.js');
//script.setAttribute('type', 'text/javascript');
//document.getElementsByTagName('head')[0].appendChild(script);
