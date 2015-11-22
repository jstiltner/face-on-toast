define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");

  //handlebars templates
  var templates = require("3-loadtemplates");
  var userStorage = require("5-user-data-storage");
  var populateNewUserView = require("populateNewUserView");
  var populateUserHomeView = require("populateUserHomeView");
  var findMovie = require("findMovie");


	//find movies view populate
    $("#findMoviesBtn").click(function (e) {
  		$("#view-find-movie").html(templates.findmovie());
  		$("#findMovieModal").modal("toggle");
		$("#view-find-movie").removeClass("hidden");
		$("#view-find-movie").addClass("visible");
	});

	//find movies ajax call
	$("#findBtn").click(function (e) {
  		findMovie.findMovie();
  		$("#findMovieModal").modal("toggle");
    });

});


