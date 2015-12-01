define(function(require){

    var $ = require("jquery");
    var templates = require("3-loadtemplates");

	return {
	  
	    popUnwatched: function (fn) { 
	    	console.log("pop function fired" );
			$("#view-user-watched").html(templates.userunwatched()); 
	        $("#view-user-unwatched").show();
	        $("#view-new-user").hide();
	        $("#view-user-home").hide();
	        $("#view-find-movie").hide();
	        $("#view-user-watched").hide();
	        $("#view-search-my-movie").hide();
	        $("#view-find-search-results").hide();
	    }
	};
});