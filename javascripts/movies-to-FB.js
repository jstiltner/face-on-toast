define(function(require) {
  var Q = require("q");
  var Firebase = require("firebase");
  var userStorage = require("5-user-data-storage");
  var $ = require("jquery");
      
  var moviesArray = [];

  $("body").on('click', '.add-movie', function(e){

    var movieRefID = this.id;
    console.log("click", this.id);

    var nameRef = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid());
    console.log("userStorage.getUid()", userStorage.getUid());


    console.log("I WORK YAYAYAY");
  
    nameRef.child("movieRefs").push(movieRefID);
  
        $(this).parent().remove();
  });

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
        }   
      });

      // likesRef.once('value', function (snapshot) {
      //   var usersLikes = snapshot.val();
      //   console.log("usersLikes", usersLikes);
      // }); 
          
      // var likedKey = {};

    }

  };


});