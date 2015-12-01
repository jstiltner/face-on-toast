define(function(require){

    var $ = require("jquery");
    var fbToDOMfaves = require("fb-to-DOM-faves");
      var stars = require("stars");

    return {
        popFaves: function (fn) { 

          fbToDOMfaves.fbToDOMfaves();

          console.log("favorites function fired" );
          fbToDOMfaves.fbToDOMfaves();
          $(".rating").rating();

          $("#view-new-user").hide();
          $("#view-user-home").hide();
          $("#view-user-watched").hide();
          $("#view-user-unwatched").hide();
          $("#view-user-favorites").show();
          $("#view-find-movie").hide();
          $("#view-search-my-movie").hide();
          $("#view-find-search-results").hide();
        }
    };
});