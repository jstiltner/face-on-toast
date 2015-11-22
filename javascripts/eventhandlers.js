define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");

  //handlebars templates
  var templates = require("3-loadtemplates");
  var userStorage = require("5-user-data-storage");
  var populateNewUserView = require("populateNewUserView");
  var populateUserHomeView = require("populateUserHomeView");

    $("#findMoviesBtn").click(function (e) {
    	$("#view-find-movie").html(templates.findmovie());
    	$("#findMovieModal").modal("toggle");
		$("#view-find-movie").removeClass("hidden");
		$("#view-find-movie").addClass("visible");
	});

	$("#findBtn").click(function (e) {
		$("#movieToSearch").value();
	});

});
