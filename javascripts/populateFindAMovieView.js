define(function(require){

  var $ = require("jquery");
  var templates = require("3-loadtemplates");

	// *** New User View ***//
	return {
		loadFindAMovieView: function() {

  		$("#view-find-movie").html(templates.findmovie());

		}
	};
});