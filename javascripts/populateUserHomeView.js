define(function(require){

  var $ = require("jquery");
  var templates = require("3-loadtemplates");
  var fbToDOM = require("FB-to-DOM");
  
  return {

	    popUserHomeView: function (fn) { 
  			fbToDOM.fbToDOM();
    		$("#view-login").hide();
    		$("#view-filters").removeClass("hidden");
    		$("#view-navBar").removeClass("hidden");
	    }
	};
});