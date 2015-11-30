require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'firebase': '../lib/bower_components/firebase/firebase',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'stars': '../lib/bower_components/bootstrap-star-rating/js/star-rating'
  },
  shim: {
    'bootstrap': ['jquery'],
    'stars': ['bootstrap'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

define(

  ["firebase", 
  "2-dependencies",
  "3-loadtemplates",
  "5-user-data-storage",
  "delete-movie", 
  "populatelogin",
  "eventhandlers",
  "watched-FB-to-DOM"],
   
function(
  firebase, 
  dependencies, 
  loadTemplates,
  userDataStorage,
  deleteMovie,
  populateLogin,
  eventhandlers,
  watchedFBtoDOM) {
});

