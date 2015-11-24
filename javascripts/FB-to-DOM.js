define(function(require) {
    var $ = require("jquery");
    var Firebase = require("firebase");
    var Q = require("q");

  //handlebars templates
    var templates = require("3-loadtemplates");
    var userStorage = require("5-user-data-storage");
    var populateNewUserView = require("populateNewUserView");
    var populateUserHomeView = require("populateUserHomeView");
	var importArray = [];

	return {
  
	    fbToDOM: function(fn) { 
	        console.log("fbToDOM function fired.  your butt stink.");
	        //set up a few variables
            //sets up deferred object for promise
            var userRef = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid()+ '/movieRefs');
			// Attach an asynchronous callback to read the data at our posts reference
			userRef.once("value", function(snapshot) {
				var importedData = snapshot.val();
				var movieRefs = [];
				for (var key in importedData) {
			      var datawithID = importedData[key];
			      datawithID.key = key;
			      datawithID.movieRefs=movieRefs;
			      importArray[importArray.length] = datawithID;
				}
			  console.log(importArray);
			}, function (errorObject) {
			  console.log("The read failed: " + errorObject.code);
			});
	    }
	};
});