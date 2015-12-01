define(function(require) {
  var $ = require("jquery");
  var Firebase = require("firebase");
  var Q = require("q");
  var userStorage = require("5-user-data-storage");
  var popUnwatched = require("populateUserUnwatched");
  //load handlebars template
  var templates = require("3-loadtemplates");
  var fbMovies = require("movies-to-FB");

  return {
    filterUnwatched: function(e) {
      popUnwatched.popUnwatched();
      console.log("run?");
        //set up a few variables
            var data = {}; 
            var title = $("#movieToSearch").val();  
            //sets up deferred object for promise
            var deferred = Q.defer();
            console.log("searched for ", title );
            
            $.ajax({ 
                type: "GET",
                dataType: "json",
                url: "http://www.omdbapi.com/?s=" + title
              })

            //when done do the following:
            .done(function(data) {    
              // pass the results 
              deferred.resolve(data);
              console.log("data", data, length);
              
              $("#view-user-unwatched").html(templates.findMovie(data));
            })

            // if the call errors
            .fail(function(xhr, status, error) {
              deferred.reject(error);
            });

            return deferred.promise;
    },
  }
});
      
