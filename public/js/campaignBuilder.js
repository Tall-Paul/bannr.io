var campaignBuilder = campaignBuilder || {};

campaignBuilder.init = function(){
  this.editorSitesID = '#editor_siteid';
  this.editorCampaignID = '#campaign_editor_campaign';
  this.editorTemplatesID = '#campaign_editor_template';
  this.editorAddTemplateID = '#campaign_editor_add_template';
  this.editorAccordionID = "#campaign_editor_accordion";
  this.editorPreviewButtonID = "#campaign_editor_preview_campaign";
  this.editorSaveButtonID = "#campaign_save_button";
  this.editorNameID = "#campaign_editor_name";
  campaignBuilder.loadCampaigns();

  $(this.editorAddTemplateID).click(function(){
    var template = $(campaignBuilder.editorTemplatesID).val();
    editorAPI.loadTemplate($(campaignBuilder.editorSitesID).val(),template,campaignBuilder.addTemplate);
  });

  $(this.editorCampaignID).change(function(){
    campaignBuilder.loadCampaign();
  });

  $(this.editorPreviewButtonID).click(function(){
    campaignBuilder.getPreviewData();
  });

  $(this.editorSaveButtonID).click(function(){
    campaignBuilder.saveCampaign();
  });


}

campaignBuilder.reInit = function(){
  $(campaignBuilder.editorAccordionID).html(' ');
  $(campaignBuilder.editorAccordionID).accordian().accordion('destroy');
  campaignBuilder.loadCampaigns();
}

campaignBuilder.saveCampaign = function(){
  if ($(campaignBuilder.editorNameID).val() == ""){
    alert('please enter a name for this campaign!!');
    return false;
  } else {
    var datstr = '{"name":"'+$(campaignBuilder.editorNameID).val()+'",';
    datstr += '"_token":"'+$('#_token').val()+'",'
    datstr += '"templates":{'
    $('.campaign_editor_data_elements').each(function(){
      var template_id= $(this).data('templateid');
      datstr += '"template_'+template_id+'":{';
      $(this).find('input').each(function(){
        datstr += '"'+$(this).data('inputname')+'":"'+$(this).val()+'",';
      });
      datstr = datstr.slice(0, -1);
      datstr += '},';
    });
    datstr = datstr.slice(0, -1);
    datstr += '}}';
    var dat = JSON.parse(datstr);
    editorAPI.saveCampaign($(campaignBuilder.editorSitesID).val(),$(campaignBuilder.editorCampaignID).val(),dat,campaignBuilder.savedCampaign);
  }
}

campaignBuilder.savedCampaign = function(ret){
  ret = JSON.parse(ret);
  if (ret.status == 'success'){
    campaignBuilder.reset();
    campaignBuilder.loadCampaigns();
    alert('campaign saved');
  } else {
    alert('Error saving data!!');
  }
}

campaignBuilder.getPreviewData = function(){
  var html = "";
  datstr = '[';

  $('.campaign_editor_data_elements').each(function(){
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
  targetFrame = document.getElementById('preview');
  var msg = {message: 'template_preview', html: html, dat: dat };
  targetFrame.contentWindow.postMessage(msg, '*');
}


campaignBuilder.reset = function(){
  $(campaignBuilder.editorAccordionID).html(' ');
  $(campaignBuilder.editorAccordionID).accordion('destroy');
  campaignBuilder.loadTemplates();
}

campaignBuilder.addTemplate = function(template){
  console.log(template);
  //TODO: check if template already present in this campaign!!
  if (template.data == undefined || template.data == null){
    data = template.default;
  } else {
    data = template.data;
  }
  var label = template.name;
  var template_id = template.id;
  var html = editorAPI.decodeString(template.html);
  var js = editorAPI.decodeString(template.javascript);
  var formElements = editorAPI.parseDataElements(html+" "+js);
  el = "<h3>"+label+"</h3>";
  el += "<div class='campaign_editor_data_elements' data-templatename='"+label+"' data-templateid='"+template_id+"' data-target='"+template.target+"' data-inject='"+template.inject+"'>";
  var html_id = "campaign_input_"+label+"_html";
  var js_id = "campaign_input_"+label+"_js";
  el += "<textarea id='"+html_id+"' style='display:none' class='html_textarea'>"+html+"</textarea>";
  el += "<textarea id='"+js_id+"' style='display:none' class='js_textarea'>"+js+"</textarea>";
  for (var i = 0; i < formElements.length; i++) {
    var dat = formElements[i];
    var el_id = "campaign_input_"+label+"_"+dat.name;
    var typeclass = '';
    if (dat.type == 'colour'){
      typeclass = 'spectrum';
    }
    el += "  <div class='rowElem "+typeclass+"'><label for='"+dat.name+"'>"+dat.name+": </label>";
    el += "<input type='text' class='campaign_editor_data_input "+typeclass+"' id='"+el_id+"' value='placeholder' data-inputname='"+dat.name+"' name='"+dat.name+"'/></div>";
  }
  el += "</div>";
  $(campaignBuilder.editorAccordionID).append(el);
  $(campaignBuilder.editorAccordionID).accordion().accordion('destroy').accordion();
  $.each(data,function(index,obj){
    $("#campaign_input_"+label+"_"+index).val(obj);
  });
  $('.spectrum').spectrum({preferredFormat: "name"});
  $('.spectrum').show();
}

campaignBuilder.loadSites = function(){
  editorAPI.loadSites(campaignBuilder.populateSites);
}

campaignBuilder.populateSites = function(html){
    $(campaignBuilder.editorSitesID).html(html);
    campaignBuilder.loadCampaigns();
}

campaignBuilder.loadCampaigns = function(){
  editorAPI.loadCampaigns($(campaignBuilder.editorSitesID).val(),campaignBuilder.populateCampaigns);
}

campaignBuilder.populateCampaigns = function(data){
  var appen = "";
  appen += "<option value='new'>New...</option>";
  $.each(data,function(index,obj){
    appen += "<option value='"+obj.id+"' >"+obj.name+"</option>";
  });
  $(campaignBuilder.editorCampaignID).html(appen);
  campaignBuilder.loadTemplates();
}

campaignBuilder.loadTemplates = function(){
  editorAPI.loadTemplates($(campaignBuilder.editorSitesID).val(),campaignBuilder.populateTemplates);
}

campaignBuilder.populateTemplates = function(data){
  var appen = "";
  appen += "<option value=''>Select...</option>";
  $.each(data,function(index,obj){
    appen += "<option value='"+obj.id+"' >"+obj.name+"</option>";
  });
  $(campaignBuilder.editorTemplatesID).html(appen);
  $(campaignBuilder.editorAccordionID).accordion();
}

campaignBuilder.loadCampaign = function(){
  campaignBuilder.reset();
  if ($(campaignBuilder.editorCampaignID).val() == 'new')
    return;
  editorAPI.loadCampaign($(campaignBuilder.editorCampaignID).val(),$(this.editorCampaignID).val(),campaignBuilder.populateCampaign);
}


campaignBuilder.populateCampaign = function(data){
  var templates = data.templates;
  var inject_data = JSON.parse(data.data);
  $(campaignBuilder.editorNameID).val(data.name);
  $.each(templates,function(el,index,arr){
    var dat = eval('inject_data.template_'+index.id);
    editorAPI.loadTemplateWithData($(campaignBuilder.editorSitesID).val(),index.id,dat,campaignBuilder.addTemplate);
  });
}
