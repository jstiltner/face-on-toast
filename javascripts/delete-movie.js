define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");
  var b = require("bootstrap");
  var h = require("hbs");
  var Q = require("q");
  var userStorage = require("5-user-data-storage");

  console.log("delete please");

  return {

    // deleteMovie: function(movieKey) {
    //   var deferredDelete = Q.defer();
    //   $.ajax({
    //     url: "https://faceontoast.firebaseio.com/users/" + userStorage.getUid() + "/movieRefs/" + movieKey,
    //     method: "DELETE"
    //   }) /* end of ajax call */
    //   .done(function(deleteMovieItem) {
    //   console.log("Movie was deleted!");
    //   deferredDelete.resolve(deleteMovieItem);
    //   })
    //   .fail(function(xhr, status, error) {
    //     deferredDelete.reject(error); 
    //   });

    // return deferredDelete.promise; 

    // }, /* end of deleteMovie function */
  
    // deleteMovie2: function(parentID) {
    //   var deferredDelete2 = Q.defer();
    //   $.ajax({
    //     url: "https://faceontoast.firebaseio.com/users/" + userStorage.getUid() + "/" + parentID,
    //     method: "DELETE"
    //   }) /* end of ajax call */
    //   .done(function(deleteMovieItem) {
    //   console.log("Movie was deleted!");
    //   deferredDelete2.resolve(deleteMovieItem);
    //   })
    //   .fail(function(xhr, status, error) {
    //     deferredDelete2.reject(error); 
    //   });

    // return deferredDelete2.promise; 

    // }  end of deleteMovie function 

  }; /* end of return */
    
}); /* end of define function */
    

    


      
      




