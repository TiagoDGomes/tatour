/*
*
* jQuery.Loady
* Version 0.0.2
* @requires jQuery v1.5
*
* Copyright (c) 2010 Karl Laurentius Roos
* Example at: http://roosmedia.se/project/jquery.loady/
* Licensed under the MIT licens:
* http://www.opensource.org/licenses/mit-license.php
*
*/
(function($){$.fn.extend({loady:function(options){var config={url:"",dataType:"html",type:"GET",data:"",html:"",showError:true,el:this,parser:function(data,t,config){$(config.el).html(data);$(t).find(".loady").remove();}};var t=this;$.extend(config,options);$(t).css("position","relative").html('<div class="loady">'+config.html+'</div>'+$(t).html()).find(".loady");$.ajax({url:config.url,dataType:config.dataType,type:config.type,data:config.data,success:function(data){config.parser(data,t,config);},error:function(a,b,c){if(config.showError){$(t).find(".loady").addClass("error").html(b);return false;}
$(t).find(".loady").remove();}});}});})(jQuery);