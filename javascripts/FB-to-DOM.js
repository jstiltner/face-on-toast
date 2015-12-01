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
	        console.log("fbToDOM function fired.");
	        //set up a few variables
            var userRef = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid());
			// Attach an asynchronous callback to read the data at our posts reference
			userRef.once("value", function(snapshot) {
				var importedData = snapshot.val();
			
			
				
				
				for (var key in importedData) {
			      var datawithID = importedData[key];
			      datawithID.key = key;
			      $.ajax({ 
                type: "GET",
                dataType: "json",
                url: "http://www.omdbapi.com/?i=" + key})
			      .done(function(data) {    
			      	console.log("data1", data);
			      });
			 		};
		 		console.log("after for in", importedData );	
			      
			 //      importArray[importArray.length] = datawithID;
				// }
			  var objectForTemplate = {movie: importedData};

			  console.log("objectForTemplate", objectForTemplate);
			  	importArray = [];

			  $("#view-user-home").html(templates.userhome(objectForTemplate));
			  $("#view-user-home").show();
			  $("#view-find-movie").hide();
			  $("#view-user-watched").hide();
			  $("#view-user-unwatched").hide();
			  $("#view-search-my-movie").hide();
			  $("#view-find-search-results").hide();
			  

			}, function (errorObject) {
			  console.log("The read failed: " + errorObject.code);
			});
	    }
	};
});