 require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'firebase': '../lib/bower_components/firebase/firebase',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

define(

  ["firebase", 
   "2-dependencies",
   "3-loadtemplates",
   "4-login",
   "5-user-data-storage", 
   "populatelogin",
   "eventhandlers"],
   
function(
  firebase, 
  dependencies, 
  loadTemplates,
  login,
  userDataStorage,
  populateLogin,
  eventhandlers) {
});

