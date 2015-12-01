define(function(require){

	var $ = require("jquery");
	var templates = require("3-loadtemplates");
    var stars = require("stars");
	
	return {
  
	    popNewUserView: function(fn) { 
  			$("#view-new-user").html(templates.newuser());
  			$(".rating").rating();
            $("#view-login").hide();
   			$("#view-filters").removeClass("hidden");
    		$("#view-navBar").removeClass("hidden");
    		$("#view-new-user").show();
	    }
	};
});