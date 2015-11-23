define(function(require) {
  var currentUser = null;

  return {
    setUser: function(user) {
      currentUser = user;
    },
    getUser: function() {
      return currentUser;
    }
  };
});