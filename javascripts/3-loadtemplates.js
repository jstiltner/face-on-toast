define(function(require){
  var hbs = require("hbs");
  var $ = require("jquery");

  return {
    // findmovie: require("hbs!../templates/template-findmovie"),
    login: require("hbs!../templates/template-login"),
    // newuser: require("hbs!../templates/template-newuser"),
    // searchmymovie: require("hbs!../templates/template-searchmymovie"),
    // userhome: require("hbs!../templates/template-userhome"),
    // userunwatched: require("hbs!../templates/template-userunwatched"),
    // userwatched: require("hbs!../templates/template-userwatched"),
  };

  function loginForm(loginObjects) {
    require([login], function (loginTemplate) {
      $("#view-login").html(loginTemplate(loginObjects));
    });
  };

  loginForm();

});