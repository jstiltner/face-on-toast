define(function(require) {
  var $ = require("jquery");
  var Firebase = require("firebase");

  var userStorage = require("5-user-data-storage");
  var popFaves = require("populateFavesView");
  //load handlebars template
  var templates = require("3-loadtemplates");

  return {
    filterFaves: function (e) {
        popFaves.popFaves();
    }
  };
});
