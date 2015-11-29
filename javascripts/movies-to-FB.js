define(function(require) {
  var Q = require("q");
  var Firebase = require("firebase");
  var userStorage = require("5-user-data-storage");
  var $ = require("jquery");
      
  var moviesArray = [];

  $("body").on('click', '.add-movie', function(e){

    var movieRefID = this.id;
// Check to see if the movie already exists in FB database
// get movieRef via IMDBid path in FB
    var movieRef = new Firebase('https://faceontoast.firebaseio.com/movies/' + movieRefID);
    console.log("movieRef variable holds", movieRef );
// if path !== invalid
  movieRef.on("value", function(snapshot) {
  console.log("snapshot",snapshot.val() );
  if (snapshot.val() === null){



  // Ajax call to main OMDB for movie information
  var deferred = Q.defer();
    console.log("reached for info on movie:", movieRefID );
            $.ajax({ 
                type: "GET",
                dataType: "json",
                url: "http://www.omdbapi.com/?i=" + movieRefID})
            //when done do the following:
            .done(function(data) {    
              // pass the results 
              deferred.resolve(data);
  // Record results
            var title = data.Title;
            var year = data.Year;
            var actors = data.Actors;
            var imdbID = data.imdbID;
              var actorsArray = actors.split(", ");

  //Flash results to FB
        // build object to push to FB from data 
        var objectforFB = {
          'Title': title,
          'Year': year,
          'Actors': actorsArray
  
};
  console.log("objectforFB", objectforFB );
  var newMovieRef = new Firebase('https://faceontoast.firebaseio.com/movies/'+imdbID);      
    newMovieRef.set(objectforFB);

            // if the call errors
            })
            .fail(function(xhr, status, error) {
              deferred.reject(error);
            });

  }

});
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