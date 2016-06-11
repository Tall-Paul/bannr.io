


var i = 0;
var dragging = false;
   $(document).ready(function(){
     $('.tabs').tabs();
     $('.datetimepicker').datetimepicker();
     $('#preview_url').change(function(){
       //$('#preview').attr('src','/proxy/index.php?url='+$('#preview_url').val());
     });
     editorAPI.init();
     templateBuilder.init();
     campaignBuilder.init();
     scheduleBuilder.init();
   });

   $('#behaviour input').change(function(){
     targetFrame = document.getElementById('preview');
     if ($('input[name=behaviour]:checked', '#behaviour').val() == 'select'){
        msg = {message: 'set_select'};
     } else {
       msg = {message: 'set_navigate'};
     }
     targetFrame.contentWindow.postMessage(msg, '*');
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
