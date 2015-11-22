define(function(require) {

//shows new user view after user clicks 'register' button
  $("body").on('click', "#register", function() {
    $("#view-login").hide();
    $("#view-new-user").removeClass("hidden");
    $("#view-user-home").hide();
    $("#view-find-movie").hide();
    $("#view user-watched").hide();
    $("#view-user-unwatched").hide();
    $("#view-search-my-movie").hide();
  });

//shows user home view after user clicks 'log in' button
  $("body").on('click', "#log-in", function() {
    $("#view-login").hide();
    $("#view-new-user").hide();
    $("#view-user-home").removeClass("hidden");
    $("#view-find-movie").hide();
    $("#view user-watched").hide();
    $("#view-user-unwatched").hide();
    $("#view-search-my-movie").hide();
  });

//
  $("body").on('click', "#", function() {
    $("#view-login").hide();
    $("#view-new-user").hide();
    $("#view-user-home").hide();
    $("#view-find-movie").removeClass("hidden");
    $("#view user-watched").hide();
    $("#view-user-unwatched").hide();
    $("#view-search-my-movie").hide();
  });

//
  $("body").on('click', "#", function() {
    $("#view-login").hide();
    $("#view-new-user").hide();
    $("#view-user-home").hide();
    $("#view-find-movie").hide();
    $("#view user-watched").removeClass("hidden");
    $("#view-user-unwatched").hide();
    $("#view-search-my-movie").hide();
  });

//
  $("body").on('click', "#", function() {
    $("#view-login").hide();
    $("#view-new-user").hide();
    $("#view-user-home").hide();
    $("#view-find-movie").hide();
    $("#view user-watched").hide();
    $("#view-user-unwatched").removeClass("hidden");
    $("#view-search-my-movie").hide();
  });

//
  $("body").on('click', "#", function() {
    $("#view-login").hide();
    $("#view-new-user").hide();
    $("#view-user-home").hide();
    $("#view-find-movie").hide();
    $("#view user-watched").hide();
    $("#view-user-unwatched").hide();
    $("#view-search-my-movie").removeClass("hidden");
  });
})