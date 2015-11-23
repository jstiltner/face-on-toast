define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");

  //handlebars templates
  var templates = require("3-loadtemplates");
  var userStorage = require("5-user-data-storage");
  var populateNewUserView = require("populateNewUserView");
  var populateUserHomeView = require("populateUserHomeView");
  var populateFindAMovieView = require("populateFindAMovieView");
  var findMovie = require("findMovie");


	//find movies view populate
    $("#findMoviesBtn").click(function (e) {
    	console.log("click is registering");
    	$("#view-find-movie").html(templates.findmovie());
  		$("#findMovieModal").modal("toggle");
		$("#view-find-movie").removeClass("hidden");
		$("#view-find-movie").addClass("visible");
	});
	//find movies ajax call
	$("#findBtn").click(function (e) {
  		findMovie.findMovie();
  		$("#findMovieModal").modal("toggle");
		templates.findMovie(findMovie);
		console.log(templates.findmovie(findMovie));
    });
});


