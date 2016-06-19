var templateBuilder = templateBuilder || {};



templateBuilder.init = function(){
  this.editorSitesID = '#editor_siteid';
  this.editorTemplatesID = '#template_editor_template';
  this.editorNameID = '#template_editor_name';
  this.editorHtmlID = '#template_editor_html';
  this.editorJsID = '#template_editor_javascript';
  this.editorTargetID = '#template_editor_target';
  this.editorInjectID =  '#template_editor_inject';
  this.editorInputClass = '.template_editor_data_input';
  this.editorInputContainerID = '#template_editor_data_inputs';
  this.editorPreviewButtonID = '#template_preview_button';
  this.editorSaveButtonID = '#template_save_button';
  this.editorDeleteButtonID = '#template_delete_button';


  window.addEventListener('message', function (m) {
    switch (m.data.message){
      case "div_selected":
        jQuery(templateBuilder.editorHtmlID).val(beautify_html(m.data.html));
        jQuery(templateBuilder.editorTargetID).val(m.data.target);
        show_editor();
        break;
    }
  }, false);

  $(templateBuilder.editorSaveButtonID).click(function(){
    templateBuilder.saveData();
  });

  $(templateBuilder.editorDeleteButtonID).click(function(){
    templateBuilder.deleteTemplate();
  });

  $(templateBuilder.editorPreviewButtonID).click(function(){
    templateBuilder.getData();
  });

  $(templateBuilder.editorHtmlID).change(function(){
    templateBuilder.renderForm();
  });

  $(templateBuilder.editorJsID).change(function(){
    templateBuilder.renderForm();
  });

  $(templateBuilder.editorTargetID).change(function(){
    targetFrame = document.getElementById('preview');
    targetFrame.contentWindow.postMessage({message: 'target_change', target: $(templateBuilder.editorTargetID).val()}, '*');

  });

  $(templateBuilder.editorSitesID).change(function(){
    templateBuilder.loadTemplates();
  });

  $(templateBuilder.editorTemplatesID).change(function(){
    templateBuilder.loadTemplate();
  });

  templateBuilder.loadTemplates();

}


templateBuilder.reInit = function(){
    templateBuilder.reset();
    templateBuilder.loadTemplates();
}

templateBuilder.reset = function(){
  $(templateBuilder.editorNameID).val(' ');
  $(templateBuilder.editorHtmlID).val(' ');
  $(templateBuilder.editorTargetID).val(' ');
  $(templateBuilder.editorInjectID).val(' ');
  $(templateBuilder.editorJsID).val(' ');
  $(templateBuilder.editorInputContainerID).html(' ');

}

templateBuilder.renderForm = function(){
    str = $(templateBuilder.editorHtmlID).val();
    js = $(templateBuilder.editorJsID).val();
    placeholders = editorAPI.parseDataElements(str+" "+js);
    $(templateBuilder.editorInputContainerID).html("");
    var addEl = "";
    for (var i = 0; i < placeholders.length; i++) {
      var dat = placeholders[i];
      addEl += editorAPI.renderFormElement(dat.name,dat.name,dat.type);
    }
    $(templateBuilder.editorInputContainerID).append(addEl);
    editorAPI.afterFormRender();
}

templateBuilder.deleteTemplate = function(){
    editorAPI.deleteTemplate($(templateBuilder.editorSitesID).val(),$(templateBuilder.editorTemplatesID).val(),templateBuilder.savedTemplate);
}



templateBuilder.saveData = function(){
  if ($(templateBuilder.editorNameID).val() == ""){
    alert('please enter a name for this template!!');
    return false;
  } else {

    //html = "<div class='"+$(templateBuilder.editorNameID).val()+" preview_div' data-target='"+$(templateBuilder.editorTargetID).val()+"' data-inject='"+$(templateBuilder.editorInjectID).val()+"'>";
    html = $(templateBuilder.editorHtmlID).val();
    //html += "</div>"
    html = editorAPI.encodeString(html);
    js = $(templateBuilder.editorJsID).val();
    js = editorAPI.encodeString(js);

    datstr = '{"name":"'+$(templateBuilder.editorNameID).val()+'",';
    datstr += '"_token":"'+$('#_token').val()+'",'
    datstr += '"target":"'+$(templateBuilder.editorTargetID).val()+'",';
    datstr += '"inject":"'+$(templateBuilder.editorInjectID).val()+'",';
    datstr += '"html":"'+html+'",';
    if ($(templateBuilder.editorTemplatesID).val() !== 'new'){
      datstr += '"id":"'+$(templateBuilder.editorTemplatesID).val()+'",';
    }
    datstr += '"js":"'+js+'",';
    datstr += '"defaults":{';
    $(templateBuilder.editorInputClass).each(function(){
      datstr += '"'+$(this).attr('id')+'":"'+$(this).val()+'",';
    });
    datstr = datstr.slice(0, -1);
    datstr += '}';
    datstr += '}';
    dat = JSON.parse(datstr);
    editorAPI.saveTemplate($(templateBuilder.editorSitesID).val(),$(templateBuilder.editorTemplatesID).val(),dat,templateBuilder.savedTemplate);
  }
}

templateBuilder.savedTemplate = function(ret){
  ret = JSON.parse(ret);
  if (ret.status == 'success'){
    templateBuilder.reset();
    templateBuilder.loadTemplates();
  } else {
    alert('Error saving data!!');
  }
}


templateBuilder.getData = function(){
  if ($(templateBuilder.editorNameID).val() == ""){
    alert('please enter a name for this template!!');
    return false;
  } else {
    datstr = '[{"preview":';
    datstr += '{';
    datstr += '"template":"'+$(templateBuilder.editorNameID).val() +'",';
    $(templateBuilder.editorInputClass).each(function(){
      datstr += '"'+$(this).attr('id')+'":"'+$(this).val()+'",';
    });
    datstr += '"javascript":"'+editorAPI.encodeString($(templateBuilder.editorJsID).val())+'"';
    //datstr = datstr.slice(0, -1);
    datstr += '}';
    datstr += '}]';
    dat = JSON.parse(datstr);
    //TODO:: grab html here
    html = "<div class='"+$(templateBuilder.editorNameID).val()+" preview_div' data-target='"+$(templateBuilder.editorTargetID).val()+"' data-inject='"+$(templateBuilder.editorInjectID).val()+"'>";
    html += $(templateBuilder.editorHtmlID).val();
    html += "</div>"
    //post preview data to preview frame
    targetFrame = document.getElementById('preview');
    var msg = {message: 'template_preview', html: html, dat: dat };
    targetFrame.contentWindow.postMessage(msg, '*');
  }
 }

  templateBuilder.loadSites = function(){
    editorAPI.loadSites(templateBuilder.populateSites);
  }

  templateBuilder.populateSites = function(html){
      $(templateBuilder.editorSitesID).html(html);
      templateBuilder.loadTemplates();
  }

  templateBuilder.loadTemplates = function(){

    editorAPI.loadTemplates($(templateBuilder.editorSitesID).val(),templateBuilder.populateTemplates);
  }

  templateBuilder.populateTemplates = function(data){
    var appen = "";
    appen += "<option value='new'>New...</option>";
    $.each(data,function(index,obj){
      appen += "<option value='"+obj.id+"' >"+obj.name+"</option>";
    });
    $(templateBuilder.editorTemplatesID).html(appen);
  }

  templateBuilder.loadTemplate = function(){
    var template_id = $(templateBuilder.editorTemplatesID).val();
    if (template_id == 'new'){
      templateBuilder.reset();
      return;
    } else {
      editorAPI.loadTemplate($(templateBuilder.editorSitesID).val(),template_id,templateBuilder.populateTemplate);
    }
  }

  templateBuilder.populateTemplate = function(template){
    $(templateBuilder.editorNameID).val(template.name);
    $(templateBuilder.editorTargetID).val(template.target);
    $(templateBuilder.editorInjectID).val(template.inject);
    $(templateBuilder.editorHtmlID).val(beautify_html(editorAPI.decodeString(template.html)));
    $(templateBuilder.editorJsID).val(editorAPI.decodeString(template.javascript));
    templateBuilder.renderForm();
    $.each(template.default,function(index,obj){
      $('#'+index).val(obj);
    });
    $('.spectrum').spectrum({preferredFormat: "name"});
    $('.spectrum').show();
    targetFrame = document.getElementById('preview');
    targetFrame.contentWindow.postMessage({message: 'target_change', target: $(templateBuilder.editorTargetID).val()}, '*');
  }
