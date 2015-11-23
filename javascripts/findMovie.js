define(function(require) {
    var $ = require("jquery");
    var Firebase = require("firebase");

  //handlebars templates
    var templates = require("3-loadtemplates");
    var userStorage = require("5-user-data-storage");
    var populateNewUserView = require("populateNewUserView");
    var populateUserHomeView = require("populateUserHomeView");

    return {
        findMovie: function(title) { 
            $.ajax({ 
                type: "GET",
                dataType: "json",
                url: "http://img.omdbapi.com/?apikey=7c212437&t=" + title,
                success: function(data){
                console.log("data returned", data);
                return $.get(data.Poster); 
            },
            async:false,
            error: function() {
                return "Image not found.";
            }
            });
        }
    };
});