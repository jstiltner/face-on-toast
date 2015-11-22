define(function(require){

  var $ = require("jquery");
  var templates = require("3-loadtemplates");

	// *** New User View ***//
	return {
		loadUserHomeView: function() {

  		$("#view-new-user").html(templates.userhome());
		$("#view-new-user").removeClass("hidden");
		$("#view-new-user").addClass("active");

		}
	};
});