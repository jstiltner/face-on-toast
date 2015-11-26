define(function(require) {
  var $ = require("jquery");
  var Firebase = require("firebase");

  var userStorage = require("5-user-data-storage");
  var popWatched = require("populatedUserWatched");
  //load handlebars template
  var templates = require("3-loadtemplates");

  return {
    filterWatched: function (e) {
      e.preventDefault();
      var movie = $(this).parents('.movie');
      post('/movie/' + $(this).data('id') + '/watched', function(data){
        movie.fadeOut();
      });
      popWatched.popWatched();
    }
  };
});
