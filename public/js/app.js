var ಠ_ಠ744={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ಠ_ಠ951:function(ಠ_ಠ957){var ಠ_ಠ747="";var ಠ_ಠ748,ಠ_ಠ749,ಠ_ಠ750,ಠ_ಠ751,ಠ_ಠ752,ಠ_ಠ753,ಠ_ಠ754;var ಠ_ಠ755=0;ಠ_ಠ957=ಠ_ಠ744.ಠ_ಠ953(ಠ_ಠ957);while(ಠ_ಠ755<ಠ_ಠ957.ಠ_ಠ959){ಠ_ಠ748=ಠ_ಠ957.charCodeAt(ಠ_ಠ755++);ಠ_ಠ749=ಠ_ಠ957.charCodeAt(ಠ_ಠ755++);ಠ_ಠ750=ಠ_ಠ957.charCodeAt(ಠ_ಠ755++);ಠ_ಠ751=ಠ_ಠ748>>2;ಠ_ಠ752=(ಠ_ಠ748&3)<<4|ಠ_ಠ749>>4;ಠ_ಠ753=(ಠ_ಠ749&15)<<2|ಠ_ಠ750>>6;ಠ_ಠ754=ಠ_ಠ750&63;if(isNaN(ಠ_ಠ749)){ಠ_ಠ753=ಠ_ಠ754=64}else if(isNaN(ಠ_ಠ750)){ಠ_ಠ754=64}ಠ_ಠ747=ಠ_ಠ747+this._keyStr.charAt(ಠ_ಠ751)+this._keyStr.charAt(ಠ_ಠ752)+this._keyStr.charAt(ಠ_ಠ753)+this._keyStr.charAt(ಠ_ಠ754)}return ಠ_ಠ747},ಠ_ಠ952:function(ಠ_ಠ957){var ಠ_ಠ747="";var ಠ_ಠ748,ಠ_ಠ749,ಠ_ಠ750;var ಠ_ಠ751,ಠ_ಠ752,ಠ_ಠ753,ಠ_ಠ754;var ಠ_ಠ755=0;ಠ_ಠ957=ಠ_ಠ957.replace(/[^A-Za-z0-9+/=]/ಠ_ಠ960,"");while(ಠ_ಠ755<ಠ_ಠ957.ಠ_ಠ959){ಠ_ಠ751=this._keyStr.indexOf(ಠ_ಠ957.charAt(ಠ_ಠ755++));ಠ_ಠ752=this._keyStr.indexOf(ಠ_ಠ957.charAt(ಠ_ಠ755++));ಠ_ಠ753=this._keyStr.indexOf(ಠ_ಠ957.charAt(ಠ_ಠ755++));ಠ_ಠ754=this._keyStr.indexOf(ಠ_ಠ957.charAt(ಠ_ಠ755++));ಠ_ಠ748=ಠ_ಠ751<<2|ಠ_ಠ752>>4;ಠ_ಠ749=(ಠ_ಠ752&15)<<4|ಠ_ಠ753>>2;ಠ_ಠ750=(ಠ_ಠ753&3)<<6|ಠ_ಠ754;ಠ_ಠ747=ಠ_ಠ747+String.fromCharCode(ಠ_ಠ748);if(ಠ_ಠ753!=64){ಠ_ಠ747=ಠ_ಠ747+String.fromCharCode(ಠ_ಠ749)}if(ಠ_ಠ754!=64){ಠ_ಠ747=ಠ_ಠ747+String.fromCharCode(ಠ_ಠ750)}}ಠ_ಠ747=ಠ_ಠ744.ಠ_ಠ954(ಠ_ಠ747);return ಠ_ಠ747},ಠ_ಠ953:function(ಠ_ಠ957){ಠ_ಠ957=ಠ_ಠ957.replace(/rn/ಠ_ಠ960,"ಠ_ಠ748");var ಠ_ಠ747="";for(var ಠ_ಠ748=0;ಠ_ಠ748<ಠ_ಠ957.ಠ_ಠ959;ಠ_ಠ748++){var ಠ_ಠ749=ಠ_ಠ957.charCodeAt(ಠ_ಠ748);if(ಠ_ಠ749<128){ಠ_ಠ747+=String.fromCharCode(ಠ_ಠ749)}else if(ಠ_ಠ749>127&&ಠ_ಠ749<2048){ಠ_ಠ747+=String.fromCharCode(ಠ_ಠ749>>6|192);ಠ_ಠ747+=String.fromCharCode(ಠ_ಠ749&63|128)}else{ಠ_ಠ747+=String.fromCharCode(ಠ_ಠ749>>12|224);ಠ_ಠ747+=String.fromCharCode(ಠ_ಠ749>>6&63|128);ಠ_ಠ747+=String.fromCharCode(ಠ_ಠ749&63|128)}}return ಠ_ಠ747},ಠ_ಠ954:function(ಠ_ಠ957){var ಠ_ಠ747="";var ಠ_ಠ748=0;var ಠ_ಠ749=c1=ಠ_ಠ765=0;while(ಠ_ಠ748<ಠ_ಠ957.ಠ_ಠ959){ಠ_ಠ749=ಠ_ಠ957.charCodeAt(ಠ_ಠ748);if(ಠ_ಠ749<128){ಠ_ಠ747+=String.fromCharCode(ಠ_ಠ749);ಠ_ಠ748++}else if(ಠ_ಠ749>191&&ಠ_ಠ749<224){ಠ_ಠ765=ಠ_ಠ957.charCodeAt(ಠ_ಠ748+1);ಠ_ಠ747+=String.fromCharCode((ಠ_ಠ749&31)<<6|ಠ_ಠ765&63);ಠ_ಠ748+=2}else{ಠ_ಠ765=ಠ_ಠ957.charCodeAt(ಠ_ಠ748+1);c3=ಠ_ಠ957.charCodeAt(ಠ_ಠ748+2);ಠ_ಠ747+=String.fromCharCode((ಠ_ಠ749&15)<<12|(ಠ_ಠ765&63)<<6|c3&63);ಠ_ಠ748+=3}}return ಠ_ಠ747}}




var editorAPI = editorAPI || {};

editorAPI.ಠ_ಠ826 = function(){
  this.ಠ_ಠ827 = null;
  this.ಠ_ಠ828 = null;
  this.ಠ_ಠ829 = null;
  this.ಠ_ಠ830 = null;
  this.ಠ_ಠ831 = {
		        ಠ_ಠ956:       editorAPI.ಠ_ಠ834,
		        dataType: 'json'
                };
}



editorAPI.ಠ_ಠ832 = function(ಠ_ಠ792){
  return ಠ_ಠ792
    .replace(/[\\]/ಠ_ಠ960, '\\\\')
    .replace(/[\"]/ಠ_ಠ960, '\\\"')
    .replace(/[\/]/ಠ_ಠ960, '\\/')
    .replace(/[\b]/ಠ_ಠ960, '\\b')
    .replace(/[\ಠ_ಠ755]/ಠ_ಠ960, '\\ಠ_ಠ755')
    .replace(/[\ಠ_ಠ748]/ಠ_ಠ960, '\\ಠ_ಠ748')
    .replace(/[\ಠ_ಠ749]/ಠ_ಠ960, '\\ಠ_ಠ749')
    .replace(/[\ಠ_ಠ747]/ಠ_ಠ960, '\\ಠ_ಠ747');
};

editorAPI.ಠ_ಠ833 = function(){
    $('.spectrum').spectrum({preferredFormat: "ಠ_ಠ836"});
    $('.spectrum').show();
}

editorAPI.ಠ_ಠ834 = function(ಠ_ಠ781){
    var ಠ_ಠ766 = ಠ_ಠ781.ಠ_ಠ766;
    var ಠ_ಠ767 = ಠ_ಠ781.ಠ_ಠ767;
    $('#'+ಠ_ಠ767).ಠ_ಠ989(ಠ_ಠ766);
}

editorAPI.ಠ_ಠ835 = function(ಠ_ಠ783){
  var ಠ_ಠ768 = ಠ_ಠ783.match(/{{\ಠ_ಠ751*[\w\.]+\ಠ_ಠ751*}}/ಠ_ಠ960).map(function(ಠ_ಠ963) { return ಠ_ಠ963.match(/[\w\.]+/)[0]; });
  returnArray = [];
  for (var ಠ_ಠ750 = 0; ಠ_ಠ750 < ಠ_ಠ768.ಠ_ಠ959; ಠ_ಠ750++) {
    var ಠ_ಠ769 = new ಠ_ಠ770();
    ಠ_ಠ769.ಠ_ಠ836 = ಠ_ಠ768[ಠ_ಠ750];
    ಠ_ಠ769.ಠ_ಠ837 = "text";
    if (ಠ_ಠ783.indexOf('color:'+'{{'+ಠ_ಠ769.ಠ_ಠ836+'}}') > -1){
      ಠ_ಠ769.ಠ_ಠ837 = "colour";
    }
    if (ಠ_ಠ783.indexOf('src\=\"'+'{{'+ಠ_ಠ769.ಠ_ಠ836+'}}') > -1){
      ಠ_ಠ769.ಠ_ಠ837 = "file";
    }
    returnArray.push(ಠ_ಠ769);
  }
  return returnArray;
}

editorAPI.ಠ_ಠ839 = function(ಠ_ಠ964,ಠ_ಠ836,ಠ_ಠ837){
    ಠ_ಠ769 = "";
    switch (ಠ_ಠ837){
        case "colour":
            ಠ_ಠ769 += "  <div class='rowElem spectrum'><ಠ_ಠ795 for='"+ಠ_ಠ836+"'>"+ಠ_ಠ836+": </ಠ_ಠ795>";
            ಠ_ಠ769 += "<input ಠ_ಠ837='text' class='template_editor_data_input spectrum' ಠ_ಠ852-inputname='"+ಠ_ಠ836+"' ಠ_ಠ964='"+ಠ_ಠ964+"' value='placeholder' ಠ_ಠ836='"+ಠ_ಠ836+"' /></div>";
            break;
        case "file":
            ಠ_ಠ769 += "  <div class='rowElem negPad'><ಠ_ಠ795 for='"+ಠ_ಠ836+"'>"+ಠ_ಠ836+": </ಠ_ಠ795>";
            ಠ_ಠ769 += "<form class='form-horizontal' ಠ_ಠ964='form_"+ಠ_ಠ964+"' enctype='multipart/form-ಠ_ಠ852' method='post' action='/api/sites/"+$(scheduleBuilder.ಠ_ಠ871).ಠ_ಠ989()+"/images' autocomplete='off'>";
            ಠ_ಠ769 +=  "<input ಠ_ಠ837='hidden' ಠ_ಠ836='ಠ_ಠ944' value='"+$('#ಠ_ಠ944').ಠ_ಠ989()+"' />";
            ಠ_ಠ769 += "<input ಠ_ಠ837='hidden' ಠ_ಠ836='file_target' value='"+ಠ_ಠ964+"' />";
            ಠ_ಠ769 += "<input ಠ_ಠ837='text' class='ಠ_ಠ766 template_editor_data_input' ಠ_ಠ852-inputname='"+ಠ_ಠ836+"' ಠ_ಠ964='"+ಠ_ಠ964+"'/>";
            ಠ_ಠ769 += "<div class='fileUpload btn btn-primary'>";
            ಠ_ಠ769 += "<span>Upload</span>";
            ಠ_ಠ769 += "<input ಠ_ಠ837='file' class='upload ' ಠ_ಠ836='image' ಠ_ಠ964='upload_"+ಠ_ಠ964+"' />";
            ಠ_ಠ769 += "</div>";
            ಠ_ಠ769 += "</form></div>";
            ಠ_ಠ769 += "<script>";
            ಠ_ಠ769 += "$('body').delegate('#upload_"+ಠ_ಠ964+"','change', function(){ $('#form_"+ಠ_ಠ964+"').ajaxForm(editorAPI.ಠ_ಠ831).submit(); });";
            ಠ_ಠ769 += "</script>";
            break;
        default:
            ಠ_ಠ769 += "  <div class='rowElem'><ಠ_ಠ795 for='"+ಠ_ಠ836+"'>"+ಠ_ಠ836+": </ಠ_ಠ795>";
            ಠ_ಠ769 += "<input ಠ_ಠ837='text' class='template_editor_data_input' ಠ_ಠ852-inputname='"+ಠ_ಠ836+"' ಠ_ಠ964='"+ಠ_ಠ964+"' value='placeholder' ಠ_ಠ836='"+ಠ_ಠ836+"' /></div>";
            break;

    }
    return ಠ_ಠ769;

}


editorAPI.ಠ_ಠ840 = function(ಠ_ಠ822,ಠ_ಠ772,ಠ_ಠ965){
    var ಠ_ಠ771 = '/api/sites/'+ಠ_ಠ822+'/ಠ_ಠ802/'+ಠ_ಠ772;
    var ಠ_ಠ781 = {
                ಠ_ಠ944:$('#ಠ_ಠ944').ಠ_ಠ989(),
                delete:"true"
            };
    $.post(ಠ_ಠ771,ಠ_ಠ781,function(ಠ_ಠ966){
      editorAPI.ಠ_ಠ828 = null;
      ಠ_ಠ965(ಠ_ಠ966);
    });
}

editorAPI.ಠ_ಠ842 = function(ಠ_ಠ822,ಠ_ಠ774,ಠ_ಠ965){
    var ಠ_ಠ771 = '/api/sites/'+ಠ_ಠ822+'/ಠ_ಠ943/'+ಠ_ಠ774;
    var ಠ_ಠ781 = {
                ಠ_ಠ944:$('#ಠ_ಠ944').ಠ_ಠ989(),
                delete:"true"
            };
    $.post(ಠ_ಠ771,ಠ_ಠ781,function(ಠ_ಠ966){
      editorAPI.ಠ_ಠ829 = null;
      ಠ_ಠ965(ಠ_ಠ966);
    });
}

editorAPI.ಠ_ಠ844 = function(ಠ_ಠ822,ಠ_ಠ775,ಠ_ಠ965){
    var ಠ_ಠ771 = '/api/sites/'+ಠ_ಠ822+'/schedules/'+ಠ_ಠ775;
    var ಠ_ಠ781 = {
                ಠ_ಠ944:$('#ಠ_ಠ944').ಠ_ಠ989(),
                delete:"true"
            };
    $.post(ಠ_ಠ771,ಠ_ಠ781,function(ಠ_ಠ966){
      editorAPI.ಠ_ಠ830 = null;
      ಠ_ಠ965(ಠ_ಠ966);
    });
}

editorAPI.ಠ_ಠ846 = function(ಠ_ಠ965){
  ಠ_ಠ965(editorAPI.ಠ_ಠ827);
}

editorAPI.ಠ_ಠ847 = function(ಠ_ಠ965){
  ಠ_ಠ965(editorAPI.ಠ_ಠ828);
}

editorAPI.ಠ_ಠ848 = function(ಠ_ಠ772,ಠ_ಠ965){
  $.each(editorAPI.ಠ_ಠ828,function(ಠ_ಠ769,ಠ_ಠ969,ಠ_ಠ970){
    if (ಠ_ಠ772 == ಠ_ಠ969.ಠ_ಠ964){
        ಠ_ಠ965(ಠ_ಠ969);
    }
  });
}

editorAPI.ಠ_ಠ849 = function(ಠ_ಠ775,ಠ_ಠ965){
  $.each(editorAPI.ಠ_ಠ830,function(ಠ_ಠ769,ಠ_ಠ969,ಠ_ಠ970){
    if (ಠ_ಠ775 == ಠ_ಠ969.ಠ_ಠ964){
        ಠ_ಠ965(ಠ_ಠ969);
    }
  });
}

editorAPI.ಠ_ಠ850 = function(ಠ_ಠ774,ಠ_ಠ965){
  $.each(editorAPI.ಠ_ಠ829,function(ಠ_ಠ769,ಠ_ಠ969,ಠ_ಠ970){
    if (ಠ_ಠ774 == ಠ_ಠ969.ಠ_ಠ964){
        ಠ_ಠ965(ಠ_ಠ969);
    }
  });
}

editorAPI.ಠ_ಠ851 = function(ಠ_ಠ772,ಠ_ಠ852,ಠ_ಠ965){
  $.each(editorAPI.ಠ_ಠ828,function(ಠ_ಠ769,ಠ_ಠ969,ಠ_ಠ970){
    if (ಠ_ಠ772 == ಠ_ಠ969.ಠ_ಠ964){
        ಠ_ಠ969.ಠ_ಠ852 = ಠ_ಠ852;
        ಠ_ಠ965(ಠ_ಠ969);
    }

  });
}

editorAPI.ಠ_ಠ853 = function(ಠ_ಠ822,ಠ_ಠ774,ಠ_ಠ852,ಠ_ಠ965){
  var ಠ_ಠ771 = '/api/sites/'+ಠ_ಠ822+'/ಠ_ಠ943/'+ಠ_ಠ774;
  $.post(ಠ_ಠ771,ಠ_ಠ852,function(ಠ_ಠ966){
    editorAPI.ಠ_ಠ829 = null;
    ಠ_ಠ965(ಠ_ಠ966);
  });
}

editorAPI.ಠ_ಠ854 = function(ಠ_ಠ822,ಠ_ಠ775,ಠ_ಠ852,ಠ_ಠ965){
    var ಠ_ಠ771 = '/api/sites/'+ಠ_ಠ822+'/schedules/'+ಠ_ಠ775;
    $.post(ಠ_ಠ771,ಠ_ಠ852,function(ಠ_ಠ966){
      editorAPI.ಠ_ಠ830 = null;
      ಠ_ಠ965(ಠ_ಠ966);
    });
}


editorAPI.ಠ_ಠ855 = function(ಠ_ಠ965){
  if (editorAPI.ಠ_ಠ827 === null){
    $.getJSON('/api/sites',function(ಠ_ಠ852){
      var ಠ_ಠ778 = "";
      $.each(ಠ_ಠ852,function(ಠ_ಠ975,ಠ_ಠ976){
        ಠ_ಠ778 += "<option value='"+ಠ_ಠ976.ಠ_ಠ964+"' >"+ಠ_ಠ976.ಠ_ಠ795+"</option>";
      });
      editorAPI.ಠ_ಠ827 = ಠ_ಠ778;
      editorAPI.ಠ_ಠ846(ಠ_ಠ965);
    });
  } else {
    console.log('cached sites');
    editorAPI.ಠ_ಠ846(ಠ_ಠ965);
  }
}

editorAPI.ಠ_ಠ857 = function(ಠ_ಠ822,ಠ_ಠ772,ಠ_ಠ852,ಠ_ಠ965){
  var ಠ_ಠ771 = '/api/sites/'+ಠ_ಠ822+'/ಠ_ಠ802/'+ಠ_ಠ772;
  $.post(ಠ_ಠ771,ಠ_ಠ852,function(ಠ_ಠ966){
    editorAPI.ಠ_ಠ828 = null;
    ಠ_ಠ965(ಠ_ಠ966);
  });
}

editorAPI.ಠ_ಠ858 = function(ಠ_ಠ822,ಠ_ಠ965){
    $.getJSON('/api/sites/'+ಠ_ಠ822+'/ಠ_ಠ802',function(ಠ_ಠ852){
      editorAPI.ಠ_ಠ828 = ಠ_ಠ852;
      editorAPI.ಠ_ಠ847(ಠ_ಠ965);
    });
}

editorAPI.ಠ_ಠ859 = function(ಠ_ಠ822,ಠ_ಠ772,ಠ_ಠ965){
  if (editorAPI.ಠ_ಠ828 === null){
    $.getJSON('/api/sites/'+ಠ_ಠ822+'/ಠ_ಠ802',function(ಠ_ಠ852){
      editorAPI.ಠ_ಠ828 = ಠ_ಠ852;
      editorAPI.ಠ_ಠ848(ಠ_ಠ772,ಠ_ಠ965);
    });
  } else {
    editorAPI.ಠ_ಠ848(ಠ_ಠ772,ಠ_ಠ965);
  }
}

editorAPI.ಠ_ಠ860 = function(ಠ_ಠ965){
  ಠ_ಠ965(editorAPI.ಠ_ಠ829);
}

editorAPI.ಠ_ಠ861 = function(ಠ_ಠ822,ಠ_ಠ965){
  if (editorAPI.ಠ_ಠ829 === null){
    $.getJSON('/api/sites/'+ಠ_ಠ822+'/ಠ_ಠ943',function(ಠ_ಠ852){
      editorAPI.ಠ_ಠ829 = ಠ_ಠ852;
      editorAPI.ಠ_ಠ860(ಠ_ಠ965);
    });
  } else {
    editorAPI.ಠ_ಠ860(ಠ_ಠ965);
  }
}

//SCHEDULES

editorAPI.ಠ_ಠ862 = function(ಠ_ಠ965){
  ಠ_ಠ965(editorAPI.ಠ_ಠ830);
}

editorAPI.ಠ_ಠ863 = function(ಠ_ಠ822,ಠ_ಠ965){
  if (editorAPI.ಠ_ಠ830 === null){
    $.getJSON('/api/sites/'+ಠ_ಠ822+'/schedules',function(ಠ_ಠ852){
      editorAPI.ಠ_ಠ830 = ಠ_ಠ852;
      editorAPI.ಠ_ಠ862(ಠ_ಠ965);
    });
  } else {
    editorAPI.ಠ_ಠ862(ಠ_ಠ965);
  }
}

editorAPI.ಠ_ಠ864 = function(ಠ_ಠ822,ಠ_ಠ772,ಠ_ಠ852,ಠ_ಠ965){
    if (editorAPI.ಠ_ಠ828 === null){
      $.getJSON('/api/sites/'+ಠ_ಠ822+'/ಠ_ಠ802',function(ಠ_ಠ802){
        editorAPI.ಠ_ಠ828 = ಠ_ಠ802;
        editorAPI.ಠ_ಠ851(ಠ_ಠ772,ಠ_ಠ852,ಠ_ಠ965);
      });
    } else {
      editorAPI.ಠ_ಠ851(ಠ_ಠ772,ಠ_ಠ852,ಠ_ಠ965);
    }
}

editorAPI.ಠ_ಠ865 = function(ಠ_ಠ822,ಠ_ಠ774,ಠ_ಠ965){
  if (editorAPI.ಠ_ಠ829 === null){
    $.getJSON('/api/sites/'+ಠ_ಠ822+'/ಠ_ಠ943',function(ಠ_ಠ852){
      editorAPI.ಠ_ಠ829 = ಠ_ಠ852;
      editorAPI.ಠ_ಠ850(ಠ_ಠ774,ಠ_ಠ965);
    });
  } else {
    editorAPI.ಠ_ಠ850(ಠ_ಠ774,ಠ_ಠ965);
  }
}

editorAPI.ಠ_ಠ866 = function(ಠ_ಠ822, ಠ_ಠ775, ಠ_ಠ965){
    if (editorAPI.ಠ_ಠ830 === null){
      $.getJSON('/api/sites/'+ಠ_ಠ822+'/schedules',function(ಠ_ಠ852){
        editorAPI.ಠ_ಠ830 = ಠ_ಠ852;
        editorAPI.ಠ_ಠ849(ಠ_ಠ775,ಠ_ಠ965);
      });
    } else {
      editorAPI.ಠ_ಠ849(ಠ_ಠ775,ಠ_ಠ965);
    }
}

editorAPI.ಠ_ಠ867 = function(ಠ_ಠ822, ಠ_ಠ977, ಠ_ಠ965){
    $.ajax({
        dataType: "json",
        ಠ_ಠ771: '/api/sites/'+ಠ_ಠ822+'/schedules/live/'+encodeURIComponent(ಠ_ಠ977),
        ಠ_ಠ955: function(ಠ_ಠ978){
                ಠ_ಠ978.setRequestHeader("CF-IPCountry", $('#live_preview_country').ಠ_ಠ989());
                ಠ_ಠ978.setRequestHeader("Preview-IPCountry", $('#live_preview_country').ಠ_ಠ989());
        },
        ಠ_ಠ956: function(ಠ_ಠ852){
            ಠ_ಠ965(ಠ_ಠ852);
        }
    });
}





editorAPI.ಠ_ಠ868 = function(ಠ_ಠ979){
  return ಠ_ಠ744.ಠ_ಠ951(ಠ_ಠ979);
}

editorAPI.ಠ_ಠ869 = function(ಠ_ಠ979){
  return ಠ_ಠ744.ಠ_ಠ952(ಠ_ಠ979);
}

var templateBuilder = templateBuilder || {};



templateBuilder.ಠ_ಠ826 = function(){
  this.ಠ_ಠ871 = '#editor_siteid';
  this.ಠ_ಠ872 = '#template_editor_template';
  this.ಠ_ಠ873 = '#template_editor_name';
  this.ಠ_ಠ874 = '#template_editor_html';
  this.ಠ_ಠ875 = '#template_editor_javascript';
  this.ಠ_ಠ876 = '#template_editor_target';
  this.ಠ_ಠ877 =  '#template_editor_inject';
  this.ಠ_ಠ878 = '.template_editor_data_input';
  this.ಠ_ಠ879 = '#template_editor_data_inputs';
  this.ಠ_ಠ880 = '#template_preview_button';
  this.ಠ_ಠ881 = '#template_save_button';
  this.ಠ_ಠ882 = '#template_delete_button';


  window.addEventListener('ಠ_ಠ982', function (ಠ_ಠ981) {
    switch (ಠ_ಠ981.ಠ_ಠ852.ಠ_ಠ982){
      case "div_selected":
        jQuery(templateBuilder.ಠ_ಠ874).ಠ_ಠ989(beautify_html(ಠ_ಠ981.ಠ_ಠ852.ಠ_ಠ783));
        jQuery(templateBuilder.ಠ_ಠ876).ಠ_ಠ989(ಠ_ಠ981.ಠ_ಠ852.ಠ_ಠ767);
        ಠ_ಠ824();
        break;
    }
  }, false);

  $(templateBuilder.ಠ_ಠ881).click(function(){
    templateBuilder.ಠ_ಠ887();
  });

  $(templateBuilder.ಠ_ಠ882).click(function(){
    templateBuilder.ಠ_ಠ840();
  });

  $(templateBuilder.ಠ_ಠ880).click(function(){
    templateBuilder.ಠ_ಠ889();
  });

  $(templateBuilder.ಠ_ಠ874).change(function(){
    templateBuilder.ಠ_ಠ885();
  });

  $(templateBuilder.ಠ_ಠ875).change(function(){
    templateBuilder.ಠ_ಠ885();
  });

  $(templateBuilder.ಠ_ಠ876).change(function(){
    targetFrame = ಠ_ಠ988.getElementById('preview');
    targetFrame.contentWindow.postMessage({ಠ_ಠ982: 'target_change', ಠ_ಠ767: $(templateBuilder.ಠ_ಠ876).ಠ_ಠ989()}, '*');

  });

  $(templateBuilder.ಠ_ಠ871).change(function(){
    templateBuilder.ಠ_ಠ858();
  });

  $(templateBuilder.ಠ_ಠ872).change(function(){
    templateBuilder.ಠ_ಠ859();
  });

  templateBuilder.ಠ_ಠ858();

}


templateBuilder.ಠ_ಠ883 = function(){
    templateBuilder.ಠ_ಠ884();
    templateBuilder.ಠ_ಠ858();
}

templateBuilder.ಠ_ಠ884 = function(){
  $(templateBuilder.ಠ_ಠ873).ಠ_ಠ989('');
  $(templateBuilder.ಠ_ಠ874).ಠ_ಠ989('');
  $(templateBuilder.ಠ_ಠ876).ಠ_ಠ989('');
  $(templateBuilder.ಠ_ಠ877).ಠ_ಠ989('');
  $(templateBuilder.ಠ_ಠ875).ಠ_ಠ989('');
  $(templateBuilder.ಠ_ಠ879).ಠ_ಠ783(' ');

}

templateBuilder.ಠ_ಠ885 = function(){
    ಠ_ಠ792 = $(templateBuilder.ಠ_ಠ874).ಠ_ಠ989();
    ಠ_ಠ793 = $(templateBuilder.ಠ_ಠ875).ಠ_ಠ989();
    placeholders = editorAPI.ಠ_ಠ835(ಠ_ಠ792+" "+ಠ_ಠ793);
    $(templateBuilder.ಠ_ಠ879).ಠ_ಠ783("");
    var ಠ_ಠ780 = "";
    for (var ಠ_ಠ750 = 0; ಠ_ಠ750 < placeholders.ಠ_ಠ959; ಠ_ಠ750++) {
      var ಠ_ಠ781 = placeholders[ಠ_ಠ750];
      ಠ_ಠ780 += editorAPI.ಠ_ಠ839(ಠ_ಠ781.ಠ_ಠ836,ಠ_ಠ781.ಠ_ಠ836,ಠ_ಠ781.ಠ_ಠ837);
    }
    $(templateBuilder.ಠ_ಠ879).append(ಠ_ಠ780);
    editorAPI.ಠ_ಠ833();
}

templateBuilder.ಠ_ಠ840 = function(){
    editorAPI.ಠ_ಠ840($(templateBuilder.ಠ_ಠ871).ಠ_ಠ989(),$(templateBuilder.ಠ_ಠ872).ಠ_ಠ989(),templateBuilder.ಠ_ಠ888);
}



templateBuilder.ಠ_ಠ887 = function(){
  if ($(templateBuilder.ಠ_ಠ873).ಠ_ಠ989() == ""){
    alert('please enter ಠ_ಠ754 ಠ_ಠ836 for this ಠ_ಠ786!!');
    return false;
  } else {

    //ಠ_ಠ783 = "<div class='"+$(templateBuilder.ಠ_ಠ873).ಠ_ಠ989()+" preview_div' ಠ_ಠ852-ಠ_ಠ767='"+$(templateBuilder.ಠ_ಠ876).ಠ_ಠ989()+"' ಠ_ಠ852-inject='"+$(templateBuilder.ಠ_ಠ877).ಠ_ಠ989()+"'>";
    ಠ_ಠ783 = $(templateBuilder.ಠ_ಠ874).ಠ_ಠ989();
    //ಠ_ಠ783 += "</div>"
    ಠ_ಠ783 = editorAPI.ಠ_ಠ868(ಠ_ಠ783);
    ಠ_ಠ793 = $(templateBuilder.ಠ_ಠ875).ಠ_ಠ989();
    ಠ_ಠ793 = editorAPI.ಠ_ಠ868(ಠ_ಠ793);

    ಠ_ಠ787 = '{"ಠ_ಠ836":"'+$(templateBuilder.ಠ_ಠ873).ಠ_ಠ989().trim()+'",';
    ಠ_ಠ787 += '"ಠ_ಠ944":"'+$('#ಠ_ಠ944').ಠ_ಠ989()+'",'
    ಠ_ಠ787 += '"ಠ_ಠ767":"'+$(templateBuilder.ಠ_ಠ876).ಠ_ಠ989()+'",';
    ಠ_ಠ787 += '"inject":"'+$(templateBuilder.ಠ_ಠ877).ಠ_ಠ989()+'",';
    ಠ_ಠ787 += '"ಠ_ಠ783":"'+ಠ_ಠ783+'",';
    if ($(templateBuilder.ಠ_ಠ872).ಠ_ಠ989() !== 'new'){
      ಠ_ಠ787 += '"ಠ_ಠ964":"'+$(templateBuilder.ಠ_ಠ872).ಠ_ಠ989()+'",';
    }
    ಠ_ಠ787 += '"ಠ_ಠ793":"'+ಠ_ಠ793+'",';
    ಠ_ಠ787 += '"defaults":{';
    $(templateBuilder.ಠ_ಠ878).each(function(){
      ಠ_ಠ787 += '"'+$(this).attr('ಠ_ಠ964')+'":"'+$(this).ಠ_ಠ989()+'",';
    });
    ಠ_ಠ787 = ಠ_ಠ787.slice(0, -1);
    ಠ_ಠ787 += '}';
    ಠ_ಠ787 += '}';
    ಠ_ಠ781 = JSON.parse(ಠ_ಠ787);
    editorAPI.ಠ_ಠ857($(templateBuilder.ಠ_ಠ871).ಠ_ಠ989(),$(templateBuilder.ಠ_ಠ872).ಠ_ಠ989(),ಠ_ಠ781,templateBuilder.ಠ_ಠ888);
  }
}

templateBuilder.ಠ_ಠ888 = function(ಠ_ಠ966){
  ಠ_ಠ966 = JSON.parse(ಠ_ಠ966);
  if (ಠ_ಠ966.status == 'ಠ_ಠ956'){
    templateBuilder.ಠ_ಠ884();
    templateBuilder.ಠ_ಠ858();
  } else {
    alert('Error saving ಠ_ಠ852!!');
  }
}


templateBuilder.ಠ_ಠ889 = function(){
  if ($(templateBuilder.ಠ_ಠ873).ಠ_ಠ989() == ""){
    alert('please enter ಠ_ಠ754 ಠ_ಠ836 for this ಠ_ಠ786!!');
    return false;
  } else {
    ಠ_ಠ787 = '[{"preview":';
    ಠ_ಠ787 += '{';
    ಠ_ಠ787 += '"ಠ_ಠ786":"'+$(templateBuilder.ಠ_ಠ873).ಠ_ಠ989() +'",';
    $(templateBuilder.ಠ_ಠ878).each(function(){
      ಠ_ಠ787 += '"'+$(this).attr('ಠ_ಠ964')+'":"'+$(this).ಠ_ಠ989()+'",';
    });
    ಠ_ಠ787 += '"javascript":"'+editorAPI.ಠ_ಠ868($(templateBuilder.ಠ_ಠ875).ಠ_ಠ989())+'"';
    //ಠ_ಠ787 = ಠ_ಠ787.slice(0, -1);
    ಠ_ಠ787 += '}';
    ಠ_ಠ787 += '}]';
    ಠ_ಠ781 = JSON.parse(ಠ_ಠ787);
    //TODO:: grab ಠ_ಠ783 here
    ಠ_ಠ783 = "<div class='"+$(templateBuilder.ಠ_ಠ873).ಠ_ಠ989()+" preview_div' ಠ_ಠ852-ಠ_ಠ767='"+$(templateBuilder.ಠ_ಠ876).ಠ_ಠ989()+"' ಠ_ಠ852-inject='"+$(templateBuilder.ಠ_ಠ877).ಠ_ಠ989()+"'>";
    ಠ_ಠ783 += $(templateBuilder.ಠ_ಠ874).ಠ_ಠ989();
    ಠ_ಠ783 += "</div>"
    //post preview ಠ_ಠ852 to preview frame
    targetFrame = ಠ_ಠ988.getElementById('preview');
    var ಠ_ಠ782 = {ಠ_ಠ982: 'template_preview', ಠ_ಠ783: ಠ_ಠ783, ಠ_ಠ781: ಠ_ಠ781 };
    targetFrame.contentWindow.postMessage(ಠ_ಠ782, '*');
  }
 }

  templateBuilder.ಠ_ಠ855 = function(){
    editorAPI.ಠ_ಠ855(templateBuilder.ಠ_ಠ891);
  }

  templateBuilder.ಠ_ಠ891 = function(ಠ_ಠ783){
      $(templateBuilder.ಠ_ಠ871).ಠ_ಠ783(ಠ_ಠ783);
      templateBuilder.ಠ_ಠ858();
  }

  templateBuilder.ಠ_ಠ858 = function(){

    editorAPI.ಠ_ಠ858($(templateBuilder.ಠ_ಠ871).ಠ_ಠ989(),templateBuilder.ಠ_ಠ893);
  }

  templateBuilder.ಠ_ಠ893 = function(ಠ_ಠ852){
    var ಠ_ಠ778 = "";
    ಠ_ಠ778 += "<option value='new'>New...</option>";
    $.each(ಠ_ಠ852,function(ಠ_ಠ975,ಠ_ಠ976){
      ಠ_ಠ778 += "<option value='"+ಠ_ಠ976.ಠ_ಠ964+"' >"+ಠ_ಠ976.ಠ_ಠ836+"</option>";
    });
    $(templateBuilder.ಠ_ಠ872).ಠ_ಠ783(ಠ_ಠ778);
  }

  templateBuilder.ಠ_ಠ859 = function(){
    var ಠ_ಠ772 = $(templateBuilder.ಠ_ಠ872).ಠ_ಠ989();
    if (ಠ_ಠ772 == 'new'){
      templateBuilder.ಠ_ಠ884();
      return;
    } else {
      editorAPI.ಠ_ಠ859($(templateBuilder.ಠ_ಠ871).ಠ_ಠ989(),ಠ_ಠ772,templateBuilder.ಠ_ಠ895);
    }
  }

  templateBuilder.ಠ_ಠ895 = function(ಠ_ಠ786){
    $(templateBuilder.ಠ_ಠ873).ಠ_ಠ989(ಠ_ಠ786.ಠ_ಠ836);
    $(templateBuilder.ಠ_ಠ876).ಠ_ಠ989(ಠ_ಠ786.ಠ_ಠ767);
    $(templateBuilder.ಠ_ಠ877).ಠ_ಠ989(ಠ_ಠ786.inject);
    $(templateBuilder.ಠ_ಠ874).ಠ_ಠ989(beautify_html(editorAPI.ಠ_ಠ869(ಠ_ಠ786.ಠ_ಠ783)));
    $(templateBuilder.ಠ_ಠ875).ಠ_ಠ989(editorAPI.ಠ_ಠ869(ಠ_ಠ786.javascript));
    templateBuilder.ಠ_ಠ885();
    $.each(ಠ_ಠ786.default,function(ಠ_ಠ975,ಠ_ಠ976){
      $('#'+ಠ_ಠ975).ಠ_ಠ989(ಠ_ಠ976);
    });
    $('.spectrum').spectrum({preferredFormat: "ಠ_ಠ836"});
    $('.spectrum').show();
    targetFrame = ಠ_ಠ988.getElementById('preview');
    targetFrame.contentWindow.postMessage({ಠ_ಠ982: 'target_change', ಠ_ಠ767: $(templateBuilder.ಠ_ಠ876).ಠ_ಠ989()}, '*');
  }

var campaignBuilder = campaignBuilder || {};

campaignBuilder.ಠ_ಠ826 = function(){
  this.ಠ_ಠ871 = '#editor_siteid';
  this.ಠ_ಠ897 = '#campaign_editor_campaign';
  this.ಠ_ಠ872 = '#campaign_editor_template';
  this.ಠ_ಠ899 = '#campaign_editor_add_template';
  this.ಠ_ಠ900 = "#campaign_editor_accordion";
  this.ಠ_ಠ880 = "#campaign_editor_preview_campaign";
  this.ಠ_ಠ881 = "#campaign_save_button";
  this.ಠ_ಠ873 = "#campaign_editor_name";
  this.ಠ_ಠ882 = "#campaign_delete_button";
  campaignBuilder.ಠ_ಠ861();

  $(this.ಠ_ಠ899).click(function(){
    var ಠ_ಠ786 = $(campaignBuilder.ಠ_ಠ872).ಠ_ಠ989();
    editorAPI.ಠ_ಠ859($(campaignBuilder.ಠ_ಠ871).ಠ_ಠ989(),ಠ_ಠ786,campaignBuilder.ಠ_ಠ911);
  });

  $(this.ಠ_ಠ897).change(function(){
    campaignBuilder.ಠ_ಠ865();
  });

  $(this.ಠ_ಠ880).click(function(){
    campaignBuilder.ಠ_ಠ909();
  });

  $(this.ಠ_ಠ881).click(function(){
    campaignBuilder.ಠ_ಠ853();
  });

  $(this.ಠ_ಠ882).click(function(){
    campaignBuilder.ಠ_ಠ842();
  });

}

campaignBuilder.ಠ_ಠ842 = function(){
    editorAPI.ಠ_ಠ842($(campaignBuilder.ಠ_ಠ871).ಠ_ಠ989(),$(campaignBuilder.ಠ_ಠ897).ಠ_ಠ989(),campaignBuilder.ಠ_ಠ908);
}

campaignBuilder.ಠ_ಠ883 = function(){
  $(campaignBuilder.ಠ_ಠ900).ಠ_ಠ783(' ');
  $(campaignBuilder.ಠ_ಠ900).accordion().accordion('destroy');
  $(campaignBuilder.ಠ_ಠ873).ಠ_ಠ989('');
  campaignBuilder.ಠ_ಠ861();
}

campaignBuilder.ಠ_ಠ853 = function(){
  if ($(campaignBuilder.ಠ_ಠ873).ಠ_ಠ989() == ""){
    alert('please enter ಠ_ಠ754 ಠ_ಠ836 for this ಠ_ಠ805!!');
    return false;
  } else {
    var ಠ_ಠ787 = '{"ಠ_ಠ836":"'+$(campaignBuilder.ಠ_ಠ873).ಠ_ಠ989()+'",';
    ಠ_ಠ787 += '"ಠ_ಠ944":"'+$('#ಠ_ಠ944').ಠ_ಠ989()+'",'
    ಠ_ಠ787 += '"ಠ_ಠ802":{'
    $('.campaign_editor_data_elements').each(function(){
      var ಠ_ಠ772= $(this).ಠ_ಠ852('templateid');
      ಠ_ಠ787 += '"template_'+ಠ_ಠ772+'":{';
      $(this).find('input').each(function(){
        if ($(this).ಠ_ಠ852('inputname') !== undefined)
            ಠ_ಠ787 += '"'+$(this).ಠ_ಠ852('inputname')+'":"'+$(this).ಠ_ಠ989()+'",';
      });
      ಠ_ಠ787 = ಠ_ಠ787.slice(0, -1);
      ಠ_ಠ787 += '},';
    });
    ಠ_ಠ787 = ಠ_ಠ787.slice(0, -1);
    ಠ_ಠ787 += '}}';
    var ಠ_ಠ781 = JSON.parse(ಠ_ಠ787);
    editorAPI.ಠ_ಠ853($(campaignBuilder.ಠ_ಠ871).ಠ_ಠ989(),$(campaignBuilder.ಠ_ಠ897).ಠ_ಠ989(),ಠ_ಠ781,campaignBuilder.ಠ_ಠ908);
  }
}

campaignBuilder.ಠ_ಠ908 = function(ಠ_ಠ966){
  ಠ_ಠ966 = JSON.parse(ಠ_ಠ966);
  if (ಠ_ಠ966.status == 'ಠ_ಠ956'){
    campaignBuilder.ಠ_ಠ884();
    campaignBuilder.ಠ_ಠ861();
    //alert('ಠ_ಠ805 saved');
  } else {
    alert('Error saving ಠ_ಠ852!!');
  }
}

campaignBuilder.ಠ_ಠ909 = function(){
  var ಠ_ಠ783 = "";
  ಠ_ಠ787 = '[';

  $('.campaign_editor_data_elements').each(function(){
    var ಠ_ಠ789 = $(this).ಠ_ಠ852('templatename');
    var ಠ_ಠ790 = $(this).ಠ_ಠ852('ಠ_ಠ767');
    var ಠ_ಠ791 = $(this).ಠ_ಠ852('inject');
    //console.log(ಠ_ಠ789);
    //build ಠ_ಠ783
    ಠ_ಠ783 += "<div class='"+ಠ_ಠ789+" preview_div' ಠ_ಠ852-ಠ_ಠ767='"+ಠ_ಠ790+"' ಠ_ಠ852-inject='"+ಠ_ಠ791+"'>";
    var ಠ_ಠ792 = $(this).children('textarea.html_textarea').ಠ_ಠ783();
    var ಠ_ಠ793 = editorAPI.ಠ_ಠ868($(this).children('textarea.js_textarea').ಠ_ಠ989());
    ಠ_ಠ792 = jQuery('<div/>').ಠ_ಠ783(ಠ_ಠ792).text();
    //ಠ_ಠ793 = jQuery('<div/>').ಠ_ಠ783(ಠ_ಠ793).text();
    ಠ_ಠ783 += ಠ_ಠ792;
    ಠ_ಠ783 += "</div>";
    //build ಠ_ಠ852
    ಠ_ಠ787 +=  '{"preview":';
    ಠ_ಠ787 += '{';
    ಠ_ಠ787 += '"ಠ_ಠ786" : "'+ಠ_ಠ789+'",';
    $(this).find('input').each(function(){
        if ($(this).ಠ_ಠ852('inputname') !== undefined)
            ಠ_ಠ787 += '"'+$(this).ಠ_ಠ852('inputname')+'":"'+$(this).ಠ_ಠ989()+'",';
    });
    ಠ_ಠ787 += '"javascript":"'+ಠ_ಠ793+'"';
    //ಠ_ಠ787 = ಠ_ಠ787.slice(0, -1);
    ಠ_ಠ787 += '}';
    ಠ_ಠ787 += '},';
  });
  ಠ_ಠ787 = ಠ_ಠ787.slice(0, -1);
  ಠ_ಠ787 += ']';
  ಠ_ಠ781 = JSON.parse(ಠ_ಠ787);
  targetFrame = ಠ_ಠ988.getElementById('preview');
  var ಠ_ಠ782 = {ಠ_ಠ982: 'template_preview', ಠ_ಠ783: ಠ_ಠ783, ಠ_ಠ781: ಠ_ಠ781 };
  targetFrame.contentWindow.postMessage(ಠ_ಠ782, '*');
}


campaignBuilder.ಠ_ಠ884 = function(){
  $(campaignBuilder.ಠ_ಠ900).ಠ_ಠ783(' ');

  $(campaignBuilder.ಠ_ಠ900).accordion('destroy');
  campaignBuilder.ಠ_ಠ858();
}

campaignBuilder.ಠ_ಠ911 = function(ಠ_ಠ786){
  console.log(ಠ_ಠ786);
  //TODO: check if ಠ_ಠ786 already present in this ಠ_ಠ805!!
  if (ಠ_ಠ786.ಠ_ಠ852 == undefined || ಠ_ಠ786.ಠ_ಠ852 == null){
    ಠ_ಠ852 = ಠ_ಠ786.default;
  } else {
    ಠ_ಠ852 = ಠ_ಠ786.ಠ_ಠ852;
  }
  var ಠ_ಠ795 = ಠ_ಠ786.ಠ_ಠ836;
  var ಠ_ಠ772 = ಠ_ಠ786.ಠ_ಠ964;
  var ಠ_ಠ783 = editorAPI.ಠ_ಠ869(ಠ_ಠ786.ಠ_ಠ783);
  var ಠ_ಠ793 = editorAPI.ಠ_ಠ869(ಠ_ಠ786.javascript);
  var ಠ_ಠ797 = editorAPI.ಠ_ಠ835(ಠ_ಠ783+" "+ಠ_ಠ793);
  ಠ_ಠ769 = "<h3>"+ಠ_ಠ795+"</h3>";
  ಠ_ಠ769 += "<div class='campaign_editor_data_elements' ಠ_ಠ852-templatename='"+ಠ_ಠ795+"' ಠ_ಠ852-templateid='"+ಠ_ಠ772+"' ಠ_ಠ852-ಠ_ಠ767='"+ಠ_ಠ786.ಠ_ಠ767+"' ಠ_ಠ852-inject='"+ಠ_ಠ786.inject+"'>";
  var ಠ_ಠ798 = "campaign_input_"+ಠ_ಠ795+"_html";
  var ಠ_ಠ799 = "campaign_input_"+ಠ_ಠ795+"_js";
  ಠ_ಠ769 += "<textarea ಠ_ಠ964='"+ಠ_ಠ798+"' style='display:none' class='html_textarea'>"+ಠ_ಠ783+"</textarea>";
  ಠ_ಠ769 += "<textarea ಠ_ಠ964='"+ಠ_ಠ799+"' style='display:none' class='js_textarea'>"+ಠ_ಠ793+"</textarea>";
  for (var ಠ_ಠ750 = 0; ಠ_ಠ750 < ಠ_ಠ797.ಠ_ಠ959; ಠ_ಠ750++) {
    var ಠ_ಠ781 = ಠ_ಠ797[ಠ_ಠ750];
    var ಠ_ಠ800 = "campaign_input_"+ಠ_ಠ795+"_"+ಠ_ಠ781.ಠ_ಠ836;
    var ಠ_ಠ801 = '';
    ಠ_ಠ769 += editorAPI.ಠ_ಠ839(ಠ_ಠ800,ಠ_ಠ781.ಠ_ಠ836,ಠ_ಠ781.ಠ_ಠ837);
  }
  ಠ_ಠ769 += "</div>";
  $(campaignBuilder.ಠ_ಠ900).append(ಠ_ಠ769);
  $(campaignBuilder.ಠ_ಠ900).accordion().accordion('destroy').accordion();
  $.each(ಠ_ಠ852,function(ಠ_ಠ975,ಠ_ಠ976){
    $("#campaign_input_"+ಠ_ಠ795+"_"+ಠ_ಠ975).ಠ_ಠ989(ಠ_ಠ976);
  });
  editorAPI.ಠ_ಠ833();
}

campaignBuilder.ಠ_ಠ855 = function(){
  editorAPI.ಠ_ಠ855(campaignBuilder.ಠ_ಠ891);
}

campaignBuilder.ಠ_ಠ891 = function(ಠ_ಠ783){
    $(campaignBuilder.ಠ_ಠ871).ಠ_ಠ783(ಠ_ಠ783);
    campaignBuilder.ಠ_ಠ861();
}

campaignBuilder.ಠ_ಠ861 = function(){
  editorAPI.ಠ_ಠ861($(campaignBuilder.ಠ_ಠ871).ಠ_ಠ989(),campaignBuilder.ಠ_ಠ914);
}

campaignBuilder.ಠ_ಠ914 = function(ಠ_ಠ852){
  var ಠ_ಠ778 = "";
  ಠ_ಠ778 += "<option value='new'>New...</option>";
  $.each(ಠ_ಠ852,function(ಠ_ಠ975,ಠ_ಠ976){
    ಠ_ಠ778 += "<option value='"+ಠ_ಠ976.ಠ_ಠ964+"' >"+ಠ_ಠ976.ಠ_ಠ836+"</option>";
  });
  $(campaignBuilder.ಠ_ಠ897).ಠ_ಠ783(ಠ_ಠ778);
  campaignBuilder.ಠ_ಠ858();
}

campaignBuilder.ಠ_ಠ858 = function(){
  editorAPI.ಠ_ಠ858($(campaignBuilder.ಠ_ಠ871).ಠ_ಠ989(),campaignBuilder.ಠ_ಠ893);
}

campaignBuilder.ಠ_ಠ893 = function(ಠ_ಠ852){
  var ಠ_ಠ778 = "";
  ಠ_ಠ778 += "<option value=''>Select...</option>";
  $.each(ಠ_ಠ852,function(ಠ_ಠ975,ಠ_ಠ976){
    ಠ_ಠ778 += "<option value='"+ಠ_ಠ976.ಠ_ಠ964+"' >"+ಠ_ಠ976.ಠ_ಠ836+"</option>";
  });
  $(campaignBuilder.ಠ_ಠ872).ಠ_ಠ783(ಠ_ಠ778);
  $(campaignBuilder.ಠ_ಠ900).accordion();
}

campaignBuilder.ಠ_ಠ865 = function(){
  campaignBuilder.ಠ_ಠ884();
  if ($(campaignBuilder.ಠ_ಠ897).ಠ_ಠ989() == 'new')
    return;
  editorAPI.ಠ_ಠ865($(campaignBuilder.editorSiteID).ಠ_ಠ989(),$(this.ಠ_ಠ897).ಠ_ಠ989(),campaignBuilder.ಠ_ಠ917);
}


campaignBuilder.ಠ_ಠ917 = function(ಠ_ಠ852){
  var ಠ_ಠ802 = ಠ_ಠ852.ಠ_ಠ802;
  var ಠ_ಠ803 = JSON.parse(ಠ_ಠ852.ಠ_ಠ852);
  $(campaignBuilder.ಠ_ಠ873).ಠ_ಠ989(ಠ_ಠ852.ಠ_ಠ836);
  $.each(ಠ_ಠ802,function(ಠ_ಠ769,ಠ_ಠ975,ಠ_ಠ970){
    var ಠ_ಠ781 = eval('ಠ_ಠ803.template_'+ಠ_ಠ975.ಠ_ಠ964);
    editorAPI.ಠ_ಠ864($(campaignBuilder.ಠ_ಠ871).ಠ_ಠ989(),ಠ_ಠ975.ಠ_ಠ964,ಠ_ಠ781,campaignBuilder.ಠ_ಠ911);
  });
}

var scheduleBuilder = scheduleBuilder || {};

var ಠ_ಠ804 = [];

scheduleBuilder.ಠ_ಠ826 = function(){
    
  this.ಠ_ಠ871 = '#editor_siteid';
  this.ಠ_ಠ918 = '#schedule_editor_schedule';
  this.ಠ_ಠ873 = "#schedule_editor_name";
  this.ಠ_ಠ919 = "#schedule_editor_start";
  this.ಠ_ಠ920 = "#schedule_editor_finish";
  this.ಠ_ಠ921 = '#schedule_editor_geo';
  this.ಠ_ಠ922 = "#schedule_editor_campaigns";
  this.ಠ_ಠ880 = "#schedule_editor_preview_schedule";
  this.ಠ_ಠ923 = "#schedule_editor_add_campaign";
  this.ಠ_ಠ881 = "#schedule_save_button";
  this.ಠ_ಠ900 = "#schedule_editor_accordion";
  this.ಠ_ಠ882 = "#schedule_delete_button";
  this.ಠ_ಠ925 = "#live_preview_schedule";
  this.ಠ_ಠ926 = window.setTimeout(scheduleBuilder.ಠ_ಠ867, 500);

  scheduleBuilder.ಠ_ಠ863();
  scheduleBuilder.ಠ_ಠ861();
  ಠ_ಠ804 = [];

  $(this.ಠ_ಠ923).click(function(){
    var ಠ_ಠ805 = $(scheduleBuilder.ಠ_ಠ922).ಠ_ಠ989();
    editorAPI.ಠ_ಠ865($(scheduleBuilder.ಠ_ಠ871).ಠ_ಠ989(),ಠ_ಠ805,scheduleBuilder.ಠ_ಠ935);
  });

  $(this.ಠ_ಠ918).change(function(){
    scheduleBuilder.ಠ_ಠ866();
  });

  $(this.ಠ_ಠ880).click(function(){
    scheduleBuilder.ಠ_ಠ909();
  });



  $('#live_preview_time').on('dp.change',function(){
      clearTimeout(scheduleBuilder.ಠ_ಠ926);
      scheduleBuilder.ಠ_ಠ926 = window.setTimeout(scheduleBuilder.ಠ_ಠ867, 500);
  });

  $('#live_preview_country').change(function(){
      clearTimeout(scheduleBuilder.ಠ_ಠ926);
      scheduleBuilder.ಠ_ಠ926 = window.setTimeout(scheduleBuilder.ಠ_ಠ867, 500);
  });


  $(this.ಠ_ಠ881).click(function(){
    scheduleBuilder.ಠ_ಠ854();
  });

  $(this.ಠ_ಠ882).click(function(){
    scheduleBuilder.ಠ_ಠ844();
  });
}

scheduleBuilder.ಠ_ಠ928 = function(){
    //console.log('setting time to '+moment().format("DD-MM-YYYY HH:mm"));
    $('#live_preview_time').ಠ_ಠ852("DateTimePicker").date(moment().format("DD-MM-YYYY HH:mm"));
}

scheduleBuilder.ಠ_ಠ929 = function(){
    $(scheduleBuilder.ಠ_ಠ918).ಠ_ಠ989($('#live_schedule_id').ಠ_ಠ989());
    scheduleBuilder.ಠ_ಠ866();
}

scheduleBuilder.ಠ_ಠ930 = function(){
    $('#editorTabs ಠ_ಠ754[href="#schedule"]').tab('show');
    scheduleBuilder.ಠ_ಠ929();

}

scheduleBuilder.ಠ_ಠ931 = function(){
    scheduleBuilder.ಠ_ಠ929();
    scheduleBuilder.ಠ_ಠ909();
}

scheduleBuilder.ಠ_ಠ932 = function(ಠ_ಠ966){
    $('#live_schedule_target').ಠ_ಠ783('');
    var ಠ_ಠ778 = "";
    if (ಠ_ಠ966.ಠ_ಠ836 !== undefined){
        ಠ_ಠ778 += "<input ಠ_ಠ837='text' style='display:none' value='"+ಠ_ಠ966.ಠ_ಠ964+"' ಠ_ಠ964='live_schedule_id' >";
        ಠ_ಠ778 += "<span>"+ಠ_ಠ966.ಠ_ಠ836+" expires at "+ಠ_ಠ966.expire+"</span>";
        ಠ_ಠ778 += "<div class='live_schedule_buttons'><button ಠ_ಠ837='button' class='btn btn-primary' ಠ_ಠ964='live_schedule_preview'>Preview</button>&nbsp;<button ಠ_ಠ837='button' class= 'btn btn-primary' ಠ_ಠ964='live_schedule_edit'>Edit Schedule</button></div>";
    } else {
        ಠ_ಠ778 += "<span>No Schedule Defined</span>";
    }
    $('#live_schedule_target').ಠ_ಠ783(ಠ_ಠ778);
    $('#live_schedule_preview').click(function(){
        scheduleBuilder.ಠ_ಠ931();
    });
    $('#live_schedule_edit').click(function(){
        scheduleBuilder.ಠ_ಠ930();
    });
}

scheduleBuilder.ಠ_ಠ867 = function(){
    editorAPI.ಠ_ಠ867($(scheduleBuilder.ಠ_ಠ871).ಠ_ಠ989(),$('#live_preview_time').ಠ_ಠ852("DateTimePicker").date().format('DD-MM-YYYY HH:mm'),scheduleBuilder.ಠ_ಠ932);

}

scheduleBuilder.ಠ_ಠ883 = function(){
  scheduleBuilder.ಠ_ಠ884();
  $(scheduleBuilder.ಠ_ಠ900).ಠ_ಠ783(' ');
  $(scheduleBuilder.ಠ_ಠ900).accordion().accordion('destroy');
  scheduleBuilder.ಠ_ಠ863();
  scheduleBuilder.ಠ_ಠ861();
  $('.datetimepicker').datetimepicker({
      format: 'DD/MM/YYYY HH:mm'
  });
  ಠ_ಠ804 = [];
}

scheduleBuilder.ಠ_ಠ911 = function(ಠ_ಠ786){
    if (ಠ_ಠ786.ಠ_ಠ852 == undefined || ಠ_ಠ786.ಠ_ಠ852 == null){
      ಠ_ಠ852 = ಠ_ಠ786.default;
    } else {
      ಠ_ಠ852 = ಠ_ಠ786.ಠ_ಠ852;
    }
      var ಠ_ಠ795 = ಠ_ಠ786.ಠ_ಠ836;
      var ಠ_ಠ772 = ಠ_ಠ786.ಠ_ಠ964;
      if (!$('#schedule_template_container_'+ಠ_ಠ772).ಠ_ಠ959){ //if ಠ_ಠ786 is already contained in this schedule don'ಠ_ಠ747 add it again!
        var ಠ_ಠ783 = editorAPI.ಠ_ಠ869(ಠ_ಠ786.ಠ_ಠ783);
        var ಠ_ಠ793 = editorAPI.ಠ_ಠ869(ಠ_ಠ786.javascript);
        var ಠ_ಠ797 = editorAPI.ಠ_ಠ835(ಠ_ಠ783+" "+ಠ_ಠ793);
        ಠ_ಠ769 = "<h3>"+ಠ_ಠ795+"</h3>";
        ಠ_ಠ769 += "<div ಠ_ಠ964='schedule_template_container_"+ಠ_ಠ772+"' class='schedule_editor_data_elements' ಠ_ಠ852-templatename='"+ಠ_ಠ795+"' ಠ_ಠ852-templateid='"+ಠ_ಠ772+"' ಠ_ಠ852-ಠ_ಠ767='"+ಠ_ಠ786.ಠ_ಠ767+"' ಠ_ಠ852-inject='"+ಠ_ಠ786.inject+"'>";
        var ಠ_ಠ798 = "schedule_input_"+ಠ_ಠ795+"_html";
        var ಠ_ಠ799 = "schedule_input_"+ಠ_ಠ795+"_js";
        ಠ_ಠ769 += "<textarea ಠ_ಠ964='"+ಠ_ಠ798+"' style='display:none' class='html_textarea'>"+ಠ_ಠ783+"</textarea>";
        ಠ_ಠ769 += "<textarea ಠ_ಠ964='"+ಠ_ಠ799+"' style='display:none' class='js_textarea'>"+ಠ_ಠ793+"</textarea>";
        for (var ಠ_ಠ750 = 0; ಠ_ಠ750 < ಠ_ಠ797.ಠ_ಠ959; ಠ_ಠ750++) {
          var ಠ_ಠ781 = ಠ_ಠ797[ಠ_ಠ750];
          var ಠ_ಠ800 = "schedule_input_"+ಠ_ಠ795+"_"+ಠ_ಠ781.ಠ_ಠ836;
          ಠ_ಠ769 += editorAPI.ಠ_ಠ839(ಠ_ಠ800,ಠ_ಠ781.ಠ_ಠ836,ಠ_ಠ781.ಠ_ಠ837);
        }
        ಠ_ಠ769 += "</div>";
        $(scheduleBuilder.ಠ_ಠ900).append(ಠ_ಠ769);
        $(scheduleBuilder.ಠ_ಠ900).accordion().accordion('destroy').accordion();
      }
    $.each(ಠ_ಠ852,function(ಠ_ಠ975,ಠ_ಠ976){
      $("#schedule_input_"+ಠ_ಠ795+"_"+ಠ_ಠ975).ಠ_ಠ989(ಠ_ಠ976);
    });
    editorAPI.ಠ_ಠ833();
}

scheduleBuilder.ಠ_ಠ935 = function(ಠ_ಠ852){
  var ಠ_ಠ802 = ಠ_ಠ852.ಠ_ಠ802;
  var ಠ_ಠ803 = JSON.parse(ಠ_ಠ852.ಠ_ಠ852);
  ಠ_ಠ804.push(ಠ_ಠ852.ಠ_ಠ964);
  $.each(ಠ_ಠ802,function(ಠ_ಠ769,ಠ_ಠ975,ಠ_ಠ970){
    var ಠ_ಠ781 = eval('ಠ_ಠ803.template_'+ಠ_ಠ975.ಠ_ಠ964);
    editorAPI.ಠ_ಠ864($(scheduleBuilder.ಠ_ಠ871).ಠ_ಠ989(),ಠ_ಠ975.ಠ_ಠ964,ಠ_ಠ781,scheduleBuilder.ಠ_ಠ911);
  });
}

scheduleBuilder.ಠ_ಠ844 = function(ಠ_ಠ852){
    editorAPI.ಠ_ಠ844($(scheduleBuilder.ಠ_ಠ871).ಠ_ಠ989(),$(scheduleBuilder.ಠ_ಠ918).ಠ_ಠ989(),scheduleBuilder.ಠ_ಠ948);

}

scheduleBuilder.ಠ_ಠ861 = function(){
  editorAPI.ಠ_ಠ861($(scheduleBuilder.ಠ_ಠ871).ಠ_ಠ989(),scheduleBuilder.ಠ_ಠ914);
}

  scheduleBuilder.ಠ_ಠ863 = function(){
    editorAPI.ಠ_ಠ863($(scheduleBuilder.ಠ_ಠ871).ಠ_ಠ989(),scheduleBuilder.ಠ_ಠ939);
  }

  scheduleBuilder.ಠ_ಠ914 = function(ಠ_ಠ852){
    var ಠ_ಠ778 = "";
    ಠ_ಠ778 += "<option value='select'>Select...</option>";
    $.each(ಠ_ಠ852,function(ಠ_ಠ975,ಠ_ಠ976){
      ಠ_ಠ778 += "<option value='"+ಠ_ಠ976.ಠ_ಠ964+"' >"+ಠ_ಠ976.ಠ_ಠ836+"</option>";
    });
    $(scheduleBuilder.ಠ_ಠ922).ಠ_ಠ783(ಠ_ಠ778);
  }

  scheduleBuilder.ಠ_ಠ939 = function(ಠ_ಠ852){
    var ಠ_ಠ778 = "";
    ಠ_ಠ778 += "<option value='new'>New...</option>";
    $.each(ಠ_ಠ852,function(ಠ_ಠ975,ಠ_ಠ976){
      ಠ_ಠ778 += "<option value='"+ಠ_ಠ976.ಠ_ಠ964+"' >"+ಠ_ಠ976.ಠ_ಠ836+"</option>";
    });
    $(scheduleBuilder.ಠ_ಠ918).ಠ_ಠ783(ಠ_ಠ778);
    $(scheduleBuilder.editorScheduleID).accordion();
  }

  scheduleBuilder.ಠ_ಠ909 = function(){
      var ಠ_ಠ783 = "";
      ಠ_ಠ787 = '[';

      $('.schedule_editor_data_elements').each(function(){
        var ಠ_ಠ789 = $(this).ಠ_ಠ852('templatename');
        var ಠ_ಠ790 = $(this).ಠ_ಠ852('ಠ_ಠ767');
        var ಠ_ಠ791 = $(this).ಠ_ಠ852('inject');
        //console.log(ಠ_ಠ789);
        //build ಠ_ಠ783
        ಠ_ಠ783 += "<div class='"+ಠ_ಠ789+" preview_div' ಠ_ಠ852-ಠ_ಠ767='"+ಠ_ಠ790+"' ಠ_ಠ852-inject='"+ಠ_ಠ791+"'>";
        var ಠ_ಠ792 = $(this).children('textarea.html_textarea').ಠ_ಠ783();
        var ಠ_ಠ793 = editorAPI.ಠ_ಠ868($(this).children('textarea.js_textarea').ಠ_ಠ989());
        ಠ_ಠ792 = jQuery('<div/>').ಠ_ಠ783(ಠ_ಠ792).text();
        //ಠ_ಠ793 = jQuery('<div/>').ಠ_ಠ783(ಠ_ಠ793).text();
        ಠ_ಠ783 += ಠ_ಠ792;
        ಠ_ಠ783 += "</div>";
        //build ಠ_ಠ852
        ಠ_ಠ787 +=  '{"preview":';
        ಠ_ಠ787 += '{';
        ಠ_ಠ787 += '"ಠ_ಠ786" : "'+ಠ_ಠ789+'",';
        $(this).find('input').each(function(){
            if ($(this).ಠ_ಠ852('inputname') !== undefined)
                ಠ_ಠ787 += '"'+$(this).ಠ_ಠ852('inputname')+'":"'+$(this).ಠ_ಠ989()+'",';
        });
        ಠ_ಠ787 += '"javascript":"'+ಠ_ಠ793+'"';
        //ಠ_ಠ787 = ಠ_ಠ787.slice(0, -1);
        ಠ_ಠ787 += '}';
        ಠ_ಠ787 += '},';
      });
      ಠ_ಠ787 = ಠ_ಠ787.slice(0, -1);
      ಠ_ಠ787 += ']';
      ಠ_ಠ781 = JSON.parse(ಠ_ಠ787);
      console.log(ಠ_ಠ781);
      targetFrame = ಠ_ಠ988.getElementById('preview');
      var ಠ_ಠ782 = {ಠ_ಠ982: 'template_preview', ಠ_ಠ783: ಠ_ಠ783, ಠ_ಠ781: ಠ_ಠ781 };
      targetFrame.contentWindow.postMessage(ಠ_ಠ782, '*');
  }

  scheduleBuilder.ಠ_ಠ854 = function(){
      if ($(scheduleBuilder.ಠ_ಠ873).ಠ_ಠ989() == ""){
        alert('please enter ಠ_ಠ754 ಠ_ಠ836 for this ಠ_ಠ805!!');
        return false;
      } else {
         var ಠ_ಠ817 = {};
         ಠ_ಠ817.ಠ_ಠ836 = $(scheduleBuilder.ಠ_ಠ873).ಠ_ಠ989();
         ಠ_ಠ817.ಠ_ಠ943 = ಠ_ಠ804;
         ಠ_ಠ817.ಠ_ಠ944 = $('#ಠ_ಠ944').ಠ_ಠ989();
         ಠ_ಠ817.ಠ_ಠ945 = $(scheduleBuilder.ಠ_ಠ919).ಠ_ಠ989();
         ಠ_ಠ817.ಠ_ಠ946 = $(scheduleBuilder.ಠ_ಠ920).ಠ_ಠ989();
         ಠ_ಠ817.ಠ_ಠ947 = $(scheduleBuilder.ಠ_ಠ921).ಠ_ಠ989();
         ಠ_ಠ817.ಠ_ಠ802 = {};
         $('.schedule_editor_data_elements').each(function(){
             var ಠ_ಠ818 = {};
             $(this).find('input').each(function(){
               if ($(this).ಠ_ಠ852('inputname') !== undefined)
                    eval("ಠ_ಠ818."+$(this).ಠ_ಠ852('inputname')+" = '"+$(this).ಠ_ಠ989()+"';");
             });
             eval("ಠ_ಠ817.ಠ_ಠ802.template_"+$(this).ಠ_ಠ852('templateid')+" = ಠ_ಠ818;");
         });
         editorAPI.ಠ_ಠ854($(scheduleBuilder.ಠ_ಠ871).ಠ_ಠ989(),$(scheduleBuilder.ಠ_ಠ918).ಠ_ಠ989(),ಠ_ಠ817,scheduleBuilder.ಠ_ಠ948);

      }
  }

  scheduleBuilder.ಠ_ಠ948 = function(ಠ_ಠ966){
      ಠ_ಠ966 = JSON.parse(ಠ_ಠ966);
      if (ಠ_ಠ966.status == 'ಠ_ಠ956'){
        scheduleBuilder.ಠ_ಠ883();
        alert('schedule saved');
      } else {
        alert('Error saving ಠ_ಠ852!!');
      }
  }

  scheduleBuilder.ಠ_ಠ884 = function(){
      $(scheduleBuilder.ಠ_ಠ873).ಠ_ಠ989('');
      $(scheduleBuilder.ಠ_ಠ919).ಠ_ಠ989('');
      $(scheduleBuilder.ಠ_ಠ920).ಠ_ಠ989('');
      $(scheduleBuilder.ಠ_ಠ900).ಠ_ಠ783(' ');
      $(scheduleBuilder.ಠ_ಠ900).accordion().accordion('destroy');
  }

  scheduleBuilder.ಠ_ಠ866 = function(){
      scheduleBuilder.ಠ_ಠ884();
      if ($(scheduleBuilder.ಠ_ಠ918).ಠ_ಠ989() == 'new')
        return;
      console.log('loading schedule '+$(scheduleBuilder.ಠ_ಠ918).ಠ_ಠ989());
      editorAPI.ಠ_ಠ866($(scheduleBuilder.editorSiteID).ಠ_ಠ989(),$(scheduleBuilder.ಠ_ಠ918).ಠ_ಠ989(),scheduleBuilder.ಠ_ಠ950);
  }

  scheduleBuilder.ಠ_ಠ950 = function(ಠ_ಠ966){
      $(scheduleBuilder.ಠ_ಠ873).ಠ_ಠ989(ಠ_ಠ966.ಠ_ಠ836);
      $(scheduleBuilder.ಠ_ಠ919).ಠ_ಠ989(ಠ_ಠ966.start_at);
      $(scheduleBuilder.ಠ_ಠ920).ಠ_ಠ989(ಠ_ಠ966.finish_at);
      $(scheduleBuilder.ಠ_ಠ921).ಠ_ಠ989(ಠ_ಠ966.country_codes);
      var ಠ_ಠ803 = JSON.parse(ಠ_ಠ966.ಠ_ಠ852);
      $.each(ಠ_ಠ966.ಠ_ಠ943,function(ಠ_ಠ769,ಠ_ಠ975,ಠ_ಠ970){
          ಠ_ಠ804.push(ಠ_ಠ975.ಠ_ಠ964);
      });
      $.each(ಠ_ಠ803,function(ಠ_ಠ769,ಠ_ಠ975,ಠ_ಠ970){
          var ಠ_ಠ772 = ಠ_ಠ769.replace('template_','');
          editorAPI.ಠ_ಠ864($(scheduleBuilder.ಠ_ಠ871).ಠ_ಠ989(),ಠ_ಠ772,ಠ_ಠ975,scheduleBuilder.ಠ_ಠ911);
      });
      $('.datetimepicker').datetimepicker({
          format: 'DD/MM/YYYY HH:mm'
      });
  }




var ಠ_ಠ750 = 0;
var ಠ_ಠ819 = false;
   $(ಠ_ಠ988).ready(function(){
     if (!$('#editor_siteid').ಠ_ಠ959)
         return;
     $('.tabs').tabs();
     $('.datetimepicker').datetimepicker({
         format: 'DD/MM/YYYY HH:mm'
     });
     $('#preview_url').change(function(){
       //$('#preview').attr('src','/proxy/ಠ_ಠ975.php?ಠ_ಠ771='+$('#preview_url').ಠ_ಠ989());
     });
     editorAPI.ಠ_ಠ826();
     templateBuilder.ಠ_ಠ826();
     campaignBuilder.ಠ_ಠ826();
     scheduleBuilder.ಠ_ಠ826();
     $('#live_preview_time').datetimepicker({
            inline: true,
            sideBySide: true,
            format: 'DD-MM-YYYY HH:mm',
            useCurrent: true
     });
     //$('.datetimepicker').ಠ_ಠ852('dateTimePicker').date(moment().format('DD/MM/YYYY HH:mm'));

     $('#settings_save_button').click(function(){
        var ಠ_ಠ820 = $('#site_editor_name').ಠ_ಠ989();
        var ಠ_ಠ821 = $('#site_editor_url').ಠ_ಠ989();
        var ಠ_ಠ822 = $(scheduleBuilder.ಠ_ಠ871).ಠ_ಠ989();
        var ಠ_ಠ823 = $('#ಠ_ಠ944').ಠ_ಠ989();
        $.post('/api/sites/'+ಠ_ಠ822,{
            'ಠ_ಠ836' : ಠ_ಠ820,
            'ಠ_ಠ771' : ಠ_ಠ821,
            'ಠ_ಠ944' : ಠ_ಠ823
        },function(ಠ_ಠ852){
            $( '#preview' ).attr( 'src', function ( ಠ_ಠ750, ಠ_ಠ989 ) { return ಠ_ಠ989; });
        });
     });
   });


   $('#behaviour input').change(function(){
     targetFrame = ಠ_ಠ988.getElementById('preview');
     if ($('input[ಠ_ಠ836=behaviour]:checked', '#behaviour').ಠ_ಠ989() == 'select'){
        ಠ_ಠ782 = {ಠ_ಠ982: 'set_select'};
     } else {
       ಠ_ಠ782 = {ಠ_ಠ982: 'set_navigate'};
     }
     targetFrame.contentWindow.postMessage(ಠ_ಠ782, '*');
   });




   function ಠ_ಠ824(){
       $('.main-panel').removeClass('col-lg-12').addClass('col-lg-8');
       $('.side-panel').removeClass('col-lg-0').addClass('col-lg-4');
       $('.editor_hidden').show();
   }

   function ಠ_ಠ825(){
       $('.main-panel').removeClass('col-lg-8').addClass('col-lg-12');
       $('.side-panel').removeClass('col-lg-4').addClass('col-lg-0');
       $('.editor_hidden').hide();
   }

   $('#ಠ_ಠ824').click(function(){
      ಠ_ಠ824();
   });

   $('#ಠ_ಠ825').click(function(){
      ಠ_ಠ825();
   });
