var templateBuilder = templateBuilder || {};

templateBuilder.init = function(){
  this.editorSitesID = '#template_editor_sites';
  this.editorTemplatesID = '#template_editor_template';
  this.editorNameID = '#template_editor_name';
  this.editorHtmlID = '#template_editor_html';
  this.editorJsID = '#template_editor_javascript';
  this.editorTargetID = '#template_editor_target';
  this.editorInjectID =  '#template_editor_inject';
  this.editorInputClass = '.template_editor_data_input';
  this.editorInputContainerID = '#template_editor_data_inputs';
  this.editorPreviewButtonID = '#preview_button';


  window.addEventListener('message', function (m) {
    switch (m.data.message){
      case "div_selected":
        jQuery(templateBuilder.editorHtmlID).val(beautify_html(m.data.html));
        jQuery(templateBuilder.editorTargetID).val(m.data.target);
        break;
    }
  }, false);

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

  templateBuilder.loadSites();

}


templateBuilder.reset = function(){
  $(templateBuilder.editorNameID).val(' ');
  $(templateBuilder.editorHtmlID).val(' ');
  $(templateBuilder.editorTargetID).val(' ');
  $(templateBuilder.editorInjectID).val(' ');
  $(templateBuilder.editorInputContainerID).html(' ');
}

templateBuilder.renderForm = function(){
    str = $(templateBuilder.editorHtmlID).val();
    js = $(templateBuilder.editorJsID).val();
    placeholders = editorAPI.parseDataElements(str+" "+js);
    console.log(placeholders);
    $(templateBuilder.editorInputContainerID).html("");
    var addEl = "";
    for (var i = 0; i < placeholders.length; i++) {
      var dat = placeholders[i];
      var typeclass = '';
      if (dat.type == 'colour'){
        typeclass = 'spectrum';
      }
      addEl += "  <div class='rowElem "+typeclass+"'><label for='"+dat.name+"'>"+dat.name+": </label>";

      addEl += "<input type='text' class='template_editor_data_input "+typeclass+"' id='"+dat.name+"' value='placeholder' name='"+dat.name+"'/></div>";
    }
    $(templateBuilder.editorInputContainerID).append(addEl);
    $('.spectrum').spectrum({preferredFormat: "name"});
    $('.spectrum').show();
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
    console.log(msg);
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
      appen += "<option value='"+index+"' >"+obj.label+"</option>";
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
    $(templateBuilder.editorNameID).val(template.label);
    $(templateBuilder.editorTargetID).val(template.target);
    $(templateBuilder.editorInjectID).val(template.inject);
    $(templateBuilder.editorHtmlID).val(beautify_html(template.html));
    $(templateBuilder.editorJsID).val(template.javascript);
    templateBuilder.renderForm();
    $.each(template.default,function(index,obj){
      $('#'+index).val(obj);
    });
    $('.spectrum').spectrum({preferredFormat: "name"});
    $('.spectrum').show();
    targetFrame = document.getElementById('preview');
    targetFrame.contentWindow.postMessage({message: 'target_change', target: $(templateBuilder.editorTargetID).val()}, '*');
  }
