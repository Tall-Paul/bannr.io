


var i = 0;
var dragging = false;
   $(document).ready(function(){
     if (!$('#editor_siteid').length)
         return;
     $('.tabs').tabs();
     $('.datetimepicker').datetimepicker({
         format: 'DD/MM/YYYY HH:mm'
     });
     $('#preview_url').change(function(){
       //$('#preview').attr('src','/proxy/index.php?url='+$('#preview_url').val());
     });
     editorAPI.init();
     templateBuilder.init();
     campaignBuilder.init();
     scheduleBuilder.init();
     $('#live_preview_time').datetimepicker({
            inline: true,
            sideBySide: true,
            format: 'DD-MM-YYYY HH:mm',
            useCurrent: true
     });
     //$('.datetimepicker').data('dateTimePicker').date(moment().format('DD/MM/YYYY HH:mm'));

     $('#settings_save_button').click(function(){
        var site_name = $('#site_editor_name').val();
        var site_url = $('#site_editor_url').val();
        var site_id = $(scheduleBuilder.editorSitesID).val();
        var token = $('#_token').val();
        $.post('/api/sites/'+site_id,{
            'name' : site_name,
            'url' : site_url,
            '_token' : token
        },function(data){
            $( '#preview' ).attr( 'src', function ( i, val ) { return val; });
        });
     });
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




   function show_editor(){
       $('.main-panel').removeClass('col-lg-12').addClass('col-lg-8');
       $('.side-panel').removeClass('col-lg-0').addClass('col-lg-4');
       $('.editor_hidden').show();
   }

   function hide_editor(){
       $('.main-panel').removeClass('col-lg-8').addClass('col-lg-12');
       $('.side-panel').removeClass('col-lg-4').addClass('col-lg-0');
       $('.editor_hidden').hide();
   }

   $('#show_editor').click(function(){
      show_editor();
   });

   $('#hide_editor').click(function(){
      hide_editor();
   });
