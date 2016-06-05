var widgets = [{
  "Text": {
    "inputs": {
      "text": "text",
      "class": "text",
      "style": "text",
    },
    "html": "<span class='{{{class}}}' style='{{{style}}}'>{{{text}}}</p>"
  }
}];



window.addEventListener('message', function (m) {
  switch (m.data.message){
    case "div_selected":
      jQuery('#template_editor_html').val(m.data.html);
      jQuery('#template_editor_target').val(m.data.target);
      break;
  }
}, false);


function iframeLoaded(){

}


$(document).ready(function(){
  $('#preview_button').click(function(){
    console.log("here");
    //get html
    if ($('#template_editor_name').val() == ""){
      alert('please enter a name for this template!!');
      return false;
    } else {
      datstr = '[{"preview":';
      datstr += '{';
      datstr += '"template":"'+$('#template_editor_name').val() +'",';
      $('.template_editor_data_input').each(function(){
        datstr += '"'+$(this).attr('id')+'":"'+$(this).val()+'",';
      });
      datstr = datstr.slice(0, -1);
      datstr += '}';
      datstr += '}]';
      dat = JSON.parse(datstr);
      console.log(dat);
      //TODO:: build data here
      /*dat = [{"test":
        {
          "template":"test_template",
          "first_promo_text":"hello",
        }
      }];*/
      //TODO:: grab html here
      html = "<div class='"+$('#template_editor_name').val()+" preview_div' data-target='"+$('#template_editor_target').val()+"' data-inject='"+$('#template_editor_inject').val()+"'>";
      html += $('#template_editor_html').val();
      html += "</div>";
      //post preview data to preview frame
      targetFrame = document.getElementById('preview');
      targetFrame.contentWindow.postMessage({message: 'template_preview', html: html, dat: dat }, '*');

    }
  });
});

var i = 0;
var dragging = false;
   $(document).ready(function(){



     $('.tabs').tabs();
     $('#preview_url').change(function(){
       //$('#preview').attr('src','/proxy/index.php?url='+$('#preview_url').val());
     });

     $('#template_editor_html').change(function(){
       str = $('#template_editor_html').val();
       placeholders = str.match(/{{\s*[\w\.]+\s*}}/g).map(function(x) { return x.match(/[\w\.]+/)[0]; });
       $("#template_editor_data_inputs").html("");
       var addEl = "";
       for (var i = 0; i < placeholders.length; i++) {
         var name = placeholders[i];
         addEl += "  <div class='rowElem'><label for='"+name+"'>"+name+": </label>";
         addEl += "<input type='text' class='template_editor_data_input' id='"+name+"' value='placeholder' name='"+name+"'/></div>";
       }
       $("#template_editor_data_inputs").append(addEl);
       //$("form").jqTransform();
       //targetFrame = document.getElementById('preview');
       //targetFrame.contentWindow.postMessage({message: 'template_preview', target: $('#template_editor_target').val(), html: $('#template_editor_html').val() }, '*');
     });

     $('#template_editor_target').change(function(){
       targetFrame = document.getElementById('preview');
       targetFrame.contentWindow.postMessage({message: 'target_change', target: $('#template_editor_target').val()}, '*');

     });

   });

   $(document).mousedown(function(e){
       if ($(e.target).attr('id') == 'dragbar'){
         e.preventDefault();
         dragging = true;
         var main = $('#main');
         var ghostbar = $('<div>',
                          {id:'ghostbar',
                           css: {
                                  height: main.outerHeight(),
                                  top: main.offset().top,
                                  left: main.offset().left
                                 }
                          }).appendTo('body');

          $(document).mousemove(function(e){
            ghostbar.css("left",e.pageX+2);
         });
       }
    });

   $(document).mouseup(function(e){
       if (dragging)
       {
           var percentage = (e.pageX / window.innerWidth) * 100;
           var mainPercentage = 100-percentage;
           $('#sidebar').css("width",percentage + "%");
           //$('#preview').css("width",window.innerWidth - (window.innerWidth - e.pageX) + "px");
           $('#main').css("width",mainPercentage + "%");
           $('#ghostbar').remove();
           $(document).unbind('mousemove');
           dragging = false;
       }
    });
