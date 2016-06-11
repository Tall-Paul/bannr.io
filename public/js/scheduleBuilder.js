var scheduleBuilder = scheduleBuilder || {};

var schedule_campaigns = [];

scheduleBuilder.init = function(){
  this.editorSitesID = '#editor_siteid';
  this.editorSchedulesID = '#schedule_editor_schedule';
  this.editorNameID = "#schedule_editor_name";
  this.editorStartID = "#schedule_editor_start";
  this.editorFinishID = "#schedule_editor_finish";
  this.editorCampaignsID = "#schedule_editor_campaigns";
  this.editorPreviewButtonID = "#schedule_editor_preview_schedule";
  this.editorAddScheduleID = "#schedule_editor_add_campaign";
  this.editorSaveButtonID = "#schedule_save_button";
  this.editorAccordionID = "#schedule_editor_accordion";

  scheduleBuilder.loadSchedules();
  scheduleBuilder.loadCampaigns();
  schedule_campaigns = [];

  $(this.editorAddScheduleID).click(function(){
    var campaign = $(scheduleBuilder.editorCampaignsID).val();
    editorAPI.loadCampaign($(scheduleBuilder.editorSitesID).val(),campaign,scheduleBuilder.addCampaign);
  });

  $(this.editorScheduleID).change(function(){
    scheduleBuilder.loadSchedule();
  });

  $(this.editorPreviewButtonID).click(function(){
    scheduleBuilder.getPreviewData();
  });

  $(this.editorSaveButtonID).click(function(){
    scheduleBuilder.saveSchedule();
  });
}

scheduleBuilder.reInit = function(){
  $(scheduleBuilder.editorAccordionID).html(' ');
  $(scheduleBuilder.editorAccordionID).accordion().accordion('destroy');
  scheduleBuilder.loadSchedules();
  scheduleBuilder.loadCampaigns();
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
          var typeclass = '';
          if (dat.type == 'colour'){
            typeclass = 'spectrum';
          }
          el += "  <div class='rowElem "+typeclass+"'><label for='"+dat.name+"'>"+dat.name+": </label>";
          el += "<input type='text' class='schedule_editor_data_input "+typeclass+"' id='"+el_id+"' value='placeholder' data-inputname='"+dat.name+"' name='"+dat.name+"'/></div>";
        }
        el += "</div>";
        $(scheduleBuilder.editorAccordionID).append(el);
        $(scheduleBuilder.editorAccordionID).accordion().accordion('destroy').accordion();
      }
    $.each(data,function(index,obj){
      $("#schedule_input_"+label+"_"+index).val(obj);
    });
    $('.spectrum').spectrum({preferredFormat: "name"});
    $('.spectrum').show();
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
    appen += "<option value=''>New...</option>";
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
      console.log(dat);
      targetFrame = document.getElementById('preview');
      var msg = {message: 'template_preview', html: html, dat: dat };
      targetFrame.contentWindow.postMessage(msg, '*');
  }
