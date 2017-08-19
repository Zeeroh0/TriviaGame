$(document).ready(function() {

//************GLOBAL VARIABLES************
//Questions
var x 	= 0;
var questionObject 	= [
		{	question: "Which is safest during a tornado?",
			answers: ["Inside a car", "Under an overpass", "In a ditch", "Under a tree"],
			correct: "In a ditch"},
		{	question: "Which kills more people every year?", 
			answers: ["Lightning", "Floods", "Tornadoes", "Hurricanes",],
			correct: "Floods"},
		{	question: "Which type of cloud is highest in the atmosphere?",
			answers: ["Cirrus", "Altostratus", "Cumulus",  "Nimbostratus",],
			correct: "Cirrus"},
		{	question: "Which type of cloud is most likely to produce rain?",
			answers: ["Cirrus", "Altocumulus", "Cirrostratus", "Cumulus"],
			correct: "Cumulus"},	
		{	question: "Which type of cloud produces lightning?", 
			answers: ["Altostratus", "Cumulonimbus", "Cirrocumulus", "Nimbus"],
			correct: "Cumulonimbus"},	
		{	question: "Which time of day is the best for tornado development?", 
			answers: ["6:00am - 10:00am", "8:00pm - midnight", "3:00pm - 6:00pm", "Noon - 4:00pm"],
			correct: "3:00pm - 6:00pm"},	
		{	question: "True or false: Tornadoes do not form in temperatures lower than 50 degrees Fahrenheit.",
			answers: ["True", "False"],
			correct: "False"},	
		{	question: "True or false: A tornado that forms over water is called a Waterdevil.",
			answers: ["True", "False"],
			correct: "False"},	
		{	question: "True or false: Cold air is heavier than warm air.",
			answers: ["True", "False"],
			correct: "True"},
		{	question: "For golf-ball sized hail, a storms updraft must be:",
			answers: ["70 mph", "20 mph", "50 mph", "Does not need an updraft."],
			correct: "70 mph"},
];

//Timer variables
var intervalId;
var countdown		= 15;

//Player Stats
var correct 		= 0;
var wrong 			= 0;
var unanswered 		= 0;
var totalQuestions	= 0;




// ************FUNCTIONS************

//----------Timer functions----------
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      countdown--;
      var currentTime = timeConverter(countdown);
      $(".countdown").html("<h2>" + currentTime + "</h2>");
      if (countdown === 0) {
        stop();
        $(".answers").html("<h2>Time's up! Better get faster on the next one!</h2>");   
        unanswered++;   
		setTimeout(clear, 5000);
      }
    }

    function stop() {
      clearInterval(intervalId);
    }

    function timeConverter(t) {
	    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
	    var minutes = Math.floor(t / 60);
	    var seconds = t - (minutes * 60);
	    if (seconds < 10) {
	    	seconds = "0" + seconds;
	    }
	    if (minutes === 0) {
	    	minutes = "00";
	    }
	    else if (minutes < 10) {
	    	minutes = "0" + minutes;
	    }
	    return minutes + ":" + seconds;
  }


//Start the game. 
	function startGame() {
		//reset Player Stat variables
		correct 		= 0;
		wrong 			= 0;
		unanswered 		= 0;
		totalQuestions	= 0;
		x				= 0;
		countdown		= 15;
		//hide start button
		$(".startBox").hide();
		//reset and show timer
		run();
		decrement();
	}

//select the first question
	function nextQuestion () {
		if (x < questionObject.length) {
			$(".question").html("<h3>" + questionObject[x].question + "</h3><br>");
			} 
		}
	
//display relavent answers
	function chooseAnAnswer () {
		if (x < questionObject.length) {
			for (var i = 0; i < questionObject[x].answers.length; i++) {
				$(".answers").append("<h4>" + questionObject[x].answers[i] + "</h4><br>");
			}
		}
	}

//function for actions after user has made their answer selection
	function clear () {
		//go to the next array index
		x++;
		//if we're at the end of the array,
		if (x === questionObject.length) {
			//show clean screen, show stats
			allDone();
		} 
		//otherwise, reset the clock and let's keep going!
		else {
			countdown 		= 15;
			$(".answers").empty();
			nextQuestion();
			chooseAnAnswer();
			run();
			decrement();
		}
	}
	
//function for when we've gone through the full array for questions
	function allDone () {
		stop();
		$(".countdown").empty();	
		$(".answers").empty();
		$(".question").empty();
		if (correct === 10) {
			$(".playerStats").append('<h2>Oh my goodness!</h2>');
			$(".playerStats").append('<h2>You ACED this!!!</h2>');
			$(".playerStats").append('<h2>Truly you are a <b>genius</b>!</h2>');
			$(".playerStats").append('<h2>You are a meteorologist amongst men!!</h2>');
		} else {
		$(".playerStats").append("<h2>All done, here's how you did.</h2>");
		$(".playerStats").append("<h3>Correct Answers: " + correct + "</h3>");
		$(".playerStats").append("<h3>Incorrect Answers: " + wrong + "</h3>");
		$(".playerStats").append("<h3>Unanswered: " + unanswered + "</h3>");
		$(".playerStats").append('<h2>Click to start again!</h2>');
		//Click on the playerStats div to start over
		$(".playerStats").click(startOver);
		}
	}


//Bring back the beginning button; clicking that button will restart the game.
	function startOver () {
		$(".startBox").show();
		$(".countdown").empty();
		$(".playerStats").empty();
	}




// ************MAIN PROCESS************

//Click the Start button
	$(".startBTN").on("click", function() {
		startGame();
		//begin the game on the first question
		nextQuestion();
		//show relative answer choices 
		chooseAnAnswer();
		//start the timer
	});


//What happens when the user selects an answer (H4 elements in the Answers Class area)
	$(".answers").on("click", "h4", function() {
			//define correct guess from our main object
			var correctanswer = questionObject[x].correct;
			//define user's selected guess where this = element that was clicked
			var userguess = ($(this).text());
			//stop and clear the countdown
			stop();
			$(".countdown").empty();
			//If they guess correctly
			if (correctanswer === userguess) {
				correct++;
				$(".question").html("<h2>You got it! The right answer was " + questionObject[x].correct + ".</h2>");
				$(".answers").empty();
				//only have this screen show for 5 seconds, then proceed clear, increase 
				//x in our main array to select next question and answers, and 
				//reset the countdown			
				setTimeout(clear, 2000);
			} 
			//any other guesses (wrong)
			else {
				wrong++;
				$(".question").html("<h2>Not quite. The right answer was " + questionObject[x].correct + ".</h2>");
				$(".answers").empty();
				setTimeout(clear, 2000);
			}
	});

});

// ************* PSUEDO CODE ***************** // 

	// Looks like all activity takes place mostly in one main box

	// Begins w just a title and a start button
	// When start button is clicked: 
		// Display the countdown
			// setTimeout(function, 30000) would give a 30 sec countdown
			// when they answer - whether right or wrong - usethe clearTimeout() to stop that countdown
				//this will need to be coded into each clickable response?
		// Display current question
		// Under that are 4 possible answers for the user to click on 
		//	 When the user clicks on an answer, the timer freezes
			// 	If user clicks on wrong answer:
			//		toalQuestions++
			//		wrong++
			// 		have the box change to some "Wrong Answer!" notification
			// 		display correct answer
			// 		let this last for about 5 seconds, then start next question
			// 	If clicks right answer: 
			//		toalQuestions++
			//		correct++
			// 		inform user "Correct" etc
			// 		lasts 5 seconds, then moves on 
			// 	If the timer runs out: 
			//		toalQuestions++
			//		wrong++
			// 		inform user "Out of time!"
			// 		display the correct answer
			// 		lasts 5 seconds, then moves on
	//Have a set number of questions. 
		//When they've answered enough questions, show them their stats
			//Correct Answers: 
			//Incorrect Answers: 
			//Unanswered:
	//Display a Star Over button on the stat screen.  That button should: 
		//Reset score 
			//correct answers
			//wrong answers
			//unanswered
			//Maybe have the opportunity to select a new topic? (this would be a diff questions object as detailed below)
		//Begin w new question (could just be cycling thru prev questions)

	//Variables
		//Questions object (maybe have a questions object, inside of which each question is it's own array w 4 answers)
			//var musicTrivia = {[Question1: answer1, answer2, answer3, answer4], 
		// 						 [Question2: answer1, answer2, answer3, answer4], 
		// 						 etc,};
		//generic values to use in functions:
			// current questions
			// current answer
			// other answers
		//Score variables:
			// correct answers
			// wrong answers
			// unanswered 
		//Need to toggle timer...
			//boolean value that switches true/false for new question/answered? 


//Weather quiz from http://www.angelfire.com/moon/weather_trivia/
	// Answers

	// 1 - C
	// 2 - B
	// 3 - A 
	// 4 - D
	// 5 - B
	// 6 - C
	// 7 - F
	// 8 - F
	// 9 - T 
	// 10- A 
