define(function(require){

    var $ = require("jquery");
    var templates = require("3-loadtemplates");

	return {
	  
	    popWatched: function(fn) { 
			$("#view-user-watched").html(templates.userwatched());
	        $("#view user-watched").show();
	        $("#view-new-user").hide();
	        $("#view-user-home").hide();
	        $("#view-find-movie").hide();
	        $("#view-user-unwatched").hide();
	        $("#view-search-my-movie").hide();
	        $("#view-find-search-results").hide();
	    }
	};
});