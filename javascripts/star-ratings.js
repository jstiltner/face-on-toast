define(function(require) {
    var Firebase = require("firebase");
    var $ = require("jquery");
    var Q = require("q");

  //handlebars templates
    var templates = require("3-loadtemplates");
    var stars = require("stars");

    return {
        starRatings: function(fn) {   
        	$(".rating").rating();
        }
    };
});