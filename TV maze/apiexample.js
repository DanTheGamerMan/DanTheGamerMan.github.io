var showCounter = 0; // access JSON of episodes


   function initialize() {
		document.getElementById("lightbox").style.display="none";
   } 
// initialize variables after page loads
window.onload = function() {
} // window.onload


// get data from TV Maze
function fetchData() {
  var search = document.getElementById("search").value;
  document.getElementById("main").innerHTML = "";
  
  
  fetch('http://api.tvmaze.com/search/shows?q=' + search)
    .then(response => response.json())
    .then(data => updatePage(data) 
    );
} // window.onload 
 

// change the activity displayed 
function updatePage(data) {
  var tvshow; 
  for (tvshow in data) {
    createTVShow(data[tvshow]);
  } // for


} // updatePage

// returns a string of formatted genres
function showGenres(genres) {
   var g;
   var output = "";
   for (g in genres) {
      output += "<br>" + genres[g]; 
   } // for
   output += "<br><br>";
   return output; 
} // showGenres

// constructs one TV show entry on homepage
function createTVShow (tvshowJSON) {
    var elemMain = document.getElementById("main");
    elemMain.classList.add("main");
	
    var elemDiv = document.createElement("div");
    elemDiv.classList.add("div");
	
	var elemImage = document.createElement("img");
    elemImage.classList.add("image");
	
    var elemShowTitle = document.createElement("h2");
    elemShowTitle.classList.add("showtitle"); // add a class to apply css
    
    var elemGenre = document.createElement("div");
	elemGenre.classList.add("genre");
	
    var elemRating = document.createElement("div");
	elemRating.classList.add("rating");
	
    var elemSummary = document.createElement("div");
    elemSummary.classList.add("summary");
	
    // add JSON data to elements
    elemShowTitle.innerHTML = "Title: " + tvshowJSON.show.name;
    elemGenre.innerHTML = "<div id='genre'>Genres:</div>" + showGenres(tvshowJSON.show.genres);
    elemRating.innerHTML = "Rating: " + tvshowJSON.show.rating.average;
    elemSummary.innerHTML = "Summary of the movie: " + tvshowJSON.show.summary;
    
    
    
    
    // add 5 elements to the div tag
    elemDiv.appendChild(elemShowTitle);  
    elemDiv.appendChild(elemGenre);
    elemDiv.appendChild(elemRating);
    elemDiv.appendChild(elemSummary);
    elemDiv.appendChild(elemImage);
	
	
    
	// get id for show and add episode list
	var showId = tvshowJSON.show.id;
	fetchEpisodes(showId, elemDiv);
	
    // add this entry to main
    elemMain.appendChild(elemDiv);
    
} // createTVShow

// fetch episodes
	function fetchEpisodes(showId, elemDiv){
		
		fetch('https://api.tvmaze.com/shows/' + showId + '/episodes')
	.then(response => response.json())
	.then(data => showEpisodes(data, elemDiv));
	}//Fetch Episodes
	
	
	
	//data - json containing all episodes in the show
	//elemDiv - div containing all info about show
	function showEpisodes (data, elemDiv) {
	
	showCounter ++;
	var elemEpisodes = document.createElement("div");
	elemEpisodes.classList.add("episode")
	var output = "<div>";
	
	//add a link to each episode
    for (episode in data) {
		
		if(data[episode].image){
			var image = data[episode].image.medium;
			var name = (data[episode].name).replaceAll("'","&apos;").replaceAll('"','\\"');
			var season = data[episode].season;
			var number = data[episode].number;
			var summary = data[episode].summary.replaceAll("'","&apos;").replaceAll('"','\\"');
			console.log(data[episode].summary)
			output += "<li><a href='javascript:showLightBox(\"";
			output += name + "\",\"";
			output += image + "\",\"";
			output += "Season " + season + "\",\"";
			output += "Episode " + episode + "\",\"";
			output += "Summary: " + summary;
			output += "\")'>";
			output += name;
			output += "</a></li>";
		}
		
		
		
		episodeJSON = data[episode];
    }//for
	
	
	output += "</div>";
	//add output to innter html of elemEpisodes
	elemEpisodes.innerHTML = output;
	
	//add list to webpage
	elemDiv.appendChild(elemEpisodes);
	
}//Show episodes

//show lightbox showing episode data in episodeJSON
function showLightBox(name, img, season, number, summary){
     document.getElementById("lightbox").style.display = "block";
     document.getElementById("message").innerHTML = "<img src='" + img + "' alt='episode image'>"; 
	 document.getElementById("message").innerHTML += "<p>" + name + "</p>";    
	 document.getElementById("message").innerHTML += "<p>" + season + "</p>";
	 document.getElementById("message").innerHTML += "<p>" + number + "</p>";
	 document.getElementById("message").innerHTML += "<p>" + summary + "</p>";
	 document.body.style.overflow='hidden';
} // showLightBox 

 // close the lightbox
 function closeLightBox(){
     document.getElementById("lightbox").style.display="none";
	 document.body.style.overflow='auto';
 } // closeLightBox 
















