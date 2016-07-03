var scheduleBuilder = scheduleBuilder || {};

var schedule_campaigns = [];

scheduleBuilder.init = function(){

  this.editorSitesID = '#editor_siteid';
  this.editorSchedulesID = '#schedule_editor_schedule';
  this.editorNameID = "#schedule_editor_name";
  this.editorStartID = "#schedule_editor_start";
  this.editorFinishID = "#schedule_editor_finish";
  this.editorGeoID = '#schedule_editor_geo';
  this.editorCampaignsID = "#schedule_editor_campaigns";
  this.editorPreviewButtonID = "#schedule_editor_preview_schedule";
  this.editorAddScheduleID = "#schedule_editor_add_campaign";
  this.editorSaveButtonID = "#schedule_save_button";
  this.editorAccordionID = "#schedule_editor_accordion";
  this.editorDeleteButtonID = "#schedule_delete_button";
  this.livePreviewButtonID = "#live_preview_schedule";
  this.liveTimer = window.setTimeout(scheduleBuilder.loadLive, 500);

  scheduleBuilder.loadSchedules();
  scheduleBuilder.loadCampaigns();
  schedule_campaigns = [];

  $(this.editorAddScheduleID).click(function(){
    var campaign = $(scheduleBuilder.editorCampaignsID).val();
    editorAPI.loadCampaign($(scheduleBuilder.editorSitesID).val(),campaign,scheduleBuilder.addCampaign);
  });

  $(this.editorSchedulesID).change(function(){
    scheduleBuilder.loadSchedule();
  });

  $(this.editorPreviewButtonID).click(function(){
    scheduleBuilder.getPreviewData();
  });



  $('#live_preview_time').on('dp.change',function(){
      clearTimeout(scheduleBuilder.liveTimer);
      scheduleBuilder.liveTimer = window.setTimeout(scheduleBuilder.loadLive, 500);
  });

  $('#live_preview_country').change(function(){
      clearTimeout(scheduleBuilder.liveTimer);
      scheduleBuilder.liveTimer = window.setTimeout(scheduleBuilder.loadLive, 500);
  });


  $(this.editorSaveButtonID).click(function(){
    scheduleBuilder.saveSchedule();
  });

  $(this.editorDeleteButtonID).click(function(){
    scheduleBuilder.deleteSchedule();
  });
}

scheduleBuilder.setLive = function(){
    //console.log('setting time to '+moment().format("DD-MM-YYYY HH:mm"));
    $('#live_preview_time').data("DateTimePicker").date(moment().format("DD-MM-YYYY HH:mm"));
}

scheduleBuilder.populateLiveSchedule = function(){
    $(scheduleBuilder.editorSchedulesID).val($('#live_schedule_id').val());
    scheduleBuilder.loadSchedule();
}

scheduleBuilder.liveEdit = function(){
    $('#editorTabs a[href="#schedule"]').tab('show');
    scheduleBuilder.populateLiveSchedule();

}

scheduleBuilder.livePreview = function(){
    scheduleBuilder.populateLiveSchedule();
    scheduleBuilder.getPreviewData();
}

scheduleBuilder.updateLive = function(ret){
    $('#live_schedule_target').html('');
    var appen = "";
    if (ret.name !== undefined){
        appen += "<input type='text' style='display:none' value='"+ret.id+"' id='live_schedule_id' >";
        appen += "<span>"+ret.name+" expires at "+ret.expire+"</span>";
        appen += "<div class='live_schedule_buttons'><button type='button' class='btn btn-primary' id='live_schedule_preview'>Preview</button>&nbsp;<button type='button' class= 'btn btn-primary' id='live_schedule_edit'>Edit Schedule</button></div>";
    } else {
        appen += "<span>No Schedule Defined</span>";
    }
    $('#live_schedule_target').html(appen);
    $('#live_schedule_preview').click(function(){
        scheduleBuilder.livePreview();
    });
    $('#live_schedule_edit').click(function(){
        scheduleBuilder.liveEdit();
    });
}

scheduleBuilder.loadLive = function(){
    editorAPI.loadLive($(scheduleBuilder.editorSitesID).val(),$('#live_preview_time').data("DateTimePicker").date().format('DD-MM-YYYY HH:mm'),scheduleBuilder.updateLive);

}

scheduleBuilder.reInit = function(){
  scheduleBuilder.reset();
  $(scheduleBuilder.editorAccordionID).html(' ');
  $(scheduleBuilder.editorAccordionID).accordion().accordion('destroy');
  scheduleBuilder.loadSchedules();
  scheduleBuilder.loadCampaigns();
  $('.datetimepicker').datetimepicker({
      format: 'DD/MM/YYYY HH:mm'
  });
  schedule_campaigns = [];
}

scheduleBuilder.addTemplate = function(template){
    if (template.data == undefined || template.data == null){
      data = template.default;
    } else {
      data = template.data;
    }
      var label = template.name;
      var template_id = template.id;
      if (!$('#schedule_template_container_'+template_id).length){ //if template is already contained in this schedule don't add it again!
        var html = editorAPI.decodeString(template.html);
        var js = editorAPI.decodeString(template.javascript);
        var formElements = editorAPI.parseDataElements(html+" "+js);
        el = "<h3>"+label+"</h3>";
        el += "<div id='schedule_template_container_"+template_id+"' class='schedule_editor_data_elements' data-templatename='"+label+"' data-templateid='"+template_id+"' data-target='"+template.target+"' data-inject='"+template.inject+"'>";
        var html_id = "schedule_input_"+label+"_html";
        var js_id = "schedule_input_"+label+"_js";
        el += "<textarea id='"+html_id+"' style='display:none' class='html_textarea'>"+html+"</textarea>";
        el += "<textarea id='"+js_id+"' style='display:none' class='js_textarea'>"+js+"</textarea>";
        for (var i = 0; i < formElements.length; i++) {
          var dat = formElements[i];
          var el_id = "schedule_input_"+label+"_"+dat.name;
          el += editorAPI.renderFormElement(el_id,dat.name,dat.type);
        }
        el += "</div>";
        $(scheduleBuilder.editorAccordionID).append(el);
        $(scheduleBuilder.editorAccordionID).accordion().accordion('destroy').accordion();
      }
    $.each(data,function(index,obj){
      $("#schedule_input_"+label+"_"+index).val(obj);
    });
    editorAPI.afterFormRender();
}

scheduleBuilder.addCampaign = function(data){
  var templates = data.templates;
  var inject_data = JSON.parse(data.data);
  schedule_campaigns.push(data.id);
  $.each(templates,function(el,index,arr){
    var dat = eval('inject_data.template_'+index.id);
    editorAPI.loadTemplateWithData($(scheduleBuilder.editorSitesID).val(),index.id,dat,scheduleBuilder.addTemplate);
  });
}

scheduleBuilder.deleteSchedule = function(data){
    editorAPI.deleteSchedule($(scheduleBuilder.editorSitesID).val(),$(scheduleBuilder.editorSchedulesID).val(),scheduleBuilder.savedSchedule);

}

scheduleBuilder.loadCampaigns = function(){
  editorAPI.loadCampaigns($(scheduleBuilder.editorSitesID).val(),scheduleBuilder.populateCampaigns);
}

  scheduleBuilder.loadSchedules = function(){
    editorAPI.loadSchedules($(scheduleBuilder.editorSitesID).val(),scheduleBuilder.populateSchedules);
  }

  scheduleBuilder.populateCampaigns = function(data){
    var appen = "";
    appen += "<option value='select'>Select...</option>";
    $.each(data,function(index,obj){
      appen += "<option value='"+obj.id+"' >"+obj.name+"</option>";
    });
    $(scheduleBuilder.editorCampaignsID).html(appen);
  }

  scheduleBuilder.populateSchedules = function(data){
    var appen = "";
    appen += "<option value='new'>New...</option>";
    $.each(data,function(index,obj){
      appen += "<option value='"+obj.id+"' >"+obj.name+"</option>";
    });
    $(scheduleBuilder.editorSchedulesID).html(appen);
    $(scheduleBuilder.editorScheduleID).accordion();
  }

  scheduleBuilder.getPreviewData = function(){
      var html = "";
      datstr = '[';

      $('.schedule_editor_data_elements').each(function(){
        var template_name = $(this).data('templatename');
        var template_target = $(this).data('target');
        var template_inject = $(this).data('inject');
        //console.log(template_name);
        //build html
        html += "<div class='"+template_name+" preview_div' data-target='"+template_target+"' data-inject='"+template_inject+"'>";
        var str = $(this).children('textarea.html_textarea').html();
        var js = editorAPI.encodeString($(this).children('textarea.js_textarea').val());
        str = jQuery('<div/>').html(str).text();
        //js = jQuery('<div/>').html(js).text();
        html += str;
        html += "</div>";
        //build data
        datstr +=  '{"preview":';
        datstr += '{';
        datstr += '"template" : "'+template_name+'",';
        $(this).find('input').each(function(){
            if ($(this).data('inputname') !== undefined)
                datstr += '"'+$(this).data('inputname')+'":"'+$(this).val()+'",';
        });
        datstr += '"javascript":"'+js+'"';
        //datstr = datstr.slice(0, -1);
        datstr += '}';
        datstr += '},';
      });
      datstr = datstr.slice(0, -1);
      datstr += ']';
      dat = JSON.parse(datstr);
      //console.log(dat);
      targetFrame = document.getElementById('preview');
      var msg = {message: 'template_preview', html: html, dat: dat };
      targetFrame.contentWindow.postMessage(msg, '*');
  }

  scheduleBuilder.saveSchedule = function(){
      if ($(scheduleBuilder.editorNameID).val() == ""){
        alert('please enter a name for this campaign!!');
        return false;
      } else {
         var returnData = {};
         returnData.name = $(scheduleBuilder.editorNameID).val();
         returnData.campaigns = schedule_campaigns;
         returnData._token = $('#_token').val();
         returnData.begin = $(scheduleBuilder.editorStartID).val();
         returnData.finish = $(scheduleBuilder.editorFinishID).val();
         returnData.geo = $(scheduleBuilder.editorGeoID).val();
         returnData.templates = {};
         $('.schedule_editor_data_elements').each(function(){
             var template_data = {};
             $(this).find('input').each(function(){
               if ($(this).data('inputname') !== undefined)
                    eval("template_data."+$(this).data('inputname')+" = '"+$(this).val()+"';");
             });
             eval("returnData.templates.template_"+$(this).data('templateid')+" = template_data;");
         });
         editorAPI.saveSchedule($(scheduleBuilder.editorSitesID).val(),$(scheduleBuilder.editorSchedulesID).val(),returnData,scheduleBuilder.savedSchedule);

      }
  }

  scheduleBuilder.savedSchedule = function(ret){
      ret = JSON.parse(ret);
      if (ret.status == 'success'){
        scheduleBuilder.reInit();
        alert('schedule saved');
      } else {
        alert('Error saving data!!');
      }
  }

  scheduleBuilder.reset = function(){
      $(scheduleBuilder.editorNameID).val('');
      $(scheduleBuilder.editorStartID).val('');
      $(scheduleBuilder.editorFinishID).val('');
      $(scheduleBuilder.editorAccordionID).html(' ');
      $(scheduleBuilder.editorAccordionID).accordion().accordion('destroy');
  }

  scheduleBuilder.loadSchedule = function(){
      scheduleBuilder.reset();
      if ($(scheduleBuilder.editorSchedulesID).val() == 'new')
        return;
      //console.log('loading schedule '+$(scheduleBuilder.editorSchedulesID).val());
      editorAPI.loadSchedule($(scheduleBuilder.editorSiteID).val(),$(scheduleBuilder.editorSchedulesID).val(),scheduleBuilder.populateSchedule);
  }

  scheduleBuilder.populateSchedule = function(ret){
      $(scheduleBuilder.editorNameID).val(ret.name);
      $(scheduleBuilder.editorStartID).val(ret.start_at);
      $(scheduleBuilder.editorFinishID).val(ret.finish_at);
      $(scheduleBuilder.editorGeoID).val(ret.country_codes);
      var inject_data = JSON.parse(ret.data);
      $.each(ret.campaigns,function(el,index,arr){
          schedule_campaigns.push(index.id);
      });
      $.each(inject_data,function(el,index,arr){
          var template_id = el.replace('template_','');
          editorAPI.loadTemplateWithData($(scheduleBuilder.editorSitesID).val(),template_id,index,scheduleBuilder.addTemplate);
      });
      $('.datetimepicker').datetimepicker({
          format: 'DD/MM/YYYY HH:mm'
      });
  }
