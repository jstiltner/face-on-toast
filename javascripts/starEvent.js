define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");
  var b = require("bootstrap");
  var h = require("hbs");
  var Q = require("q");
  var userStorage = require("5-user-data-storage");

return {

    postFave: function (key, value, faveMin) { 
        var deferredFaves = Q.defer();
        var movieKey = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid()+ "/" + key);
        console.log('moviekey', movieKey);
        console.log('key', key);
        console.log('value', value);
        console.log("faveMin", faveMin);
        movieKey.child("rating").set(value);
        if (faveMin >= 7) {
            movieKey.child("faveMin").set(true);
        }
        return deferredFaves.promise;

    } /* end of watchedTrue function */

  }; /* end of return */

}); /* end of define function */


