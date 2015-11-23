define(function(require) {
    var $ = require("jquery");
    var Firebase = require("firebase");
    var q = "q";

  //handlebars templates
    var templates = require("3-loadtemplates");
    var userStorage = require("5-user-data-storage");
    var populateNewUserView = require("populateNewUserView");
    var populateUserHomeView = require("populateUserHomeView");

    return {
        //set up a few variables
        


        findMovie: function(title) { 
        var data; 
        var title = $("#movieToSearch").val;  
        console.log("title",title );  
        

            $.ajax({ 
                type: "GET",
                dataType: "json",
                url: "http://www.omdbapi.com/?t=" + title,
                success: function(data){
                console.log("data returned", data);
                return $.get(data.Poster); 
                },
            async:false,
            error: function() {
                return "Image not found.";
        }
            })
            }
    }
});
        
    
