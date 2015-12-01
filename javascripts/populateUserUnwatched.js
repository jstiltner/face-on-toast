define(function(require){

    var $ = require("jquery");
    var templates = require("3-loadtemplates");
    var stars = require("stars");

	return {
	  
	    popUnwatched: function (fn) { 
			$("#view-user-watched").html(templates.userunwatched()); 
            $$(".rating").rating();
	        $("#view user-unwatched").show();
	        $("#view-new-user").hide();
	        $("#view-user-home").hide();
	        $("#view-find-movie").hide();
	        $("#view-user-watched").hide();
            $("#view-user-favorites").hide();
	        $("#view-search-my-movie").hide();
	        $("#view-find-search-results").hide();
	    }
	};
});