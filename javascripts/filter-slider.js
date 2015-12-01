define(function(require) {
  var $ = require("jquery");
  var Firebase = require("firebase");

  var userStorage = require("5-user-data-storage");
  var popWatched = require("populatedUserWatched");
  //load handlebars template
  var templates = require("3-loadtemplates");

  return {
    filterSlider: function (e) {
      
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 10,
        values: [ 0, 10 ],
        slide: function( event, ui ) {  $( "#rating" ).val( "$" + ui.values[ 0 ] + " -   $" + ui.values[ 1 ] );
        }
        });

      $( "#rating" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $(  "#slider-range" ).slider( "values", 1 ) );

    }
  }


});