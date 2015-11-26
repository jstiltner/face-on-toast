define(function(require) {
    var $ = require("jquery");
    var Firebase = require("firebase");
    var Q = require("q");

  //handlebars templates
    var templates = require("3-loadtemplates");
    var userStorage = require("5-user-data-storage");
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
				console.log("imported Data", importedData );
				var movieRefs = [];
				for (var key in importedData) {
			      var datawithID = importedData[key];
			      datawithID.key = key;
			      datawithID.movieRefs=movieRefs;
			      importArray[importArray.length] = datawithID;
				}
			  var objectForTemplate = {movieImg: importArray};
			  	importArray = [];
			  $("#view-user-home").html(templates.userhome(objectForTemplate));
			  $("#view-user-home").show();
			  $("#view-find-movie").hide();
			  $("#view user-watched").hide();
			  $("#view-user-unwatched").hide();
			  $("#view-search-my-movie").hide();
			  $("#view-find-search-results").hide();
			  console.log("objectForTemplate" ,objectForTemplate);



			}, function (errorObject) {
			  console.log("The read failed: " + errorObject.code);
			});
	    }
	};
});