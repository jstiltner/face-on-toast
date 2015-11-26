// define(function(require) {
//   var Q = require("q");
//   var Firebase = require("firebase");
//   var userStorage = require("5-user-data-storage");
//   var $ = require("jquery");
  
//   var movieRefID = this.id;
//   var nameRef = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid());
  
//   return {
//     addMovieBtn: function (event) {  
//       nameRef.child("movieRefs").push(movieRefID);
//       $(this).parent().remove();
//     }
//   };
// });