define(function(require) {
  var Q = require("q");
  var Firebase = require("firebase");
  var userStorage = require("5-user-data-storage");
  var $ = require("jquery");

  $("body").on('click', '.add-movie', function(e){

    var addedMovie = this.id
    console.log("click", this.id)

    var nameRef = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid());
    console.log("userStorage.getUid()", userStorage.getUid());


    console.log("I WORK YAYAYAY");

    // myName = $('#name').val();
    // myGender = $('#gender').val();
    // myAge = $('#age').val();
    // myLocation = $('#location').val();

  
    nameRef.set({movieRefs: addedMovie});
  
        $(this).parent().remove();
  });

  return {
    showAddedMovies: function(profileID) {
      var moviesArray = [];
      var ref = new Firebase("https://faceontoast.firebaseio.com");

      ref.child("users").once("value", function(snapshot) {
      var users = snapshot.val();
      console.log("users", users);

      var addedMovies = [];
      moviesArray = [];
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

  }

});