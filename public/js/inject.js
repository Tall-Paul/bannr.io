var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

var current_state = 'navigate';

function reset_ui(){
  jQuery('.blink_me').removeClass('blink_me');
  jQuery('.hover_outline').removeClass('hover_outline');
}

function bannr_template_preview(templates,data){
  reset_ui();
  jQuery('#bannr_editor_templates').html(templates);
  jQuery.each( data, function(key1, element ) {
    jQuery.each( element, function(key2, block) {
      var fragment = jQuery('.'+block.template).html();
      var target = jQuery('.'+block.template).data('target');
      var inject = jQuery('.'+block.template).data('inject');
      var js = block.javascript || "";
      js = Base64.decode(js);
      console.log(js);
      jQuery.each(block, function(fieldname, fieldval){
        fragment = fragment.replace("{{"+fieldname+"}}",fieldval);
        js = js.replace("{{"+fieldname+"}}",fieldval);
      });
      switch (inject){
        case 'replace':
          jQuery(target).html(fragment);
        break;
        case 'append':
          jQuery('.remove_me').remove();
          jQuery(target).append('<span class="remove_me">'+fragment+'</span>');
        break;
        case 'prepend':
          jQuery('.remove_me').remove();
          jQuery(target).prepend('<span class="remove_me">'+fragment+'</span>');
        break;
      }
      eval(js);
    });
  });
};



window.addEventListener('message', function (m) {
  switch (m.data.message){
    case "template_preview":
      bannr_template_preview(m.data.html,m.data.dat);
      break;
    case "target_change":
      reset_ui();
      jQuery(m.data.target).addClass('blink_me');
      break;
    case "set_navigate":
        current_state = 'navigate';
      break;
    case "set_select":
        current_state = 'select';
      break;
  }
}, false);




function waitForJquery(){
  if (!window.jQuery) {
           window.setTimeout(function () {
               waitForJquery();
           }, 10);  // Try again every 10 ms..
           return;
  }
  var script = document.createElement('script');
  script.setAttribute('src', '/jquery/select.js');
  script.setAttribute('type', 'text/javascript');
  document.getElementsByTagName('head')[0].appendChild(script);
  //replace all hrefs to avoid breaking out of frame
  jQuery('a').each(function(){
    jQuery(this).attr('href',this.pathname);
  });

  //add block to hold templates
  jQuery('body').append("<div id='bannr_editor_templates' style='display:none'></div>");
  jQuery("div").hover(
    function(e) {
      if (current_state == 'select'){
        reset_ui();
        jQuery( this ).addClass('hover_outline');
        e.stopPropagation();
      }
    }, function(e) {
      jQuery( this ).removeClass('hover_outline');
    }
  );
  jQuery(document).on('click','.hover_outline',function(e){
    if (current_state == 'select'){
      e.stopPropagation();
      reset_ui();
      target = jQuery(this).getSelector();
      jQuery(this).addClass('blink_me');
      window.parent.postMessage({message: "div_selected", html: jQuery(this).html(), target: target}, "*");
      return false;
    }
  });
}

window.onload = function() {
    if (!window.jQuery) {
        var script = document.createElement('script');
        script.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js');
        script.setAttribute('type', 'text/javascript');
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    waitForJquery();
}
