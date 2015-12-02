define(function(require) {
  var $ = require("jquery");
  var Firebase = require("firebase");

  var userStorage = require("5-user-data-storage");
  var popWatched = require("populatedUserWatched");
  //load handlebars template
  var templates = require("3-loadtemplates");

  return {
    filterSlider: function (e) {
      
      // Instantiate a slider
      var mySlider = $("input.slider").slider();

      // Call a method on the slider
      var value = mySlider.slider('getValue');

    }
  };
});