define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");
  var b = require("bootstrap");
  var h = require("hbs");
  var Q = require("q");
  var userStorage = require("5-user-data-storage");

	return {

		watchedTrue: function (parentID) { 
      var deferredWatched = Q.defer();
      var movieKey = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid()+ "/" + parentID);
        movieKey.child("watched").set(true); 
		
	    return deferredWatched.promise;

    } /* end of watchedTrue function */

  }; /* end of return */

}); /* end of define function */




 