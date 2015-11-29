define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");
  var Q = require("q");
  var userStorage = require("5-user-data-storage");
    
  var moviesArray = [];

  $("body").on('click', '.add-movie', function(e){
    var movieRefID = this.id;
    console.log("click", this.id);
    var nameRef = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid());
    console.log("userStorage.getUid()", userStorage.getUid());
    // nameRef.child("movieRefs").push(movieRefID);
    nameRef.child(movieRefID).set({
      'watched':false,
      'rating': 0
      });
    $(this).parent().remove();
  }); /* end of 'add' movie button eventhandler */

  return {
    showAddedMovies: function(profileID) {
      var ref = new Firebase("https://faceontoast.firebaseio.com");

      ref.child("users").once("value", function(snapshot) {
        var users = snapshot.val();
        console.log("users", users);

        var addedMovies = [];
        for (var key in users) {
          var userObj = users[key];
          userObj.key = key;
          userObj.addedMovies = addedMovies;
          moviesArray[moviesArray.length] = userObj;
        } /* end of for loop */ 
      }); /* end of snapshot */
    } /* end of showAddedMovies function */
  }; /* end of return */
}); /* end of define function */