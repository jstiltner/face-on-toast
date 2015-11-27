define(function(require) {
    var Q = require("q");
    var Firebase = require("firebase");
    var userStorage = require("5-user-data-storage");
    var templates = require("3-loadtemplates");
    var $ = require("jquery");
  
    $("body").on('click','.watchedBtn', function (e){
		var parent = $(this).parent();
		var parentID = parent.attr("id");
		console.log("key", parentID);
        var movieKey = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid()+ "/" + parentID);
        movieKey.child("watched").push("true"); 
		// var ref = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid());
		// console.log("userStorage.getUid()", userStorage.getUid());    
		// console.log("I WORK YAYAYAY");
		// ref.child("movieRefs").once("value", function(snapshot) {
  //     		var movieRefs = snapshot.val();
  //     		console.log("movieRefs", movieRefs);
  //       	}   
	    $(this).remove();
      });
});

   /* return {
	    watchedBtn: function (profileID) {  
	    	console.log("watchedBtn Function fired");
	    	movieRefID.child("watched").once("value", function(snapshot) {
		    	var watched = snapshot.val();
		    	console.log("watched", watched);
		    	var watchedMovies = [];	
    		});
		}
  	};*/



 