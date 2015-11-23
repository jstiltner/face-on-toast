define(function(require) {
    var $ = require("jquery");
    var Firebase = require("firebase");
    var Q = require("q");

  //handlebars templates
    var templates = require("3-loadtemplates");
    var userStorage = require("5-user-data-storage");
    var populateNewUserView = require("populateNewUserView");
    var populateUserHomeView = require("populateUserHomeView");

    return {
        // getPoster: function(fn){
            // console.log("getposter fired and received ID of", data.IMDBid );
        
    findMovie: function(fn) { 
        //set up a few variables
            var data = {}; 
            var title = $("#movieToSearch").val();  
            //sets up deferred object for promise
            var deferred = Q.defer();
            console.log("searched for ", title );
            $.ajax({ 
                type: "GET",
                dataType: "json",
                url: "http://www.omdbapi.com/?s=" + title})
            //when done do the following:
            .done(function(data) {    
              // pass the results 
              deferred.resolve(data);
              console.log("data", data );
              $("#view-find-movie").html(templates.findMovieSearchResults(data));
            })
            // if the call errors
            .fail(function(xhr, status, error) {
              deferred.reject(error);
            });

            return deferred.promise;
        },

      // secondXHR: function(data) {
      //       var deferred = Q.defer();
      //       console.log("second XHR call fired", data);

      //     $.ajax({
      //       type: "GET",
      //       // dataType: "json",
      //       url: "http://img.omdbapi.com/?apikey=7c212437&i="+data.imdbID
            
      //     }).done(function(data) {
      //       deferred.resolve(data);

      //     }).fail(function(xhr, status, error) {
      //       deferred.reject(error);
      //     });

      //     return deferred.promise;
      //   }
    };      
});
                
            
