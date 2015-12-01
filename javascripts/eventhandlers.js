define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");
  var q = require("q");
  var bootstrap = require("bootstrap");

  //handlebars templates
  var templates = require("3-loadtemplates");
  var userStorage = require("5-user-data-storage");
  var register = require("register");
  var loginPromise = require("loginPromise");
  var findMovie = require("findMovie");
  var deleteMovie = require("delete-movie");
  var fbToDOMfaves = require("fb-to-DOM-faves");
  var fbToDOM = require("FB-to-DOM");
  var fbToDOMwatched = require("FB-to-DOM-watched");
  var filterWatched = require("filter-watched");
  var filterUnwatched = require("filter-unwatched");
  var filterFavorites = require("filter-favorites");
  var moviesFB = require("movies-to-FB");
  var deletor = require("deletefromFB");
  var infoModal = require("infopopup");
  var fbToDOMunwatched = require("FB-to-DOM-unwatched");
  var watchedBtnTrue = require("watched-btn-true");
  var starEvent = require("starEvent");




// ***** Event handlers for log-in/register
  //shows new user view after user clicks 'register' button
  $("body").on('click', "#register", function() {
    register.register();
  });

//shows user home view after user clicks 'log in' button
  $("body").on('click', ".poster", function (e) {
    
    console.log("click!");
    infoModal.popup(event.target.id);
    $("#myModal").modal('show');
  });

  //shows user home view after user clicks 'log in' button
  $("body").on('click', "#log-in", function (event) {
    loginPromise.login();
  });

// ***** Search/add movies functionality 
  //searches movies when enter key is pressed
  $("body").on('keyup', function (event) {
  	if (event.which===13)
    findMovie.findMovie();
  });

// ***** Event handlers for watched and favorite buttons
  //updates FB to make watched = true when "watched" button is clicked
  $("body").on('click', '.watchedBtn', function (event) {
    var parentID = $(this).parent().attr("id");
    console.log("parentID", parentID);
    watchedBtnTrue.watchedTrue(parentID);
    $(this).remove();
    // $(this).parent().remove();
  });

// ***** Event handlers for movie filters

  //filters user's movies to show all the movies that the user has selected when user clicks "all movies"
  $("body").on('click', '#allYourMovies', function (event) {
    fbToDOM.fbToDOM();
  });
    
  //filters user's movies to show only their movies marked 'watched', when "watched" filter is clicked.
  $("body").on('click', "#watched", function() {
    filterWatched.filterWatched();
  });

  //filters user's movies to show only their movies marked 'unwatched', when "unwatched" filter is clicked.
  $("body").on('click', "#unwatched", function() {
    fbToDOMunwatched.fbToDOMunwatched();
  });

  //filters user's movies to show only their favorited (5 stars) movies, when "favorites" filter is clicked.

  $("body").on('rating.change',"#ratingScale", function() {

    filterFavorites.filterFaves();
  });


// ***** Delete button
  $("body").on("click", ".deleteBtn", function(e){
    var parent = $(this).parent().attr("id");
    console.log("parent", parent);
    console.log("this",$(this));  
    deleteMovie.deleteMovie(parent);
    $(this).parent().remove();
  });

// ***** star clicks

  $("body").on('rating.change',".rating", function (event) {

    //this is the minimum number of stars to filter a movie into your favorites view
    var faveMin = 7;
    console.log("this", $(this));
    var key = $(this).attr("key");
    console.log("key",key);
    var stars = $(this).val();
    console.log("stars", stars);
    starEvent.postFave(key, stars, faveMin);
});


});

    




