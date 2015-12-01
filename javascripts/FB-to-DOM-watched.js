
define(function(require) {
    var $ = require("jquery");
    var Firebase = require("firebase");
    var Q = require("q");
    var stars = require("stars");

  //handlebars templates
    var templates = require("3-loadtemplates");
    var userStorage = require("5-user-data-storage");
    var movieArray = [];

  return {
  
      fbToDOMwatched: function(fn) { 
          console.log("fbToDOMwatched function fired.");
          //set up a few variables
            var userRef = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid());
      // Attach an asynchronous callback to read the data at our posts reference
      userRef.once("value", function(snapshot) {
        var allMovieData = snapshot.val();

        var allMovieRefs = [];
        for (var key in allMovieData) {
          var moviewithID = allMovieData[key];
          console.log("movie with id", moviewithID);
          moviewithID.key = key;
          console.log("key", key);
          moviewithID.allMovieRefs = allMovieRefs;
          movieArray[movieArray.length] = moviewithID; 
        }
        var movieForTemplate = {movie : allMovieData};
        console.log("movieForTemplate", movieForTemplate);
        movieArray = [];

        $("#view-user-watched").html(templates.userwatched(movieForTemplate));
        $(".rating").rating();
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
      }
  };
});