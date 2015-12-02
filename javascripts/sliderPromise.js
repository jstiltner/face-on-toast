define(function(require) {
  var $ = require("jquery");
  var Firebase = require("firebase");
var Q = require("q");
  var userStorage = require("5-user-data-storage");
  var popFaves = require("populateFavesView");
  //load handlebars template
  var templates = require("3-loadtemplates");
  var fbToDOMfaves = require("FB-to-DOM-faves");
  var sliderEvent = require("sliderEvent");

  return {
    sliderPromise: function (faveMin) {
       sliderEvent.sliderEvent(faveMin)
        .then(function(data1) {
       console.log("sliderEventRan");
         return fbToDOMfaves.fbToDOMfaves(data1);
        })
        .then(function(data2) {
        console.log("fbToDOMfaves ran");
         return popFaves.popFaves(data2);
         })
        .done();
        console.log("popfaves ran");
    }
};
});