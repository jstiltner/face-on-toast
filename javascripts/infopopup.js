define(function(require) {
var $ = require("jquery");
var Q = require("q");
var templates = require("3-loadtemplates");


console.log("infopopup.js loaded");

	return {
		popup: function(e){
		console.log("function fired" );
		var deferred = Q.defer();
            var movieRef = new Firebase('https://faceontoast.firebaseio.com/movies/' + e);
		movieRef.on("value", function(snapshot) {
		  var dataForTemplate = snapshot.val();
		  console.log("dataForTemplate", dataForTemplate );
		  $(".modal-body").html(templates.infomodal(dataForTemplate));
		}), function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		};
	}
};
});




		// var deferred = Q.defer();
		// console.log("popUp function fired" );
		// //popUp is the method built here.
		// // console log to see what's been passed in.	
		// console.log("e", e);
		
		// var deferred = Q.defer()
		// //fresh FB ref directed to the movie that was clicked on (via the e link)
		// var movieRef = new Firebase('https://faceontoast.firebaseio.com/movies/' + e);
		// deferred.resolve();
		// movieRef.once("value", function(snapshot) {
		// 	var movieDetails = snapshot.val();
		// 	console.log("importedData", movieDetails);

		// 	});
	 //      }	
	// }