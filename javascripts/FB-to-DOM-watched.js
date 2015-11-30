define(function(require) {
    var $ = require("jquery");
    var Firebase = require("firebase");
    var Q = require("q");

  //handlebars templates
    var templates = require("3-loadtemplates");
    var 
    var userStorage = require("5-user-data-storage");
    var watchedArray = [];

  return {
  
      fbToDOMwatched: function(fn) { 
          console.log("fbToDOMwatched function fired.");
          //set up a few variables
            var userRef = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid());
      // Attach an asynchronous callback to read the data at our posts reference
      userRef.once("value", function(snapshot) {
        var watchedData = snapshot.val();

        console.log("watched Data", watchedData);

        var watchedRefs = [];
        for (var key in watchedData) {
          if (watchedData.watched === true) {
            var watchedwithID = watchedData[key];
            console.log("watched with id", watchedwithID);
            watchedwithID.key = key;
            console.log("key", key);
            watchedwithID.watchedRefs = watchedRefs;
            watchedArray[watchedArray.length] = watchedwithID;
          }
        }
        var watchedForTemplate = {movieWatched: watchedArray};
        console.log("watchedForTemplate", watchedForTemplate);
        watchedArray = [];


        
      
        console.log("imported Data", importedData );
        
        for (var key in importedData) {
            var datawithID = importedData[key];
            console.log("data with id", datawithID);
            datawithID.key = key;
            console.log("key", key);
            datawithID.movieRefs=movieRefs;
            importArray[importArray.length] = datawithID;
        }
        var objectForTemplate = {movieImg: importArray};
        console.log("objectForTemplate", objectForTemplate);
          importArray = [];



      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
      }
  };
});