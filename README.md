# Movie History
Movie History is created by Marybeth Snodgrass, Jason Stiltner, and Jessawynne Parker.

Requirements

Must have the ability to register a user in Firebase
Must have the ability to log in
You must use Firebase to store movies
You must be able to add movies
You must be able to remove movies
Each movie must have the following properties
Movie name
Year released
An array of major actors
An integer rating of 1-5
A boolean value that, if true, means that you have Watched the movie
You must be using Grunt to automate Javascript testing
You must be using Grunt to automate SASS compilation
Progress

Need to Install: Jquery, Lodash, Handlebars, HandleBars, Q, Firebase, Bootstrap, Stars (bootstrap plugin)

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
