define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");
  var b = require("bootstrap");
  var h = require("hbs");
  var Q = require("q");

  var userStorage = require("5-user-data-storage");
  var popWatched = require("populatedUserWatched");
  //load handlebars template
  var templates = require("3-loadtemplates");

  return {
    filterSlider: function (parentStarID) {
      // var mySlider = $("input.slider").slider();
      // console.log("mySlider", mySlider);
      // var value = mySlider.slider(parentStarID);

      var deferredrating = Q.defer();
      var starKey = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid()+ "/" + parentStarID);
      var starz = starKey.child("rating"); 
      console.log("starz", starz);
    
      return deferredrating.promise;
      
    }
  };
});