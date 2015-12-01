define(function(require){

    var $ = require("jquery");
    var templates = require("3-loadtemplates");
    var fbToDOMwatched = require("FB-to-DOM-watched");

	return {
	    popWatched: function (fn) { 
	    	fbToDOMwatched.fbToDOMwatched();
			$("#view-login").hide();
    		$("#view-filters").removeClass("hidden");
    		$("#view-navBar").removeClass("hidden");
            $("#view-user-watched").show();
            $("#view-new-user").hide();
            $("#view-user-home").hide();
            $("#view-find-movie").hide();
            $("#view-user-unwatched").hide();
            $("#view-user-favorites").hide();
            $("#view-search-my-movie").hide();
            $("#view-find-search-results").hide();
	    }
	};
});