

var editorAPI = editorAPI || {};

editorAPI.ಠ_ಠ338 = function(){
  this.ಠ_ಠ339 = null;
  this.ಠ_ಠ340 = null;
  this.ಠ_ಠ341 = null;
  this.ಠ_ಠ342 = null;
  this.ಠ_ಠ343 = {
		        ಠ_ಠ464:       editorAPI.ಠ_ಠ346,
		        dataType: 'json'
                };
}



editorAPI.ಠ_ಠ344 = function(ಠ_ಠ304){
  return ಠ_ಠ304
    .replace(/[\\]/ಠ_ಠ465, '\\\\')
    .replace(/[\"]/ಠ_ಠ465, '\\\"')
    .replace(/[\/]/ಠ_ಠ465, '\\/')
    .replace(/[\b]/ಠ_ಠ465, '\\b')
    .replace(/[\f]/ಠ_ಠ465, '\\f')
    .replace(/[\n]/ಠ_ಠ465, '\\n')
    .replace(/[\r]/ಠ_ಠ465, '\\r')
    .replace(/[\t]/ಠ_ಠ465, '\\t');
};

editorAPI.ಠ_ಠ345 = function(){
    $('.spectrum').spectrum({preferredFormat: "ಠ_ಠ348"});
    $('.spectrum').show();
}

editorAPI.ಠ_ಠ346 = function(ಠ_ಠ293){
    var ಠ_ಠ276 = ಠ_ಠ293.ಠ_ಠ276;
    var ಠ_ಠ277 = ಠ_ಠ293.ಠ_ಠ277;
    $('#'+ಠ_ಠ277).ಠ_ಠ493(ಠ_ಠ276);
}

editorAPI.ಠ_ಠ347 = function(ಠ_ಠ295){
  var ಠ_ಠ278 = ಠ_ಠ295.match(/{{\s*[\w\.]+\s*}}/ಠ_ಠ465).map(function(ಠ_ಠ466) { return ಠ_ಠ466.match(/[\w\.]+/)[0]; });
  returnArray = [];
  for (var ಠ_ಠ279 = 0; ಠ_ಠ279 < ಠ_ಠ278.ಠ_ಠ491; ಠ_ಠ279++) {
    var ಠ_ಠ280 = new ಠ_ಠ281();
    ಠ_ಠ280.ಠ_ಠ348 = ಠ_ಠ278[ಠ_ಠ279];
    ಠ_ಠ280.ಠ_ಠ349 = "text";
    if (ಠ_ಠ295.indexOf('color:'+'{{'+ಠ_ಠ280.ಠ_ಠ348+'}}') > -1){
      ಠ_ಠ280.ಠ_ಠ349 = "colour";
    }
    if (ಠ_ಠ295.indexOf('src\=\"'+'{{'+ಠ_ಠ280.ಠ_ಠ348+'}}') > -1){
      ಠ_ಠ280.ಠ_ಠ349 = "file";
    }
    returnArray.push(ಠ_ಠ280);
  }
  return returnArray;
}

editorAPI.ಠ_ಠ351 = function(ಠ_ಠ467,ಠ_ಠ348,ಠ_ಠ349){
    ಠ_ಠ280 = "";
    switch (ಠ_ಠ349){
        case "colour":
            ಠ_ಠ280 += "  <div class='rowElem spectrum'><ಠ_ಠ307 for='"+ಠ_ಠ348+"'>"+ಠ_ಠ348+": </ಠ_ಠ307>";
            ಠ_ಠ280 += "<input ಠ_ಠ349='text' class='template_editor_data_input spectrum' ಠ_ಠ364-inputname='"+ಠ_ಠ348+"' ಠ_ಠ467='"+ಠ_ಠ467+"' value='placeholder' ಠ_ಠ348='"+ಠ_ಠ348+"' /></div>";
            break;
        case "file":
            ಠ_ಠ280 += "  <div class='rowElem negPad'><ಠ_ಠ307 for='"+ಠ_ಠ348+"'>"+ಠ_ಠ348+": </ಠ_ಠ307>";
            ಠ_ಠ280 += "<form class='form-horizontal' ಠ_ಠ467='form_"+ಠ_ಠ467+"' enctype='multipart/form-ಠ_ಠ364' method='post' action='/api/sites/"+$(scheduleBuilder.ಠ_ಠ383).ಠ_ಠ493()+"/images' autocomplete='off'>";
            ಠ_ಠ280 +=  "<input ಠ_ಠ349='hidden' ಠ_ಠ348='ಠ_ಠ456' value='"+$('#ಠ_ಠ456').ಠ_ಠ493()+"' />";
            ಠ_ಠ280 += "<input ಠ_ಠ349='hidden' ಠ_ಠ348='file_target' value='"+ಠ_ಠ467+"' />";
            ಠ_ಠ280 += "<input ಠ_ಠ349='text' class='ಠ_ಠ276 template_editor_data_input' ಠ_ಠ364-inputname='"+ಠ_ಠ348+"' ಠ_ಠ467='"+ಠ_ಠ467+"'/>";
            ಠ_ಠ280 += "<div class='fileUpload btn btn-primary'>";
            ಠ_ಠ280 += "<span>Upload</span>";
            ಠ_ಠ280 += "<input ಠ_ಠ349='file' class='upload ' ಠ_ಠ348='image' ಠ_ಠ467='upload_"+ಠ_ಠ467+"' />";
            ಠ_ಠ280 += "</div>";
            ಠ_ಠ280 += "</form></div>";
            ಠ_ಠ280 += "<script>";
            ಠ_ಠ280 += "$('body').delegate('#upload_"+ಠ_ಠ467+"','change', function(){ $('#form_"+ಠ_ಠ467+"').ajaxForm(editorAPI.ಠ_ಠ343).submit(); });";
            ಠ_ಠ280 += "</script>";
            break;
        default:
            ಠ_ಠ280 += "  <div class='rowElem'><ಠ_ಠ307 for='"+ಠ_ಠ348+"'>"+ಠ_ಠ348+": </ಠ_ಠ307>";
            ಠ_ಠ280 += "<input ಠ_ಠ349='text' class='template_editor_data_input' ಠ_ಠ364-inputname='"+ಠ_ಠ348+"' ಠ_ಠ467='"+ಠ_ಠ467+"' value='placeholder' ಠ_ಠ348='"+ಠ_ಠ348+"' /></div>";
            break;

    }
    return ಠ_ಠ280;

}


editorAPI.ಠ_ಠ352 = function(ಠ_ಠ334,ಠ_ಠ283,ಠ_ಠ468){
    var ಠ_ಠ282 = '/api/sites/'+ಠ_ಠ334+'/ಠ_ಠ314/'+ಠ_ಠ283;
    var ಠ_ಠ293 = {
                ಠ_ಠ456:$('#ಠ_ಠ456').ಠ_ಠ493(),
                delete:"true"
            };
    $.post(ಠ_ಠ282,ಠ_ಠ293,function(ಠ_ಠ469){
      editorAPI.ಠ_ಠ340 = null;
      ಠ_ಠ468(ಠ_ಠ469);
    });
}

editorAPI.ಠ_ಠ354 = function(ಠ_ಠ334,ಠ_ಠ285,ಠ_ಠ468){
    var ಠ_ಠ282 = '/api/sites/'+ಠ_ಠ334+'/ಠ_ಠ455/'+ಠ_ಠ285;
    var ಠ_ಠ293 = {
                ಠ_ಠ456:$('#ಠ_ಠ456').ಠ_ಠ493(),
                delete:"true"
            };
    $.post(ಠ_ಠ282,ಠ_ಠ293,function(ಠ_ಠ469){
      editorAPI.ಠ_ಠ341 = null;
      ಠ_ಠ468(ಠ_ಠ469);
    });
}

editorAPI.ಠ_ಠ356 = function(ಠ_ಠ334,ಠ_ಠ286,ಠ_ಠ468){
    var ಠ_ಠ282 = '/api/sites/'+ಠ_ಠ334+'/schedules/'+ಠ_ಠ286;
    var ಠ_ಠ293 = {
                ಠ_ಠ456:$('#ಠ_ಠ456').ಠ_ಠ493(),
                delete:"true"
            };
    $.post(ಠ_ಠ282,ಠ_ಠ293,function(ಠ_ಠ469){
      editorAPI.ಠ_ಠ342 = null;
      ಠ_ಠ468(ಠ_ಠ469);
    });
}

editorAPI.ಠ_ಠ358 = function(ಠ_ಠ468){
  ಠ_ಠ468(editorAPI.ಠ_ಠ339);
}

editorAPI.ಠ_ಠ359 = function(ಠ_ಠ468){
  ಠ_ಠ468(editorAPI.ಠ_ಠ340);
}

editorAPI.ಠ_ಠ360 = function(ಠ_ಠ283,ಠ_ಠ468){
  $.each(editorAPI.ಠ_ಠ340,function(ಠ_ಠ280,ಠ_ಠ472,ಠ_ಠ473){
    if (ಠ_ಠ283 == ಠ_ಠ472.ಠ_ಠ467){
        ಠ_ಠ468(ಠ_ಠ472);
    }
  });
}

editorAPI.ಠ_ಠ361 = function(ಠ_ಠ286,ಠ_ಠ468){
  $.each(editorAPI.ಠ_ಠ342,function(ಠ_ಠ280,ಠ_ಠ472,ಠ_ಠ473){
    if (ಠ_ಠ286 == ಠ_ಠ472.ಠ_ಠ467){
        ಠ_ಠ468(ಠ_ಠ472);
    }
  });
}

editorAPI.ಠ_ಠ362 = function(ಠ_ಠ285,ಠ_ಠ468){
  $.each(editorAPI.ಠ_ಠ341,function(ಠ_ಠ280,ಠ_ಠ472,ಠ_ಠ473){
    if (ಠ_ಠ285 == ಠ_ಠ472.ಠ_ಠ467){
        ಠ_ಠ468(ಠ_ಠ472);
    }
  });
}

editorAPI.ಠ_ಠ363 = function(ಠ_ಠ283,ಠ_ಠ364,ಠ_ಠ468){
  $.each(editorAPI.ಠ_ಠ340,function(ಠ_ಠ280,ಠ_ಠ472,ಠ_ಠ473){
    if (ಠ_ಠ283 == ಠ_ಠ472.ಠ_ಠ467){
        ಠ_ಠ472.ಠ_ಠ364 = ಠ_ಠ364;
        ಠ_ಠ468(ಠ_ಠ472);
    }

  });
}

editorAPI.ಠ_ಠ365 = function(ಠ_ಠ334,ಠ_ಠ285,ಠ_ಠ364,ಠ_ಠ468){
  var ಠ_ಠ282 = '/api/sites/'+ಠ_ಠ334+'/ಠ_ಠ455/'+ಠ_ಠ285;
  $.post(ಠ_ಠ282,ಠ_ಠ364,function(ಠ_ಠ469){
    editorAPI.ಠ_ಠ341 = null;
    ಠ_ಠ468(ಠ_ಠ469);
  });
}

editorAPI.ಠ_ಠ366 = function(ಠ_ಠ334,ಠ_ಠ286,ಠ_ಠ364,ಠ_ಠ468){
    var ಠ_ಠ282 = '/api/sites/'+ಠ_ಠ334+'/schedules/'+ಠ_ಠ286;
    $.post(ಠ_ಠ282,ಠ_ಠ364,function(ಠ_ಠ469){
      editorAPI.ಠ_ಠ342 = null;
      ಠ_ಠ468(ಠ_ಠ469);
    });
}


editorAPI.ಠ_ಠ367 = function(ಠ_ಠ468){
  if (editorAPI.ಠ_ಠ339 === null){
    $.getJSON('/api/sites',function(ಠ_ಠ364){
      var ಠ_ಠ289 = "";
      $.each(ಠ_ಠ364,function(ಠ_ಠ478,ಠ_ಠ479){
        ಠ_ಠ289 += "<option value='"+ಠ_ಠ479.ಠ_ಠ467+"' >"+ಠ_ಠ479.ಠ_ಠ307+"</option>";
      });
      editorAPI.ಠ_ಠ339 = ಠ_ಠ289;
      editorAPI.ಠ_ಠ358(ಠ_ಠ468);
    });
  } else {
    console.log('cached sites');
    editorAPI.ಠ_ಠ358(ಠ_ಠ468);
  }
}

editorAPI.ಠ_ಠ369 = function(ಠ_ಠ334,ಠ_ಠ283,ಠ_ಠ364,ಠ_ಠ468){
  var ಠ_ಠ282 = '/api/sites/'+ಠ_ಠ334+'/ಠ_ಠ314/'+ಠ_ಠ283;
  $.post(ಠ_ಠ282,ಠ_ಠ364,function(ಠ_ಠ469){
    editorAPI.ಠ_ಠ340 = null;
    ಠ_ಠ468(ಠ_ಠ469);
  });
}

editorAPI.ಠ_ಠ370 = function(ಠ_ಠ334,ಠ_ಠ468){
    $.getJSON('/api/sites/'+ಠ_ಠ334+'/ಠ_ಠ314',function(ಠ_ಠ364){
      editorAPI.ಠ_ಠ340 = ಠ_ಠ364;
      editorAPI.ಠ_ಠ359(ಠ_ಠ468);
    });
}

editorAPI.ಠ_ಠ371 = function(ಠ_ಠ334,ಠ_ಠ283,ಠ_ಠ468){
  if (editorAPI.ಠ_ಠ340 === null){
    $.getJSON('/api/sites/'+ಠ_ಠ334+'/ಠ_ಠ314',function(ಠ_ಠ364){
      editorAPI.ಠ_ಠ340 = ಠ_ಠ364;
      editorAPI.ಠ_ಠ360(ಠ_ಠ283,ಠ_ಠ468);
    });
  } else {
    editorAPI.ಠ_ಠ360(ಠ_ಠ283,ಠ_ಠ468);
  }
}

editorAPI.ಠ_ಠ372 = function(ಠ_ಠ468){
  ಠ_ಠ468(editorAPI.ಠ_ಠ341);
}

editorAPI.ಠ_ಠ373 = function(ಠ_ಠ334,ಠ_ಠ468){
  if (editorAPI.ಠ_ಠ341 === null){
    $.getJSON('/api/sites/'+ಠ_ಠ334+'/ಠ_ಠ455',function(ಠ_ಠ364){
      editorAPI.ಠ_ಠ341 = ಠ_ಠ364;
      editorAPI.ಠ_ಠ372(ಠ_ಠ468);
    });
  } else {
    editorAPI.ಠ_ಠ372(ಠ_ಠ468);
  }
}

//SCHEDULES

editorAPI.ಠ_ಠ374 = function(ಠ_ಠ468){
  ಠ_ಠ468(editorAPI.ಠ_ಠ342);
}

editorAPI.ಠ_ಠ375 = function(ಠ_ಠ334,ಠ_ಠ468){
  if (editorAPI.ಠ_ಠ342 === null){
    $.getJSON('/api/sites/'+ಠ_ಠ334+'/schedules',function(ಠ_ಠ364){
      editorAPI.ಠ_ಠ342 = ಠ_ಠ364;
      editorAPI.ಠ_ಠ374(ಠ_ಠ468);
    });
  } else {
    editorAPI.ಠ_ಠ374(ಠ_ಠ468);
  }
}

editorAPI.ಠ_ಠ376 = function(ಠ_ಠ334,ಠ_ಠ283,ಠ_ಠ364,ಠ_ಠ468){
    if (editorAPI.ಠ_ಠ340 === null){
      $.getJSON('/api/sites/'+ಠ_ಠ334+'/ಠ_ಠ314',function(ಠ_ಠ314){
        editorAPI.ಠ_ಠ340 = ಠ_ಠ314;
        editorAPI.ಠ_ಠ363(ಠ_ಠ283,ಠ_ಠ364,ಠ_ಠ468);
      });
    } else {
      editorAPI.ಠ_ಠ363(ಠ_ಠ283,ಠ_ಠ364,ಠ_ಠ468);
    }
}

editorAPI.ಠ_ಠ377 = function(ಠ_ಠ334,ಠ_ಠ285,ಠ_ಠ468){
  if (editorAPI.ಠ_ಠ341 === null){
    $.getJSON('/api/sites/'+ಠ_ಠ334+'/ಠ_ಠ455',function(ಠ_ಠ364){
      editorAPI.ಠ_ಠ341 = ಠ_ಠ364;
      editorAPI.ಠ_ಠ362(ಠ_ಠ285,ಠ_ಠ468);
    });
  } else {
    editorAPI.ಠ_ಠ362(ಠ_ಠ285,ಠ_ಠ468);
  }
}

editorAPI.ಠ_ಠ378 = function(ಠ_ಠ334, ಠ_ಠ286, ಠ_ಠ468){
    if (editorAPI.ಠ_ಠ342 === null){
      $.getJSON('/api/sites/'+ಠ_ಠ334+'/schedules',function(ಠ_ಠ364){
        editorAPI.ಠ_ಠ342 = ಠ_ಠ364;
        editorAPI.ಠ_ಠ361(ಠ_ಠ286,ಠ_ಠ468);
      });
    } else {
      editorAPI.ಠ_ಠ361(ಠ_ಠ286,ಠ_ಠ468);
    }
}

editorAPI.ಠ_ಠ379 = function(ಠ_ಠ334, ಠ_ಠ480, ಠ_ಠ468){
    $.ajax({
        dataType: "json",
        ಠ_ಠ282: '/api/sites/'+ಠ_ಠ334+'/schedules/live/'+encodeURIComponent(ಠ_ಠ480),
        ಠ_ಠ463: function(ಠ_ಠ481){
                ಠ_ಠ481.setRequestHeader("CF-IPCountry", $('#live_preview_country').ಠ_ಠ493());
                ಠ_ಠ481.setRequestHeader("Preview-IPCountry", $('#live_preview_country').ಠ_ಠ493());
        },
        ಠ_ಠ464: function(ಠ_ಠ364){
            ಠ_ಠ468(ಠ_ಠ364);
        }
    });
}





editorAPI.ಠ_ಠ380 = function(ಠ_ಠ482){
  return Base64.encode(ಠ_ಠ482);
}

editorAPI.ಠ_ಠ381 = function(ಠ_ಠ482){
  return Base64.decode(ಠ_ಠ482);
}

var templateBuilder = templateBuilder || {};



templateBuilder.ಠ_ಠ338 = function(){
  this.ಠ_ಠ383 = '#editor_siteid';
  this.ಠ_ಠ384 = '#template_editor_template';
  this.ಠ_ಠ385 = '#template_editor_name';
  this.ಠ_ಠ386 = '#template_editor_html';
  this.ಠ_ಠ387 = '#template_editor_javascript';
  this.ಠ_ಠ388 = '#template_editor_target';
  this.ಠ_ಠ389 =  '#template_editor_inject';
  this.ಠ_ಠ390 = '.template_editor_data_input';
  this.ಠ_ಠ391 = '#template_editor_data_inputs';
  this.ಠ_ಠ392 = '#template_preview_button';
  this.ಠ_ಠ393 = '#template_save_button';
  this.ಠ_ಠ394 = '#template_delete_button';


  window.addEventListener('ಠ_ಠ485', function (ಠ_ಠ484) {
    switch (ಠ_ಠ484.ಠ_ಠ364.ಠ_ಠ485){
      case "div_selected":
        jQuery(templateBuilder.ಠ_ಠ386).ಠ_ಠ493(beautify_html(ಠ_ಠ484.ಠ_ಠ364.ಠ_ಠ295));
        jQuery(templateBuilder.ಠ_ಠ388).ಠ_ಠ493(ಠ_ಠ484.ಠ_ಠ364.ಠ_ಠ277);
        ಠ_ಠ336();
        break;
    }
  }, false);

  $(templateBuilder.ಠ_ಠ393).click(function(){
    templateBuilder.ಠ_ಠ399();
  });

  $(templateBuilder.ಠ_ಠ394).click(function(){
    templateBuilder.ಠ_ಠ352();
  });

  $(templateBuilder.ಠ_ಠ392).click(function(){
    templateBuilder.ಠ_ಠ401();
  });

  $(templateBuilder.ಠ_ಠ386).change(function(){
    templateBuilder.ಠ_ಠ397();
  });

  $(templateBuilder.ಠ_ಠ387).change(function(){
    templateBuilder.ಠ_ಠ397();
  });

  $(templateBuilder.ಠ_ಠ388).change(function(){
    targetFrame = ಠ_ಠ492.getElementById('preview');
    targetFrame.contentWindow.postMessage({ಠ_ಠ485: 'target_change', ಠ_ಠ277: $(templateBuilder.ಠ_ಠ388).ಠ_ಠ493()}, '*');

  });

  $(templateBuilder.ಠ_ಠ383).change(function(){
    templateBuilder.ಠ_ಠ370();
  });

  $(templateBuilder.ಠ_ಠ384).change(function(){
    templateBuilder.ಠ_ಠ371();
  });

  templateBuilder.ಠ_ಠ370();

}


templateBuilder.ಠ_ಠ395 = function(){
    templateBuilder.ಠ_ಠ396();
    templateBuilder.ಠ_ಠ370();
}

templateBuilder.ಠ_ಠ396 = function(){
  $(templateBuilder.ಠ_ಠ385).ಠ_ಠ493('');
  $(templateBuilder.ಠ_ಠ386).ಠ_ಠ493('');
  $(templateBuilder.ಠ_ಠ388).ಠ_ಠ493('');
  $(templateBuilder.ಠ_ಠ389).ಠ_ಠ493('');
  $(templateBuilder.ಠ_ಠ387).ಠ_ಠ493('');
  $(templateBuilder.ಠ_ಠ391).ಠ_ಠ295(' ');

}

templateBuilder.ಠ_ಠ397 = function(){
    ಠ_ಠ304 = $(templateBuilder.ಠ_ಠ386).ಠ_ಠ493();
    ಠ_ಠ305 = $(templateBuilder.ಠ_ಠ387).ಠ_ಠ493();
    placeholders = editorAPI.ಠ_ಠ347(ಠ_ಠ304+" "+ಠ_ಠ305);
    $(templateBuilder.ಠ_ಠ391).ಠ_ಠ295("");
    var ಠ_ಠ291 = "";
    for (var ಠ_ಠ279 = 0; ಠ_ಠ279 < placeholders.ಠ_ಠ491; ಠ_ಠ279++) {
      var ಠ_ಠ293 = placeholders[ಠ_ಠ279];
      ಠ_ಠ291 += editorAPI.ಠ_ಠ351(ಠ_ಠ293.ಠ_ಠ348,ಠ_ಠ293.ಠ_ಠ348,ಠ_ಠ293.ಠ_ಠ349);
    }
    $(templateBuilder.ಠ_ಠ391).append(ಠ_ಠ291);
    editorAPI.ಠ_ಠ345();
}

templateBuilder.ಠ_ಠ352 = function(){
    editorAPI.ಠ_ಠ352($(templateBuilder.ಠ_ಠ383).ಠ_ಠ493(),$(templateBuilder.ಠ_ಠ384).ಠ_ಠ493(),templateBuilder.ಠ_ಠ400);
}



templateBuilder.ಠ_ಠ399 = function(){
  if ($(templateBuilder.ಠ_ಠ385).ಠ_ಠ493() == ""){
    alert('please enter a ಠ_ಠ348 for this ಠ_ಠ298!!');
    return false;
  } else {

    //ಠ_ಠ295 = "<div class='"+$(templateBuilder.ಠ_ಠ385).ಠ_ಠ493()+" preview_div' ಠ_ಠ364-ಠ_ಠ277='"+$(templateBuilder.ಠ_ಠ388).ಠ_ಠ493()+"' ಠ_ಠ364-inject='"+$(templateBuilder.ಠ_ಠ389).ಠ_ಠ493()+"'>";
    ಠ_ಠ295 = $(templateBuilder.ಠ_ಠ386).ಠ_ಠ493();
    //ಠ_ಠ295 += "</div>"
    ಠ_ಠ295 = editorAPI.ಠ_ಠ380(ಠ_ಠ295);
    ಠ_ಠ305 = $(templateBuilder.ಠ_ಠ387).ಠ_ಠ493();
    ಠ_ಠ305 = editorAPI.ಠ_ಠ380(ಠ_ಠ305);

    ಠ_ಠ299 = '{"ಠ_ಠ348":"'+$(templateBuilder.ಠ_ಠ385).ಠ_ಠ493().trim()+'",';
    ಠ_ಠ299 += '"ಠ_ಠ456":"'+$('#ಠ_ಠ456').ಠ_ಠ493()+'",'
    ಠ_ಠ299 += '"ಠ_ಠ277":"'+$(templateBuilder.ಠ_ಠ388).ಠ_ಠ493()+'",';
    ಠ_ಠ299 += '"inject":"'+$(templateBuilder.ಠ_ಠ389).ಠ_ಠ493()+'",';
    ಠ_ಠ299 += '"ಠ_ಠ295":"'+ಠ_ಠ295+'",';
    if ($(templateBuilder.ಠ_ಠ384).ಠ_ಠ493() !== 'new'){
      ಠ_ಠ299 += '"ಠ_ಠ467":"'+$(templateBuilder.ಠ_ಠ384).ಠ_ಠ493()+'",';
    }
    ಠ_ಠ299 += '"ಠ_ಠ305":"'+ಠ_ಠ305+'",';
    ಠ_ಠ299 += '"defaults":{';
    $(templateBuilder.ಠ_ಠ390).each(function(){
      ಠ_ಠ299 += '"'+$(this).attr('ಠ_ಠ467')+'":"'+$(this).ಠ_ಠ493()+'",';
    });
    ಠ_ಠ299 = ಠ_ಠ299.slice(0, -1);
    ಠ_ಠ299 += '}';
    ಠ_ಠ299 += '}';
    ಠ_ಠ293 = JSON.parse(ಠ_ಠ299);
    editorAPI.ಠ_ಠ369($(templateBuilder.ಠ_ಠ383).ಠ_ಠ493(),$(templateBuilder.ಠ_ಠ384).ಠ_ಠ493(),ಠ_ಠ293,templateBuilder.ಠ_ಠ400);
  }
}

templateBuilder.ಠ_ಠ400 = function(ಠ_ಠ469){
  ಠ_ಠ469 = JSON.parse(ಠ_ಠ469);
  if (ಠ_ಠ469.status == 'ಠ_ಠ464'){
    templateBuilder.ಠ_ಠ396();
    templateBuilder.ಠ_ಠ370();
  } else {
    alert('Error saving ಠ_ಠ364!!');
  }
}


templateBuilder.ಠ_ಠ401 = function(){
  if ($(templateBuilder.ಠ_ಠ385).ಠ_ಠ493() == ""){
    alert('please enter a ಠ_ಠ348 for this ಠ_ಠ298!!');
    return false;
  } else {
    ಠ_ಠ299 = '[{"preview":';
    ಠ_ಠ299 += '{';
    ಠ_ಠ299 += '"ಠ_ಠ298":"'+$(templateBuilder.ಠ_ಠ385).ಠ_ಠ493() +'",';
    $(templateBuilder.ಠ_ಠ390).each(function(){
      ಠ_ಠ299 += '"'+$(this).attr('ಠ_ಠ467')+'":"'+$(this).ಠ_ಠ493()+'",';
    });
    ಠ_ಠ299 += '"javascript":"'+editorAPI.ಠ_ಠ380($(templateBuilder.ಠ_ಠ387).ಠ_ಠ493())+'"';
    //ಠ_ಠ299 = ಠ_ಠ299.slice(0, -1);
    ಠ_ಠ299 += '}';
    ಠ_ಠ299 += '}]';
    ಠ_ಠ293 = JSON.parse(ಠ_ಠ299);
    //TODO:: grab ಠ_ಠ295 here
    ಠ_ಠ295 = "<div class='"+$(templateBuilder.ಠ_ಠ385).ಠ_ಠ493()+" preview_div' ಠ_ಠ364-ಠ_ಠ277='"+$(templateBuilder.ಠ_ಠ388).ಠ_ಠ493()+"' ಠ_ಠ364-inject='"+$(templateBuilder.ಠ_ಠ389).ಠ_ಠ493()+"'>";
    ಠ_ಠ295 += $(templateBuilder.ಠ_ಠ386).ಠ_ಠ493();
    ಠ_ಠ295 += "</div>"
    //post preview ಠ_ಠ364 to preview frame
    targetFrame = ಠ_ಠ492.getElementById('preview');
    var ಠ_ಠ294 = {ಠ_ಠ485: 'template_preview', ಠ_ಠ295: ಠ_ಠ295, ಠ_ಠ293: ಠ_ಠ293 };
    targetFrame.contentWindow.postMessage(ಠ_ಠ294, '*');
  }
 }

  templateBuilder.ಠ_ಠ367 = function(){
    editorAPI.ಠ_ಠ367(templateBuilder.ಠ_ಠ403);
  }

  templateBuilder.ಠ_ಠ403 = function(ಠ_ಠ295){
      $(templateBuilder.ಠ_ಠ383).ಠ_ಠ295(ಠ_ಠ295);
      templateBuilder.ಠ_ಠ370();
  }

  templateBuilder.ಠ_ಠ370 = function(){

    editorAPI.ಠ_ಠ370($(templateBuilder.ಠ_ಠ383).ಠ_ಠ493(),templateBuilder.ಠ_ಠ405);
  }

  templateBuilder.ಠ_ಠ405 = function(ಠ_ಠ364){
    var ಠ_ಠ289 = "";
    ಠ_ಠ289 += "<option value='new'>New...</option>";
    $.each(ಠ_ಠ364,function(ಠ_ಠ478,ಠ_ಠ479){
      ಠ_ಠ289 += "<option value='"+ಠ_ಠ479.ಠ_ಠ467+"' >"+ಠ_ಠ479.ಠ_ಠ348+"</option>";
    });
    $(templateBuilder.ಠ_ಠ384).ಠ_ಠ295(ಠ_ಠ289);
  }

  templateBuilder.ಠ_ಠ371 = function(){
    var ಠ_ಠ283 = $(templateBuilder.ಠ_ಠ384).ಠ_ಠ493();
    if (ಠ_ಠ283 == 'new'){
      templateBuilder.ಠ_ಠ396();
      return;
    } else {
      editorAPI.ಠ_ಠ371($(templateBuilder.ಠ_ಠ383).ಠ_ಠ493(),ಠ_ಠ283,templateBuilder.ಠ_ಠ407);
    }
  }

  templateBuilder.ಠ_ಠ407 = function(ಠ_ಠ298){
    $(templateBuilder.ಠ_ಠ385).ಠ_ಠ493(ಠ_ಠ298.ಠ_ಠ348);
    $(templateBuilder.ಠ_ಠ388).ಠ_ಠ493(ಠ_ಠ298.ಠ_ಠ277);
    $(templateBuilder.ಠ_ಠ389).ಠ_ಠ493(ಠ_ಠ298.inject);
    $(templateBuilder.ಠ_ಠ386).ಠ_ಠ493(beautify_html(editorAPI.ಠ_ಠ381(ಠ_ಠ298.ಠ_ಠ295)));
    $(templateBuilder.ಠ_ಠ387).ಠ_ಠ493(editorAPI.ಠ_ಠ381(ಠ_ಠ298.javascript));
    templateBuilder.ಠ_ಠ397();
    $.each(ಠ_ಠ298.default,function(ಠ_ಠ478,ಠ_ಠ479){
      $('#'+ಠ_ಠ478).ಠ_ಠ493(ಠ_ಠ479);
    });
    $('.spectrum').spectrum({preferredFormat: "ಠ_ಠ348"});
    $('.spectrum').show();
    targetFrame = ಠ_ಠ492.getElementById('preview');
    targetFrame.contentWindow.postMessage({ಠ_ಠ485: 'target_change', ಠ_ಠ277: $(templateBuilder.ಠ_ಠ388).ಠ_ಠ493()}, '*');
  }

var campaignBuilder = campaignBuilder || {};

campaignBuilder.ಠ_ಠ338 = function(){
  this.ಠ_ಠ383 = '#editor_siteid';
  this.ಠ_ಠ409 = '#campaign_editor_campaign';
  this.ಠ_ಠ384 = '#campaign_editor_template';
  this.ಠ_ಠ411 = '#campaign_editor_add_template';
  this.ಠ_ಠ412 = "#campaign_editor_accordion";
  this.ಠ_ಠ392 = "#campaign_editor_preview_campaign";
  this.ಠ_ಠ393 = "#campaign_save_button";
  this.ಠ_ಠ385 = "#campaign_editor_name";
  this.ಠ_ಠ394 = "#campaign_delete_button";
  campaignBuilder.ಠ_ಠ373();

  $(this.ಠ_ಠ411).click(function(){
    var ಠ_ಠ298 = $(campaignBuilder.ಠ_ಠ384).ಠ_ಠ493();
    editorAPI.ಠ_ಠ371($(campaignBuilder.ಠ_ಠ383).ಠ_ಠ493(),ಠ_ಠ298,campaignBuilder.ಠ_ಠ423);
  });

  $(this.ಠ_ಠ409).change(function(){
    campaignBuilder.ಠ_ಠ377();
  });

  $(this.ಠ_ಠ392).click(function(){
    campaignBuilder.ಠ_ಠ421();
  });

  $(this.ಠ_ಠ393).click(function(){
    campaignBuilder.ಠ_ಠ365();
  });

  $(this.ಠ_ಠ394).click(function(){
    campaignBuilder.ಠ_ಠ354();
  });

}

campaignBuilder.ಠ_ಠ354 = function(){
    editorAPI.ಠ_ಠ354($(campaignBuilder.ಠ_ಠ383).ಠ_ಠ493(),$(campaignBuilder.ಠ_ಠ409).ಠ_ಠ493(),campaignBuilder.ಠ_ಠ420);
}

campaignBuilder.ಠ_ಠ395 = function(){
  $(campaignBuilder.ಠ_ಠ412).ಠ_ಠ295(' ');
  $(campaignBuilder.ಠ_ಠ412).accordion().accordion('destroy');
  $(campaignBuilder.ಠ_ಠ385).ಠ_ಠ493('');
  campaignBuilder.ಠ_ಠ373();
}

campaignBuilder.ಠ_ಠ365 = function(){
  if ($(campaignBuilder.ಠ_ಠ385).ಠ_ಠ493() == ""){
    alert('please enter a ಠ_ಠ348 for this ಠ_ಠ317!!');
    return false;
  } else {
    var ಠ_ಠ299 = '{"ಠ_ಠ348":"'+$(campaignBuilder.ಠ_ಠ385).ಠ_ಠ493()+'",';
    ಠ_ಠ299 += '"ಠ_ಠ456":"'+$('#ಠ_ಠ456').ಠ_ಠ493()+'",'
    ಠ_ಠ299 += '"ಠ_ಠ314":{'
    $('.campaign_editor_data_elements').each(function(){
      var ಠ_ಠ283= $(this).ಠ_ಠ364('templateid');
      ಠ_ಠ299 += '"template_'+ಠ_ಠ283+'":{';
      $(this).find('input').each(function(){
        if ($(this).ಠ_ಠ364('inputname') !== undefined)
            ಠ_ಠ299 += '"'+$(this).ಠ_ಠ364('inputname')+'":"'+$(this).ಠ_ಠ493()+'",';
      });
      ಠ_ಠ299 = ಠ_ಠ299.slice(0, -1);
      ಠ_ಠ299 += '},';
    });
    ಠ_ಠ299 = ಠ_ಠ299.slice(0, -1);
    ಠ_ಠ299 += '}}';
    var ಠ_ಠ293 = JSON.parse(ಠ_ಠ299);
    editorAPI.ಠ_ಠ365($(campaignBuilder.ಠ_ಠ383).ಠ_ಠ493(),$(campaignBuilder.ಠ_ಠ409).ಠ_ಠ493(),ಠ_ಠ293,campaignBuilder.ಠ_ಠ420);
  }
}

campaignBuilder.ಠ_ಠ420 = function(ಠ_ಠ469){
  ಠ_ಠ469 = JSON.parse(ಠ_ಠ469);
  if (ಠ_ಠ469.status == 'ಠ_ಠ464'){
    campaignBuilder.ಠ_ಠ396();
    campaignBuilder.ಠ_ಠ373();
    //alert('ಠ_ಠ317 saved');
  } else {
    alert('Error saving ಠ_ಠ364!!');
  }
}

campaignBuilder.ಠ_ಠ421 = function(){
  var ಠ_ಠ295 = "";
  ಠ_ಠ299 = '[';

  $('.campaign_editor_data_elements').each(function(){
    var ಠ_ಠ301 = $(this).ಠ_ಠ364('templatename');
    var ಠ_ಠ302 = $(this).ಠ_ಠ364('ಠ_ಠ277');
    var ಠ_ಠ303 = $(this).ಠ_ಠ364('inject');
    //console.log(ಠ_ಠ301);
    //build ಠ_ಠ295
    ಠ_ಠ295 += "<div class='"+ಠ_ಠ301+" preview_div' ಠ_ಠ364-ಠ_ಠ277='"+ಠ_ಠ302+"' ಠ_ಠ364-inject='"+ಠ_ಠ303+"'>";
    var ಠ_ಠ304 = $(this).children('textarea.html_textarea').ಠ_ಠ295();
    var ಠ_ಠ305 = editorAPI.ಠ_ಠ380($(this).children('textarea.js_textarea').ಠ_ಠ493());
    ಠ_ಠ304 = jQuery('<div/>').ಠ_ಠ295(ಠ_ಠ304).text();
    //ಠ_ಠ305 = jQuery('<div/>').ಠ_ಠ295(ಠ_ಠ305).text();
    ಠ_ಠ295 += ಠ_ಠ304;
    ಠ_ಠ295 += "</div>";
    //build ಠ_ಠ364
    ಠ_ಠ299 +=  '{"preview":';
    ಠ_ಠ299 += '{';
    ಠ_ಠ299 += '"ಠ_ಠ298" : "'+ಠ_ಠ301+'",';
    $(this).find('input').each(function(){
        if ($(this).ಠ_ಠ364('inputname') !== undefined)
            ಠ_ಠ299 += '"'+$(this).ಠ_ಠ364('inputname')+'":"'+$(this).ಠ_ಠ493()+'",';
    });
    ಠ_ಠ299 += '"javascript":"'+ಠ_ಠ305+'"';
    //ಠ_ಠ299 = ಠ_ಠ299.slice(0, -1);
    ಠ_ಠ299 += '}';
    ಠ_ಠ299 += '},';
  });
  ಠ_ಠ299 = ಠ_ಠ299.slice(0, -1);
  ಠ_ಠ299 += ']';
  ಠ_ಠ293 = JSON.parse(ಠ_ಠ299);
  targetFrame = ಠ_ಠ492.getElementById('preview');
  var ಠ_ಠ294 = {ಠ_ಠ485: 'template_preview', ಠ_ಠ295: ಠ_ಠ295, ಠ_ಠ293: ಠ_ಠ293 };
  targetFrame.contentWindow.postMessage(ಠ_ಠ294, '*');
}


campaignBuilder.ಠ_ಠ396 = function(){
  $(campaignBuilder.ಠ_ಠ412).ಠ_ಠ295(' ');

  $(campaignBuilder.ಠ_ಠ412).accordion('destroy');
  campaignBuilder.ಠ_ಠ370();
}

campaignBuilder.ಠ_ಠ423 = function(ಠ_ಠ298){
  console.log(ಠ_ಠ298);
  //TODO: check if ಠ_ಠ298 already present in this ಠ_ಠ317!!
  if (ಠ_ಠ298.ಠ_ಠ364 == undefined || ಠ_ಠ298.ಠ_ಠ364 == null){
    ಠ_ಠ364 = ಠ_ಠ298.default;
  } else {
    ಠ_ಠ364 = ಠ_ಠ298.ಠ_ಠ364;
  }
  var ಠ_ಠ307 = ಠ_ಠ298.ಠ_ಠ348;
  var ಠ_ಠ283 = ಠ_ಠ298.ಠ_ಠ467;
  var ಠ_ಠ295 = editorAPI.ಠ_ಠ381(ಠ_ಠ298.ಠ_ಠ295);
  var ಠ_ಠ305 = editorAPI.ಠ_ಠ381(ಠ_ಠ298.javascript);
  var ಠ_ಠ309 = editorAPI.ಠ_ಠ347(ಠ_ಠ295+" "+ಠ_ಠ305);
  ಠ_ಠ280 = "<h3>"+ಠ_ಠ307+"</h3>";
  ಠ_ಠ280 += "<div class='campaign_editor_data_elements' ಠ_ಠ364-templatename='"+ಠ_ಠ307+"' ಠ_ಠ364-templateid='"+ಠ_ಠ283+"' ಠ_ಠ364-ಠ_ಠ277='"+ಠ_ಠ298.ಠ_ಠ277+"' ಠ_ಠ364-inject='"+ಠ_ಠ298.inject+"'>";
  var ಠ_ಠ310 = "campaign_input_"+ಠ_ಠ307+"_html";
  var ಠ_ಠ311 = "campaign_input_"+ಠ_ಠ307+"_js";
  ಠ_ಠ280 += "<textarea ಠ_ಠ467='"+ಠ_ಠ310+"' style='display:none' class='html_textarea'>"+ಠ_ಠ295+"</textarea>";
  ಠ_ಠ280 += "<textarea ಠ_ಠ467='"+ಠ_ಠ311+"' style='display:none' class='js_textarea'>"+ಠ_ಠ305+"</textarea>";
  for (var ಠ_ಠ279 = 0; ಠ_ಠ279 < ಠ_ಠ309.ಠ_ಠ491; ಠ_ಠ279++) {
    var ಠ_ಠ293 = ಠ_ಠ309[ಠ_ಠ279];
    var ಠ_ಠ312 = "campaign_input_"+ಠ_ಠ307+"_"+ಠ_ಠ293.ಠ_ಠ348;
    var ಠ_ಠ313 = '';
    ಠ_ಠ280 += editorAPI.ಠ_ಠ351(ಠ_ಠ312,ಠ_ಠ293.ಠ_ಠ348,ಠ_ಠ293.ಠ_ಠ349);
  }
  ಠ_ಠ280 += "</div>";
  $(campaignBuilder.ಠ_ಠ412).append(ಠ_ಠ280);
  $(campaignBuilder.ಠ_ಠ412).accordion().accordion('destroy').accordion();
  $.each(ಠ_ಠ364,function(ಠ_ಠ478,ಠ_ಠ479){
    $("#campaign_input_"+ಠ_ಠ307+"_"+ಠ_ಠ478).ಠ_ಠ493(ಠ_ಠ479);
  });
  editorAPI.ಠ_ಠ345();
}

campaignBuilder.ಠ_ಠ367 = function(){
  editorAPI.ಠ_ಠ367(campaignBuilder.ಠ_ಠ403);
}

campaignBuilder.ಠ_ಠ403 = function(ಠ_ಠ295){
    $(campaignBuilder.ಠ_ಠ383).ಠ_ಠ295(ಠ_ಠ295);
    campaignBuilder.ಠ_ಠ373();
}

campaignBuilder.ಠ_ಠ373 = function(){
  editorAPI.ಠ_ಠ373($(campaignBuilder.ಠ_ಠ383).ಠ_ಠ493(),campaignBuilder.ಠ_ಠ426);
}

campaignBuilder.ಠ_ಠ426 = function(ಠ_ಠ364){
  var ಠ_ಠ289 = "";
  ಠ_ಠ289 += "<option value='new'>New...</option>";
  $.each(ಠ_ಠ364,function(ಠ_ಠ478,ಠ_ಠ479){
    ಠ_ಠ289 += "<option value='"+ಠ_ಠ479.ಠ_ಠ467+"' >"+ಠ_ಠ479.ಠ_ಠ348+"</option>";
  });
  $(campaignBuilder.ಠ_ಠ409).ಠ_ಠ295(ಠ_ಠ289);
  campaignBuilder.ಠ_ಠ370();
}

campaignBuilder.ಠ_ಠ370 = function(){
  editorAPI.ಠ_ಠ370($(campaignBuilder.ಠ_ಠ383).ಠ_ಠ493(),campaignBuilder.ಠ_ಠ405);
}

campaignBuilder.ಠ_ಠ405 = function(ಠ_ಠ364){
  var ಠ_ಠ289 = "";
  ಠ_ಠ289 += "<option value=''>Select...</option>";
  $.each(ಠ_ಠ364,function(ಠ_ಠ478,ಠ_ಠ479){
    ಠ_ಠ289 += "<option value='"+ಠ_ಠ479.ಠ_ಠ467+"' >"+ಠ_ಠ479.ಠ_ಠ348+"</option>";
  });
  $(campaignBuilder.ಠ_ಠ384).ಠ_ಠ295(ಠ_ಠ289);
  $(campaignBuilder.ಠ_ಠ412).accordion();
}

campaignBuilder.ಠ_ಠ377 = function(){
  campaignBuilder.ಠ_ಠ396();
  if ($(campaignBuilder.ಠ_ಠ409).ಠ_ಠ493() == 'new')
    return;
  editorAPI.ಠ_ಠ377($(campaignBuilder.editorSiteID).ಠ_ಠ493(),$(this.ಠ_ಠ409).ಠ_ಠ493(),campaignBuilder.ಠ_ಠ429);
}


campaignBuilder.ಠ_ಠ429 = function(ಠ_ಠ364){
  var ಠ_ಠ314 = ಠ_ಠ364.ಠ_ಠ314;
  var ಠ_ಠ315 = JSON.parse(ಠ_ಠ364.ಠ_ಠ364);
  $(campaignBuilder.ಠ_ಠ385).ಠ_ಠ493(ಠ_ಠ364.ಠ_ಠ348);
  $.each(ಠ_ಠ314,function(ಠ_ಠ280,ಠ_ಠ478,ಠ_ಠ473){
    var ಠ_ಠ293 = eval('ಠ_ಠ315.template_'+ಠ_ಠ478.ಠ_ಠ467);
    editorAPI.ಠ_ಠ376($(campaignBuilder.ಠ_ಠ383).ಠ_ಠ493(),ಠ_ಠ478.ಠ_ಠ467,ಠ_ಠ293,campaignBuilder.ಠ_ಠ423);
  });
}

var scheduleBuilder = scheduleBuilder || {};

var ಠ_ಠ316 = [];

scheduleBuilder.ಠ_ಠ338 = function(){
    
  this.ಠ_ಠ383 = '#editor_siteid';
  this.ಠ_ಠ430 = '#schedule_editor_schedule';
  this.ಠ_ಠ385 = "#schedule_editor_name";
  this.ಠ_ಠ431 = "#schedule_editor_start";
  this.ಠ_ಠ432 = "#schedule_editor_finish";
  this.ಠ_ಠ433 = '#schedule_editor_geo';
  this.ಠ_ಠ434 = "#schedule_editor_campaigns";
  this.ಠ_ಠ392 = "#schedule_editor_preview_schedule";
  this.ಠ_ಠ435 = "#schedule_editor_add_campaign";
  this.ಠ_ಠ393 = "#schedule_save_button";
  this.ಠ_ಠ412 = "#schedule_editor_accordion";
  this.ಠ_ಠ394 = "#schedule_delete_button";
  this.ಠ_ಠ437 = "#live_preview_schedule";
  this.ಠ_ಠ438 = window.setTimeout(scheduleBuilder.ಠ_ಠ379, 500);

  scheduleBuilder.ಠ_ಠ375();
  scheduleBuilder.ಠ_ಠ373();
  ಠ_ಠ316 = [];

  $(this.ಠ_ಠ435).click(function(){
    var ಠ_ಠ317 = $(scheduleBuilder.ಠ_ಠ434).ಠ_ಠ493();
    editorAPI.ಠ_ಠ377($(scheduleBuilder.ಠ_ಠ383).ಠ_ಠ493(),ಠ_ಠ317,scheduleBuilder.ಠ_ಠ447);
  });

  $(this.ಠ_ಠ430).change(function(){
    scheduleBuilder.ಠ_ಠ378();
  });

  $(this.ಠ_ಠ392).click(function(){
    scheduleBuilder.ಠ_ಠ421();
  });



  $('#live_preview_time').on('dp.change',function(){
      clearTimeout(scheduleBuilder.ಠ_ಠ438);
      scheduleBuilder.ಠ_ಠ438 = window.setTimeout(scheduleBuilder.ಠ_ಠ379, 500);
  });

  $('#live_preview_country').change(function(){
      clearTimeout(scheduleBuilder.ಠ_ಠ438);
      scheduleBuilder.ಠ_ಠ438 = window.setTimeout(scheduleBuilder.ಠ_ಠ379, 500);
  });


  $(this.ಠ_ಠ393).click(function(){
    scheduleBuilder.ಠ_ಠ366();
  });

  $(this.ಠ_ಠ394).click(function(){
    scheduleBuilder.ಠ_ಠ356();
  });
}

scheduleBuilder.ಠ_ಠ440 = function(){
    //console.log('setting time to '+moment().format("DD-MM-YYYY HH:mm"));
    $('#live_preview_time').ಠ_ಠ364("DateTimePicker").date(moment().format("DD-MM-YYYY HH:mm"));
}

scheduleBuilder.ಠ_ಠ441 = function(){
    $(scheduleBuilder.ಠ_ಠ430).ಠ_ಠ493($('#live_schedule_id').ಠ_ಠ493());
    scheduleBuilder.ಠ_ಠ378();
}

scheduleBuilder.ಠ_ಠ442 = function(){
    $('#editorTabs a[href="#schedule"]').tab('show');
    scheduleBuilder.ಠ_ಠ441();

}

scheduleBuilder.ಠ_ಠ443 = function(){
    scheduleBuilder.ಠ_ಠ441();
    scheduleBuilder.ಠ_ಠ421();
}

scheduleBuilder.ಠ_ಠ444 = function(ಠ_ಠ469){
    $('#live_schedule_target').ಠ_ಠ295('');
    var ಠ_ಠ289 = "";
    if (ಠ_ಠ469.ಠ_ಠ348 !== undefined){
        ಠ_ಠ289 += "<input ಠ_ಠ349='text' style='display:none' value='"+ಠ_ಠ469.ಠ_ಠ467+"' ಠ_ಠ467='live_schedule_id' >";
        ಠ_ಠ289 += "<span>"+ಠ_ಠ469.ಠ_ಠ348+" expires at "+ಠ_ಠ469.expire+"</span>";
        ಠ_ಠ289 += "<div class='live_schedule_buttons'><button ಠ_ಠ349='button' class='btn btn-primary' ಠ_ಠ467='live_schedule_preview'>Preview</button>&nbsp;<button ಠ_ಠ349='button' class= 'btn btn-primary' ಠ_ಠ467='live_schedule_edit'>Edit Schedule</button></div>";
    } else {
        ಠ_ಠ289 += "<span>No Schedule Defined</span>";
    }
    $('#live_schedule_target').ಠ_ಠ295(ಠ_ಠ289);
    $('#live_schedule_preview').click(function(){
        scheduleBuilder.ಠ_ಠ443();
    });
    $('#live_schedule_edit').click(function(){
        scheduleBuilder.ಠ_ಠ442();
    });
}

scheduleBuilder.ಠ_ಠ379 = function(){
    editorAPI.ಠ_ಠ379($(scheduleBuilder.ಠ_ಠ383).ಠ_ಠ493(),$('#live_preview_time').ಠ_ಠ364("DateTimePicker").date().format('DD-MM-YYYY HH:mm'),scheduleBuilder.ಠ_ಠ444);

}

scheduleBuilder.ಠ_ಠ395 = function(){
  scheduleBuilder.ಠ_ಠ396();
  $(scheduleBuilder.ಠ_ಠ412).ಠ_ಠ295(' ');
  $(scheduleBuilder.ಠ_ಠ412).accordion().accordion('destroy');
  scheduleBuilder.ಠ_ಠ375();
  scheduleBuilder.ಠ_ಠ373();
  $('.datetimepicker').datetimepicker({
      format: 'DD/MM/YYYY HH:mm'
  });
  ಠ_ಠ316 = [];
}

scheduleBuilder.ಠ_ಠ423 = function(ಠ_ಠ298){
    if (ಠ_ಠ298.ಠ_ಠ364 == undefined || ಠ_ಠ298.ಠ_ಠ364 == null){
      ಠ_ಠ364 = ಠ_ಠ298.default;
    } else {
      ಠ_ಠ364 = ಠ_ಠ298.ಠ_ಠ364;
    }
      var ಠ_ಠ307 = ಠ_ಠ298.ಠ_ಠ348;
      var ಠ_ಠ283 = ಠ_ಠ298.ಠ_ಠ467;
      if (!$('#schedule_template_container_'+ಠ_ಠ283).ಠ_ಠ491){ //if ಠ_ಠ298 is already contained in this schedule don't add it again!
        var ಠ_ಠ295 = editorAPI.ಠ_ಠ381(ಠ_ಠ298.ಠ_ಠ295);
        var ಠ_ಠ305 = editorAPI.ಠ_ಠ381(ಠ_ಠ298.javascript);
        var ಠ_ಠ309 = editorAPI.ಠ_ಠ347(ಠ_ಠ295+" "+ಠ_ಠ305);
        ಠ_ಠ280 = "<h3>"+ಠ_ಠ307+"</h3>";
        ಠ_ಠ280 += "<div ಠ_ಠ467='schedule_template_container_"+ಠ_ಠ283+"' class='schedule_editor_data_elements' ಠ_ಠ364-templatename='"+ಠ_ಠ307+"' ಠ_ಠ364-templateid='"+ಠ_ಠ283+"' ಠ_ಠ364-ಠ_ಠ277='"+ಠ_ಠ298.ಠ_ಠ277+"' ಠ_ಠ364-inject='"+ಠ_ಠ298.inject+"'>";
        var ಠ_ಠ310 = "schedule_input_"+ಠ_ಠ307+"_html";
        var ಠ_ಠ311 = "schedule_input_"+ಠ_ಠ307+"_js";
        ಠ_ಠ280 += "<textarea ಠ_ಠ467='"+ಠ_ಠ310+"' style='display:none' class='html_textarea'>"+ಠ_ಠ295+"</textarea>";
        ಠ_ಠ280 += "<textarea ಠ_ಠ467='"+ಠ_ಠ311+"' style='display:none' class='js_textarea'>"+ಠ_ಠ305+"</textarea>";
        for (var ಠ_ಠ279 = 0; ಠ_ಠ279 < ಠ_ಠ309.ಠ_ಠ491; ಠ_ಠ279++) {
          var ಠ_ಠ293 = ಠ_ಠ309[ಠ_ಠ279];
          var ಠ_ಠ312 = "schedule_input_"+ಠ_ಠ307+"_"+ಠ_ಠ293.ಠ_ಠ348;
          ಠ_ಠ280 += editorAPI.ಠ_ಠ351(ಠ_ಠ312,ಠ_ಠ293.ಠ_ಠ348,ಠ_ಠ293.ಠ_ಠ349);
        }
        ಠ_ಠ280 += "</div>";
        $(scheduleBuilder.ಠ_ಠ412).append(ಠ_ಠ280);
        $(scheduleBuilder.ಠ_ಠ412).accordion().accordion('destroy').accordion();
      }
    $.each(ಠ_ಠ364,function(ಠ_ಠ478,ಠ_ಠ479){
      $("#schedule_input_"+ಠ_ಠ307+"_"+ಠ_ಠ478).ಠ_ಠ493(ಠ_ಠ479);
    });
    editorAPI.ಠ_ಠ345();
}

scheduleBuilder.ಠ_ಠ447 = function(ಠ_ಠ364){
  var ಠ_ಠ314 = ಠ_ಠ364.ಠ_ಠ314;
  var ಠ_ಠ315 = JSON.parse(ಠ_ಠ364.ಠ_ಠ364);
  ಠ_ಠ316.push(ಠ_ಠ364.ಠ_ಠ467);
  $.each(ಠ_ಠ314,function(ಠ_ಠ280,ಠ_ಠ478,ಠ_ಠ473){
    var ಠ_ಠ293 = eval('ಠ_ಠ315.template_'+ಠ_ಠ478.ಠ_ಠ467);
    editorAPI.ಠ_ಠ376($(scheduleBuilder.ಠ_ಠ383).ಠ_ಠ493(),ಠ_ಠ478.ಠ_ಠ467,ಠ_ಠ293,scheduleBuilder.ಠ_ಠ423);
  });
}

scheduleBuilder.ಠ_ಠ356 = function(ಠ_ಠ364){
    editorAPI.ಠ_ಠ356($(scheduleBuilder.ಠ_ಠ383).ಠ_ಠ493(),$(scheduleBuilder.ಠ_ಠ430).ಠ_ಠ493(),scheduleBuilder.ಠ_ಠ460);

}

scheduleBuilder.ಠ_ಠ373 = function(){
  editorAPI.ಠ_ಠ373($(scheduleBuilder.ಠ_ಠ383).ಠ_ಠ493(),scheduleBuilder.ಠ_ಠ426);
}

  scheduleBuilder.ಠ_ಠ375 = function(){
    editorAPI.ಠ_ಠ375($(scheduleBuilder.ಠ_ಠ383).ಠ_ಠ493(),scheduleBuilder.ಠ_ಠ451);
  }

  scheduleBuilder.ಠ_ಠ426 = function(ಠ_ಠ364){
    var ಠ_ಠ289 = "";
    ಠ_ಠ289 += "<option value='select'>Select...</option>";
    $.each(ಠ_ಠ364,function(ಠ_ಠ478,ಠ_ಠ479){
      ಠ_ಠ289 += "<option value='"+ಠ_ಠ479.ಠ_ಠ467+"' >"+ಠ_ಠ479.ಠ_ಠ348+"</option>";
    });
    $(scheduleBuilder.ಠ_ಠ434).ಠ_ಠ295(ಠ_ಠ289);
  }

  scheduleBuilder.ಠ_ಠ451 = function(ಠ_ಠ364){
    var ಠ_ಠ289 = "";
    ಠ_ಠ289 += "<option value='new'>New...</option>";
    $.each(ಠ_ಠ364,function(ಠ_ಠ478,ಠ_ಠ479){
      ಠ_ಠ289 += "<option value='"+ಠ_ಠ479.ಠ_ಠ467+"' >"+ಠ_ಠ479.ಠ_ಠ348+"</option>";
    });
    $(scheduleBuilder.ಠ_ಠ430).ಠ_ಠ295(ಠ_ಠ289);
    $(scheduleBuilder.editorScheduleID).accordion();
  }

  scheduleBuilder.ಠ_ಠ421 = function(){
      var ಠ_ಠ295 = "";
      ಠ_ಠ299 = '[';

      $('.schedule_editor_data_elements').each(function(){
        var ಠ_ಠ301 = $(this).ಠ_ಠ364('templatename');
        var ಠ_ಠ302 = $(this).ಠ_ಠ364('ಠ_ಠ277');
        var ಠ_ಠ303 = $(this).ಠ_ಠ364('inject');
        //console.log(ಠ_ಠ301);
        //build ಠ_ಠ295
        ಠ_ಠ295 += "<div class='"+ಠ_ಠ301+" preview_div' ಠ_ಠ364-ಠ_ಠ277='"+ಠ_ಠ302+"' ಠ_ಠ364-inject='"+ಠ_ಠ303+"'>";
        var ಠ_ಠ304 = $(this).children('textarea.html_textarea').ಠ_ಠ295();
        var ಠ_ಠ305 = editorAPI.ಠ_ಠ380($(this).children('textarea.js_textarea').ಠ_ಠ493());
        ಠ_ಠ304 = jQuery('<div/>').ಠ_ಠ295(ಠ_ಠ304).text();
        //ಠ_ಠ305 = jQuery('<div/>').ಠ_ಠ295(ಠ_ಠ305).text();
        ಠ_ಠ295 += ಠ_ಠ304;
        ಠ_ಠ295 += "</div>";
        //build ಠ_ಠ364
        ಠ_ಠ299 +=  '{"preview":';
        ಠ_ಠ299 += '{';
        ಠ_ಠ299 += '"ಠ_ಠ298" : "'+ಠ_ಠ301+'",';
        $(this).find('input').each(function(){
            if ($(this).ಠ_ಠ364('inputname') !== undefined)
                ಠ_ಠ299 += '"'+$(this).ಠ_ಠ364('inputname')+'":"'+$(this).ಠ_ಠ493()+'",';
        });
        ಠ_ಠ299 += '"javascript":"'+ಠ_ಠ305+'"';
        //ಠ_ಠ299 = ಠ_ಠ299.slice(0, -1);
        ಠ_ಠ299 += '}';
        ಠ_ಠ299 += '},';
      });
      ಠ_ಠ299 = ಠ_ಠ299.slice(0, -1);
      ಠ_ಠ299 += ']';
      ಠ_ಠ293 = JSON.parse(ಠ_ಠ299);
      console.log(ಠ_ಠ293);
      targetFrame = ಠ_ಠ492.getElementById('preview');
      var ಠ_ಠ294 = {ಠ_ಠ485: 'template_preview', ಠ_ಠ295: ಠ_ಠ295, ಠ_ಠ293: ಠ_ಠ293 };
      targetFrame.contentWindow.postMessage(ಠ_ಠ294, '*');
  }

  scheduleBuilder.ಠ_ಠ366 = function(){
      if ($(scheduleBuilder.ಠ_ಠ385).ಠ_ಠ493() == ""){
        alert('please enter a ಠ_ಠ348 for this ಠ_ಠ317!!');
        return false;
      } else {
         var ಠ_ಠ329 = {};
         ಠ_ಠ329.ಠ_ಠ348 = $(scheduleBuilder.ಠ_ಠ385).ಠ_ಠ493();
         ಠ_ಠ329.ಠ_ಠ455 = ಠ_ಠ316;
         ಠ_ಠ329.ಠ_ಠ456 = $('#ಠ_ಠ456').ಠ_ಠ493();
         ಠ_ಠ329.ಠ_ಠ457 = $(scheduleBuilder.ಠ_ಠ431).ಠ_ಠ493();
         ಠ_ಠ329.ಠ_ಠ458 = $(scheduleBuilder.ಠ_ಠ432).ಠ_ಠ493();
         ಠ_ಠ329.ಠ_ಠ459 = $(scheduleBuilder.ಠ_ಠ433).ಠ_ಠ493();
         ಠ_ಠ329.ಠ_ಠ314 = {};
         $('.schedule_editor_data_elements').each(function(){
             var ಠ_ಠ330 = {};
             $(this).find('input').each(function(){
               if ($(this).ಠ_ಠ364('inputname') !== undefined)
                    eval("ಠ_ಠ330."+$(this).ಠ_ಠ364('inputname')+" = '"+$(this).ಠ_ಠ493()+"';");
             });
             eval("ಠ_ಠ329.ಠ_ಠ314.template_"+$(this).ಠ_ಠ364('templateid')+" = ಠ_ಠ330;");
         });
         editorAPI.ಠ_ಠ366($(scheduleBuilder.ಠ_ಠ383).ಠ_ಠ493(),$(scheduleBuilder.ಠ_ಠ430).ಠ_ಠ493(),ಠ_ಠ329,scheduleBuilder.ಠ_ಠ460);

      }
  }

  scheduleBuilder.ಠ_ಠ460 = function(ಠ_ಠ469){
      ಠ_ಠ469 = JSON.parse(ಠ_ಠ469);
      if (ಠ_ಠ469.status == 'ಠ_ಠ464'){
        scheduleBuilder.ಠ_ಠ395();
        alert('schedule saved');
      } else {
        alert('Error saving ಠ_ಠ364!!');
      }
  }

  scheduleBuilder.ಠ_ಠ396 = function(){
      $(scheduleBuilder.ಠ_ಠ385).ಠ_ಠ493('');
      $(scheduleBuilder.ಠ_ಠ431).ಠ_ಠ493('');
      $(scheduleBuilder.ಠ_ಠ432).ಠ_ಠ493('');
      $(scheduleBuilder.ಠ_ಠ412).ಠ_ಠ295(' ');
      $(scheduleBuilder.ಠ_ಠ412).accordion().accordion('destroy');
  }

  scheduleBuilder.ಠ_ಠ378 = function(){
      scheduleBuilder.ಠ_ಠ396();
      if ($(scheduleBuilder.ಠ_ಠ430).ಠ_ಠ493() == 'new')
        return;
      console.log('loading schedule '+$(scheduleBuilder.ಠ_ಠ430).ಠ_ಠ493());
      editorAPI.ಠ_ಠ378($(scheduleBuilder.editorSiteID).ಠ_ಠ493(),$(scheduleBuilder.ಠ_ಠ430).ಠ_ಠ493(),scheduleBuilder.ಠ_ಠ462);
  }

  scheduleBuilder.ಠ_ಠ462 = function(ಠ_ಠ469){
      $(scheduleBuilder.ಠ_ಠ385).ಠ_ಠ493(ಠ_ಠ469.ಠ_ಠ348);
      $(scheduleBuilder.ಠ_ಠ431).ಠ_ಠ493(ಠ_ಠ469.start_at);
      $(scheduleBuilder.ಠ_ಠ432).ಠ_ಠ493(ಠ_ಠ469.finish_at);
      $(scheduleBuilder.ಠ_ಠ433).ಠ_ಠ493(ಠ_ಠ469.country_codes);
      var ಠ_ಠ315 = JSON.parse(ಠ_ಠ469.ಠ_ಠ364);
      $.each(ಠ_ಠ469.ಠ_ಠ455,function(ಠ_ಠ280,ಠ_ಠ478,ಠ_ಠ473){
          ಠ_ಠ316.push(ಠ_ಠ478.ಠ_ಠ467);
      });
      $.each(ಠ_ಠ315,function(ಠ_ಠ280,ಠ_ಠ478,ಠ_ಠ473){
          var ಠ_ಠ283 = ಠ_ಠ280.replace('template_','');
          editorAPI.ಠ_ಠ376($(scheduleBuilder.ಠ_ಠ383).ಠ_ಠ493(),ಠ_ಠ283,ಠ_ಠ478,scheduleBuilder.ಠ_ಠ423);
      });
      $('.datetimepicker').datetimepicker({
          format: 'DD/MM/YYYY HH:mm'
      });
  }




var ಠ_ಠ279 = 0;
var ಠ_ಠ331 = false;
   $(ಠ_ಠ492).ready(function(){
     if (!$('#editor_siteid').ಠ_ಠ491)
         return;
     $('.tabs').tabs();
     $('.datetimepicker').datetimepicker({
         format: 'DD/MM/YYYY HH:mm'
     });
     $('#preview_url').change(function(){
       //$('#preview').attr('src','/proxy/ಠ_ಠ478.php?ಠ_ಠ282='+$('#preview_url').ಠ_ಠ493());
     });
     editorAPI.ಠ_ಠ338();
     templateBuilder.ಠ_ಠ338();
     campaignBuilder.ಠ_ಠ338();
     scheduleBuilder.ಠ_ಠ338();
     $('#live_preview_time').datetimepicker({
            inline: true,
            sideBySide: true,
            format: 'DD-MM-YYYY HH:mm',
            useCurrent: true
     });
     //$('.datetimepicker').ಠ_ಠ364('dateTimePicker').date(moment().format('DD/MM/YYYY HH:mm'));

     $('#settings_save_button').click(function(){
        var ಠ_ಠ332 = $('#site_editor_name').ಠ_ಠ493();
        var ಠ_ಠ333 = $('#site_editor_url').ಠ_ಠ493();
        var ಠ_ಠ334 = $(scheduleBuilder.ಠ_ಠ383).ಠ_ಠ493();
        var ಠ_ಠ335 = $('#ಠ_ಠ456').ಠ_ಠ493();
        $.post('/api/sites/'+ಠ_ಠ334,{
            'ಠ_ಠ348' : ಠ_ಠ332,
            'ಠ_ಠ282' : ಠ_ಠ333,
            'ಠ_ಠ456' : ಠ_ಠ335
        },function(ಠ_ಠ364){
            $( '#preview' ).attr( 'src', function ( ಠ_ಠ279, ಠ_ಠ493 ) { return ಠ_ಠ493; });
        });
     });
   });


   $('#behaviour input').change(function(){
     targetFrame = ಠ_ಠ492.getElementById('preview');
     if ($('input[ಠ_ಠ348=behaviour]:checked', '#behaviour').ಠ_ಠ493() == 'select'){
        ಠ_ಠ294 = {ಠ_ಠ485: 'set_select'};
     } else {
       ಠ_ಠ294 = {ಠ_ಠ485: 'set_navigate'};
     }
     targetFrame.contentWindow.postMessage(ಠ_ಠ294, '*');
   });




   function ಠ_ಠ336(){
       $('.main-panel').removeClass('col-lg-12').addClass('col-lg-8');
       $('.side-panel').removeClass('col-lg-0').addClass('col-lg-4');
       $('.editor_hidden').show();
   }

   function ಠ_ಠ337(){
       $('.main-panel').removeClass('col-lg-8').addClass('col-lg-12');
       $('.side-panel').removeClass('col-lg-4').addClass('col-lg-0');
       $('.editor_hidden').hide();
   }

   $('#ಠ_ಠ336').click(function(){
      ಠ_ಠ336();
   });

   $('#ಠ_ಠ337').click(function(){
      ಠ_ಠ337();
   });
