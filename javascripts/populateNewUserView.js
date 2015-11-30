define(function(require){

	var $ = require("jquery");
	var templates = require("3-loadtemplates");
	
	return {
  
	    popNewUserView: function(fn) { 
  			$("#view-new-user").html(templates.newuser());
  			$("#view-login").hide();
   			$("#view-filters").removeClass("hidden");
    		$("#view-navBar").removeClass("hidden");
    		$("#view-new-user").show();
	    }
	};
});