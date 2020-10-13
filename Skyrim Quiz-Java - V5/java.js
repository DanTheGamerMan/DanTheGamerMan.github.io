var currentQuestion = 0;
var score = 0;
var questions = [
   {
   "question": "Which company made Skyrim | Elder Scrolls V?",
	"a": "Bethesda Games Studios",
	"b": "KingsIsle Entertainment",
	"c": "Puffballs United",
	"d": "Mojang",
	"image":"quizimages/elder.jpg",
	"answer": "a"
   },
   {
	"question": "When was Minecraft created?",
	"a": "1996",
	"b": "2011",
	"c": "2009",
	"d": "2004",
	"image":"quizimages/mc.jpg",
	"answer": "c"
   },
   {
   "question": "When was Among Us first made?",
	"a": "2016",
	"b": "2020",
	"c": "2019",
	"d": "2018",
	"image":"quizimages/amongus.png",
	"answer": "d"
   },
   {
   "question": "The first ever version of Halo: CE was made by:",
	"a": "343 Studios",
	"b": "Bethesda Games Studios",
	"c": "Jeff Bezos",
	"d": "Bungie",
	"image":"quizimages/halo.jpg",
	"answer": "d"
   },
   {
   "question": "Which of the following is not a video game:",
	"a": "Sorry",
	"b": "Club Penguin",
	"c": "Shadow Fight 3",
	"d": "Pilot Wings",
	"image":"quizimages/shadow.png",
	"answer": "a"
   },
   {
   "question": "What was the theme of Minecraft 1.8",
	"a": "Combat",
	"b": "Oceans",
	"c": "Village and Pillage",
	"d": "Beautification",
	"image":"quizimages/village.jpg",
	"answer": "d"
   },
   {
   "question": "How do you finish Skyrim?",
	"a": "Beat Miraak",
	"b": "Kill Alduin",
	"c": "You don't",
	"d": "Complete all the quests",
	"image":"quizimages/Miraak.jpg",
	"answer": "c"
   },
   {
   "question": "How many Halo games are there?",
	"a": "10",
	"b": "16",
	"c": "21",
	"d": "13",
	"image":"quizimages/master.jpg",
	"answer": "d"
   },
   {
   "question": "What is #freefortnite?",
	"a": "A petition to remove Fortnite from existance",
	"b": "A rebellion against taxes placed by Apple and Google",
	"c": "A movement to free the creators of Fortnite from Prison",
	"d": "A joke",
	"image":"quizimages/fornite.jpg",
	"answer": "b"
   },
   {
   "question": "What are 'console wars'",
	"a": "An argument between Playstation and Xbox players",
	"b": "A tournament where different console players compete",
	"c": "Stupid",
	"d": "A and C",
	"image":"quizimages/download.png",
	"answer": "d"
   },
    {
   "question": "Would you like to try again?",
	"a": "Yes",
	"b": "Yes",
	"c": "Yes",
	"d": "Yes",
	"image":"quizimages/tryagain.jpg",
	"answer": "a"
   },
 ];
 
 //Register Service Worker
 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

 //Show/Hide timer
 function myFunction() {
  var x = document.getElementById("countdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
 
 //run code when body loads
   function initialize() {
		document.getElementById("lightbox").style.display="none";
		loadQuestion();
   }
 
 //Timer
  var timeleft = 25;
  var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft == 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "You're slowwww";
	message = "Hurry up!!";
	document.getElementById("message").innerHTML = message
	document.getElementById("lightbox").style.display="block";
  }
}, 1000);
 
 //Load Question
 function loadQuestion() {
	 
	 
	
	if (currentQuestion == 10 && score == 10) {
		message = "Your score is " + score + " / " + 10 + ". You are a true gamer! You know your trivia, and you should be proud!";
	}
	
	else if (currentQuestion == 10 && score == 9) {
		message = "Your score is " + score + " / " + 10 + ". Well done! You're an excellent and OG gamer!";
	}
	   
	else if (currentQuestion == 10 && score == 8) {
		message = "Your score is " + score + " / " + 10 + ". Well done! You're an excellent and OG gamer!";
	}
	
	else if (currentQuestion == 10 && score == 7) {
		message = "Your score is " + score + " / " + 10 + ". Not bad! You know what you're talking about!";
	}
	
	else if (currentQuestion == 10 && score == 6) {
		message = "Your score is " + score + " / " + 10 + ". Not bad! You know what you're talking about!";
	}
	
	else if (currentQuestion == 10 && score == 5) {
		message = "Your score is " + score + " / " + 10 + ". Cool! You got a fair understanding of games!";
	}
	
	else if (currentQuestion == 10 && score == 4) {
		message = "Your score is " + score + " / " + 10 + ". Cool! You got a fair understanding of games!";
	}
	
	else if (currentQuestion == 10 && score == 3) {
		message = "Your score is " + score + " / " + 10 + ". Uhhh.... Not passing any trivia quizzes anytime soon...";
	}
	
	else if (currentQuestion == 10 && score == 2) {
		message = "Your score is " + score + " / " + 10 + ". Uhhh.... Not passing any trivia quizzes anytime soon...";
	}
	
	else if (currentQuestion == 10 && score == 1) {
		message = "Your score is " + score + " / " + 10 + ". ...";
	}
	
	else if (currentQuestion == 10 && score == 0) {
		message = "Your score is " + score + " / " + 10 + ". You absolute disgrace to the gaming world";
	}
	else if (currentQuestion == 11) {
		location.reload();
	}
	
	// if on last question 
	if (currentQuestion == 10) {
	  document.getElementById("message").innerHTML = message
	  document.getElementById("lightbox").style.display="block";
	  document.getElementById("score").innerHTML = score + " / " + 10;
	}
	   
	   //Various responses to different scores
	   
	//Load image
	 var img = document.getElementById("image");
	 var preLoadImg = new Image();
	 preLoadImg.src  = questions[currentQuestion].image;
	 
	 preLoadImg.onLoad = function () {
		 img.width = this.width;
	 }
	 img.style.maxWidth = "500px";
	 img.src = preLoadImg.src;
	 
	//questions
   document.getElementById("question").innerHTML = questions[currentQuestion].question;
   document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
   document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
   document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
   document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
	 
	 let message = "";
	 
	 
  if (ans == questions[currentQuestion].answer) {
	  score = score + 1;

	  document.getElementById("score").innerHTML = score + " / " + 10;
	  

	  message = "Well Done! Your score is " + score + " / " + 10;
  } 


  else{
	  	  message = "Wrong! Your score is " + score + " / " + 10;
  }  
		//lightbox feedback
   	  document.getElementById("message").innerHTML = message
	  document.getElementById("lightbox").style.display="block";
	  
	  //move to next question
	  currentQuestion++;
	  loadQuestion();
	  

		
  
 }  // markIt
	

 

//close lightbox 
 function closeLightBox(){
	 document.getElementById("lightbox").style.display="none";
	 }
   



