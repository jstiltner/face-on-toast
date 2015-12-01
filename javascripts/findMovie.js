define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");
  var Q = require("q");

  //handlebars templates
  var templates = require("3-loadtemplates");
  var userStorage = require("5-user-data-storage");
  var populateNewUserView = require("populateNewUserView");
  var populateUserHomeView = require("populateUserHomeView");

  return {

      findMovie: function(fn) { 
    //set up a few variables
        var dataForTemplate = {};
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
        var objectForTemplate = {movie: data.Search};   
          // pass the results 
          deferred.resolve(data);
          console.log("data", data.Search);
          $("#view-find-search-results").html(templates.findMovieSearchResults(objectForTemplate));
          $("#view-login").hide();
          $("#view-new-user").hide();
          $("#view-user-home").hide();
          $("#view-find-movie").hide();
          $("#view user-watched").hide();
          $("#view-user-unwatched").hide();
          $("#view-search-my-movie").hide();
          $("#view-find-search-results").show();
        })
        // if the call errors
        .fail(function(xhr, status, error) {
          deferred.reject(error);
        });

        return deferred.promise;
      }
    };
});
                
            
