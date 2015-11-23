define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");
  var q = require("q");

  //handlebars templates
  var templates = require("3-loadtemplates");
  var userStorage = require("5-user-data-storage");
  var populateNewUserView = require("populateNewUserView");
  var populateUserHomeView = require("populateUserHomeView");
  var populateFindAMovieView = require("populateFindAMovieView");
  var findMovie = require("findMovie");


	//find movies view populate
  $("body").on('click', "#findMoviesBtn", function (e) {
  	$("#view-find-movie").html(templates.findmovie());
  	$("#findMovieModal").modal("toggle");
		$("#view-find-movie").show();
	});
	//find movies ajax call
  
  $("body").on('click', "#findBtn", function (e) {
  	findMovie.findMovie();
  // .then(function(data) {
  //   return findMovie.secondXHR(data);
  // })
  // .done();
  	$("#findMovieModal").modal("toggle");
  });

//shows new user view after user clicks 'register' button
  $("body").on('click', "#register", function() {
    $("#view-login").hide();
    $("#view-new-user").show();
    $("#view-user-home").hide();
    $("#view-find-movie").hide();
    $("#view user-watched").hide();
    $("#view-user-unwatched").hide();
    $("#view-search-my-movie").hide();
  });

//shows user home view after user clicks 'log in' button
  $("body").on('click', "#log-in", function() {
    $("#view-login").hide();
    $("#view-new-user").hide();
    $("#view-user-home").show();
    $("#view-find-movie").hide();
    $("#view user-watched").hide();
    $("#view-user-unwatched").hide();
    $("#view-search-my-movie").hide();
  });

//
  $("body").on('click', "#findBtn", function() {
    $("#view-login").hide();
    $("#view-new-user").hide();
    $("#view-user-home").hide();
    $("#view-find-movie").show();
    $("#view user-watched").hide();
    $("#view-user-unwatched").hide();
    $("#view-search-my-movie").hide();
  });

//
  $("body").on('click', "#watchedBtn", function() {
    $("#view-login").hide();
    $("#view-new-user").hide();
    $("#view-user-home").hide();
    $("#view-find-movie").hide();
    $("#view user-watched").show();
    $("#view-user-unwatched").hide();
    $("#view-search-my-movie").hide();
  });

//
  $("body").on('click', "#unwatchedBtn", function() {
    $("#view-login").hide();
    $("#view-new-user").hide();
    $("#view-user-home").hide();
    $("#view-find-movie").hide();
    $("#view user-watched").hide();
    $("#view-user-unwatched").show();
    $("#view-search-my-movie").hide();
  });

//
  $("body").on('click', "#findBtn", function() {
    $("#view-login").hide();
    $("#view-new-user").hide();
    $("#view-user-home").hide();
    $("#view-find-movie").hide();
    $("#view user-watched").hide();
    $("#view-user-unwatched").hide();
    $("#view-search-my-movie").show();
  });
});



