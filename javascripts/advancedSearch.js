define(function(require){
	var userStorage = require ("5-user-data-storage");
	var usersMovies;
	return{
		findMovie: function(fn){

	var title = $("#movieToSearch").val();  
      var data = {};  
	// grab snapshot of firebase
	var usersMoviesRef = new Firebase('https://faceontoast.firebaseio.com/users/' + userStorage.getUid());
	usersMoviesRef.on("value", function(snapshot) {
		 usersMovies = snapshot.val();
		 console.log("usersMovies", usersMovies);

	//ajax call to omdb search engine 
	$.ajax({ 
            type: "GET",
            dataType: "json",
            url: "http://www.omdbapi.com/?s=" + title})
		.done(function (data) {    
			console.log("data", data);
			for (i=0; i<data.Search.length; i++){
			
				var thisResultId = data.Search[i].imdbID;
			}		

			// check for imdbID of each movie in OMDB results against the imdbIDs in FB:
			userStorage.getUid();

			
		});
				
			// that path on FB exists
			// if (path !== null){

				// then look for the "watched path"
			
				// if the watched path exists
				// if (watchedPath !== null){	
					// then look at the ratings path
			
					// display the saved ratings result beneath movie poster
				// else (the watched path does NOT exist)
				// }
			
				// display the movie poster with the watched button for user to click
			
			// else (that path on FB does not exist) === null
			// } 
			
			// display the add movie button beneath the movie poster
			// })
		});
	}
}
});
		
