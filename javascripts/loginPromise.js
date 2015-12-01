define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");
  var b = require("bootstrap");
  var h = require("hbs");
  var Q = require("q");
  var login = require("4-login");
  var stars = require("stars");
  var deferred = Q.defer();

  return {
    login: function() { 
      console.log("promise is firing");
      login.loginFunct()
      .then(function (event) {
        console.log("then is firing", event);
      })
      .done();
    }
  };
});


    