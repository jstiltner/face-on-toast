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

  ["dependencies", "firebase", "login-form", "userStorage", "3-loadtemplates", "complete-profile", "adduser", "auth-storage", "addtnlinfo"], 
  function(dependencies, firebase, loginForm, userStorage, templates, completeProfile, adduser, auth, additionalinfo) {
})
