define(function(require) {
  var $ = require("jquery");
  var Firebase = require("firebase");
var Q = require("q");
  var userStorage = require("5-user-data-storage");
  var popFaves = require("populateFavesView");
  //load handlebars template
  var templates = require("3-loadtemplates");
  var fbToDOMfaves = require("FB-to-DOM-faves");

  return {
    sliderEvent: function (faveMin) {
        var deferred = Q.defer();
        var userRef = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid());
        userRef.once("value", function(snapshot) {
            var allMovieData = snapshot.val();
            console.log("allMovieData", allMovieData);
            var allMoviesRefs = [];
            for (var key in allMovieData) {
                var moviewithID = allMovieData[key];
                moviewithID.key = key;
                var value = moviewithID.rating;
                console.log("value", value);
                console.log("moviewithID", moviewithID);
                console.log("faveMin", faveMin);
                console.log("key", key);
                var movieKey = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid()+ "/" + key);
                movieKey.child("faveMin").remove();
                if (value >= faveMin) {
                    movieKey.child("faveMin").set(true);
                }  
            }
        });
    return deferred.promise;
    }
};
});
