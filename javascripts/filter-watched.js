define(function(require) {
  var $ = require("jquery");
  var Firebase = require("firebase");

  var userStorage = require("5-user-data-storage");
  var populateUserHomeView = require("populateUserHomeView");
  //load handlebars template
  var templates = require("3-loadtemplates");

  $(body).on("click", "#watched" function(e){
    e.preventDefault();
    var movie = $(this).parents('.movie');
    $populateUserHomeView.post('/movie/' + $(this).data('id') + '/watched', function(data){
        movie.fadeOut();
    });
  });
});