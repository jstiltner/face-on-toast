define(function(require){
	var userStorage = require ("5-user-data-storage");

	return{

	// grab snapshot of firebase
	// check for imdbID of each movie in OMDB results against the imdbIDs in FB
	// if that path on FB exists
		// then look for the "watched path"
		// if the watched path exists
			// then look at the ratings path
			// display the saved ratings result beneath movie poster
		// else (the watched path does NOT exist)
		// display the movie poster with the watched button for user to click
	// else (that path on FB does not exist) === null
	// display the add movie button beneath the movie poster
