var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}




var editorAPI = editorAPI || {};

editorAPI.init = function(){
  this.loadedSites = null;
  this.loadedTemplates = null;
  this.loadedCampaigns = null;
  this.loadedSchedules = null;
  this.uploadOptions = {
		        success:       editorAPI.fileUploaded,
		        dataType: 'json'
                };
}



editorAPI.escapeJSON = function(str){
  return str
    .replace(/[\\]/g, '\\\\')
    .replace(/[\"]/g, '\\\"')
    .replace(/[\/]/g, '\\/')
    .replace(/[\b]/g, '\\b')
    .replace(/[\f]/g, '\\f')
    .replace(/[\n]/g, '\\n')
    .replace(/[\r]/g, '\\r')
    .replace(/[\t]/g, '\\t');
};

editorAPI.afterFormRender = function(){
    $('.spectrum').spectrum({preferredFormat: "name"});
    $('.spectrum').show();
}

editorAPI.fileUploaded = function(dat){
    var filename = dat.filename;
    var target = dat.target;
    $('#'+target).val(filename);
}

editorAPI.parseDataElements = function(html){
  var dataElements = html.match(/{{\s*[\w\.]+\s*}}/g).map(function(x) { return x.match(/[\w\.]+/)[0]; });
  returnArray = [];
  for (var i = 0; i < dataElements.length; i++) {
    var el = new Object();
    el.name = dataElements[i];
    el.type = "text";
    if (html.indexOf('color:'+'{{'+el.name+'}}') > -1){
      el.type = "colour";
    }
    if (html.indexOf('src\=\"'+'{{'+el.name+'}}') > -1){
      el.type = "file";
    }
    returnArray.push(el);
  }
  return returnArray;
}

editorAPI.renderFormElement = function(id,name,type){
    el = "";
    switch (type){
        case "colour":
            el += "  <div class='rowElem spectrum'><label for='"+name+"'>"+name+": </label>";
            el += "<input type='text' class='template_editor_data_input spectrum' data-inputname='"+name+"' id='"+id+"' value='placeholder' name='"+name+"' /></div>";
            break;
        case "file":
            el += "  <div class='rowElem negPad'><label for='"+name+"'>"+name+": </label>";
            el += "<form class='form-horizontal' id='form_"+id+"' enctype='multipart/form-data' method='post' action='/api/sites/"+$(scheduleBuilder.editorSitesID).val()+"/images' autocomplete='off'>";
            el +=  "<input type='hidden' name='_token' value='"+$('#_token').val()+"' />";
            el += "<input type='hidden' name='file_target' value='"+id+"' />";
            el += "<input type='text' class='filename template_editor_data_input' data-inputname='"+name+"' id='"+id+"'/>";
            el += "<div class='fileUpload btn btn-primary'>";
            el += "<span>Upload</span>";
            el += "<input type='file' class='upload ' name='image' id='upload_"+id+"' />";
            el += "</div>";
            el += "</form></div>";
            el += "<script>";
            el += "$('body').delegate('#upload_"+id+"','change', function(){ $('#form_"+id+"').ajaxForm(editorAPI.uploadOptions).submit();  	});";
            el += "</script>";
            break;
        default:
            el += "  <div class='rowElem'><label for='"+name+"'>"+name+": </label>";
            el += "<input type='text' class='template_editor_data_input' data-inputname='"+name+"' id='"+id+"' value='placeholder' name='"+name+"' /></div>";
            break;

    }
    return el;

}


editorAPI.deleteTemplate = function(site_id,template_id,callback_func){
    var url = '/api/sites/'+site_id+'/templates/'+template_id;
    var dat = {
                _token:$('#_token').val(),
                delete:"true"
            };
    $.post(url,dat,function(ret){
      editorAPI.loadedTemplates = null;
      callback_func(ret);
    });
}

editorAPI.deleteCampaign = function(site_id,campaign_id,callback_func){
    var url = '/api/sites/'+site_id+'/campaigns/'+campaign_id;
    var dat = {
                _token:$('#_token').val(),
                delete:"true"
            };
    $.post(url,dat,function(ret){
      editorAPI.loadedCampaigns = null;
      callback_func(ret);
    });
}

editorAPI.deleteSchedule = function(site_id,schedule_id,callback_func){
    var url = '/api/sites/'+site_id+'/schedules/'+schedule_id;
    var dat = {
                _token:$('#_token').val(),
                delete:"true"
            };
    $.post(url,dat,function(ret){
      editorAPI.loadedSchedules = null;
      callback_func(ret);
    });
}

editorAPI.returnSites = function(callback_func){
  callback_func(editorAPI.loadedSites);
}

editorAPI.returnTemplates = function(callback_func){
  callback_func(editorAPI.loadedTemplates);
}

editorAPI.returnTemplate = function(template_id,callback_func){
  $.each(editorAPI.loadedTemplates,function(el,ind,arr){
    if (template_id == ind.id){
        callback_func(ind);
    }
  });
}

editorAPI.returnSchedule = function(schedule_id,callback_func){
  $.each(editorAPI.loadedSchedules,function(el,ind,arr){
    if (schedule_id == ind.id){
        callback_func(ind);
    }
  });
}

editorAPI.returnCampaign = function(campaign_id,callback_func){
  $.each(editorAPI.loadedCampaigns,function(el,ind,arr){
    if (campaign_id == ind.id){
        callback_func(ind);
    }
  });
}

editorAPI.returnTemplateWithData = function(template_id,data,callback_func){
  $.each(editorAPI.loadedTemplates,function(el,ind,arr){
    if (template_id == ind.id){
        ind.data = data;
        callback_func(ind);
    }

  });
}

editorAPI.saveCampaign = function(site_id,campaign_id,data,callback_func){
  var url = '/api/sites/'+site_id+'/campaigns/'+campaign_id;
  $.post(url,data,function(ret){
    editorAPI.loadedCampaigns = null;
    callback_func(ret);
  });
}

editorAPI.saveSchedule = function(site_id,schedule_id,data,callback_func){
    var url = '/api/sites/'+site_id+'/schedules/'+schedule_id;
    $.post(url,data,function(ret){
      editorAPI.loadedSchedules = null;
      callback_func(ret);
    });
}


editorAPI.loadSites = function(callback_func){
  if (editorAPI.loadedSites === null){
    $.getJSON('/api/sites',function(data){
      var appen = "";
      $.each(data,function(index,obj){
        appen += "<option value='"+obj.id+"' >"+obj.label+"</option>";
      });
      editorAPI.loadedSites = appen;
      editorAPI.returnSites(callback_func);
    });
  } else {
    console.log('cached sites');
    editorAPI.returnSites(callback_func);
  }
}

editorAPI.saveTemplate = function(site_id,template_id,data,callback_func){
  var url = '/api/sites/'+site_id+'/templates/'+template_id;
  $.post(url,data,function(ret){
    editorAPI.loadedTemplates = null;
    callback_func(ret);
  });
}

editorAPI.loadTemplates = function(site_id,callback_func){
    $.getJSON('/api/sites/'+site_id+'/templates',function(data){
      editorAPI.loadedTemplates = data;
      editorAPI.returnTemplates(callback_func);
    });
}

editorAPI.loadTemplate = function(site_id,template_id,callback_func){
  if (editorAPI.loadedTemplates === null){
    $.getJSON('/api/sites/'+site_id+'/templates',function(data){
      editorAPI.loadedTemplates = data;
      editorAPI.returnTemplate(template_id,callback_func);
    });
  } else {
    editorAPI.returnTemplate(template_id,callback_func);
  }
}

editorAPI.returnCampaigns = function(callback_func){
  callback_func(editorAPI.loadedCampaigns);
}

editorAPI.loadCampaigns = function(site_id,callback_func){
  if (editorAPI.loadedCampaigns === null){
    $.getJSON('/api/sites/'+site_id+'/campaigns',function(data){
      editorAPI.loadedCampaigns = data;
      editorAPI.returnCampaigns(callback_func);
    });
  } else {
    editorAPI.returnCampaigns(callback_func);
  }
}

//SCHEDULES

editorAPI.returnSchedules = function(callback_func){
  callback_func(editorAPI.loadedSchedules);
}

editorAPI.loadSchedules = function(site_id,callback_func){
  if (editorAPI.loadedSchedules === null){
    $.getJSON('/api/sites/'+site_id+'/schedules',function(data){
      editorAPI.loadedSchedules = data;
      editorAPI.returnSchedules(callback_func);
    });
  } else {
    editorAPI.returnSchedules(callback_func);
  }
}

editorAPI.loadTemplateWithData = function(site_id,template_id,data,callback_func){
    if (editorAPI.loadedTemplates === null){
      $.getJSON('/api/sites/'+site_id+'/templates',function(templates){
        editorAPI.loadedTemplates = templates;
        editorAPI.returnTemplateWithData(template_id,data,callback_func);
      });
    } else {
      editorAPI.returnTemplateWithData(template_id,data,callback_func);
    }
}

editorAPI.loadCampaign = function(site_id,campaign_id,callback_func){
  if (editorAPI.loadedCampaigns === null){
    $.getJSON('/api/sites/'+site_id+'/campaigns',function(data){
      editorAPI.loadedCampaigns = data;
      editorAPI.returnCampaign(campaign_id,callback_func);
    });
  } else {
    editorAPI.returnCampaign(campaign_id,callback_func);
  }
}

editorAPI.loadSchedule = function(site_id, schedule_id, callback_func){
    if (editorAPI.loadedSchedules === null){
      $.getJSON('/api/sites/'+site_id+'/schedules',function(data){
        editorAPI.loadedSchedules = data;
        editorAPI.returnSchedule(schedule_id,callback_func);
      });
    } else {
      editorAPI.returnSchedule(schedule_id,callback_func);
    }
}

editorAPI.loadLive = function(site_id, timestring, callback_func){
    $.getJSON('/api/sites/'+site_id+'/schedules/live/'+encodeURIComponent(timestring),function(data){
        callback_func(data);
    });
}





editorAPI.encodeString = function(string){
  return Base64.encode(string);
}

editorAPI.decodeString = function(string){
  return Base64.decode(string);
}
