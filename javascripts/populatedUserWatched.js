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
	    }
	};
});