define(function(require){
  return {
    findmovie: require("hbs!../templates/templates-findmovie"),
    login: require("hbs!../templates/templates-login"),
    newuser: require("hbs!../templates/templates-newuser"),
    searchmymovie: require("hbs!../templates/templates-searchmymovie"),
    userhome: require("hbs!../templates/templates-userhome"),
    userunwatched: require("hbs!../templates/templates-userunwatched"),
    userwatched: require("hbs!../templates/templates-userwatched"),
  };

  function loginForm(loginObjects) {
    require([login], function (loginTemplate) {
      $("#view-login").html(loginTemplate(loginObjects));
    });
  };

  loginForm();

});