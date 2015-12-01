define(function(require){

  var $ = require("jquery");
  var templates = require("3-loadtemplates");
  var fbToDOM = require("FB-to-DOM");
  var stars = require("stars");

  return {

	    popUserHomeView: function (fn) { 
  			fbToDOM.fbToDOM();
        templates.stars();
        $(".rating").rating();
    		$("#view-login").hide();
    		$("#view-filters").removeClass("hidden");
    		$("#view-navBar").removeClass("hidden");
	    }
	};
});