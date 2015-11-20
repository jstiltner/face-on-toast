define(function(require){

  var $ = require("jquery");
  var templates = require("3-loadtemplates");

	// *** New User View ***//
	return {
		loadNewUserView: function() {

  		$("#view-new-user").html(templates.newuser());
		$("#view-new-user").removeClass("hidden");
		$("#view-new-user").addClass("active");

		}
	};
});