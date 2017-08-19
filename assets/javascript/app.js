$(document).ready(function() {

//GLOBAL VARIABLES
//Questions
var questionObject = {
		
		[
			question: "Which is safest during a tornado?",
			a: "Inside a car",
			b: "Under an overpass",
			c: "In a ditch",
			d: "Under a tree",
		],
		q2:
		{
			question: "Which kills more people every year?", 
			a: "Lightning",
			b: "Floods",
			c: "Tornadoes",
			d: "Hurricanes",
		},
		q3:
		{
			question: "Which type of cloud is highest in the atmosphere?",
			a: "Cirrus",
			b: "Altostratus",
			c: "Cumulus",
			d: "Nimbostratus",
		},
};

//Timer stuff
var countdown;

//Player Stats
var correct = 0;
var wrong = 0;
var unanswered = 0;
var totalQuestions = 0;



// FUNCTIONS
console.log(questionObject.q3);

for (var i = 0; i < 3; i++) {
	var x = questionObject.q + i;
	console.log(x);
}

//Start the game. 
var startGame = function() {
	//reset and show timer
	//show q1
	//show possible answers
	//reset Player Stat variables
}







// MAIN PROCESS

//Click the Start button
$("startBTN").click(function() {
	//Hide the start button
	//begin the game on the first question
	startGame();
	//start the timer
});


// When totalQuestions === 3, show player stats
when (totalQuestions === 3) {
	var playerStats = function () {
		$(".playerStats").html(""); 
	}
}


};

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


//More questions
// q4:
// {
// 	question: "Which type of cloud is most likely to produce rain?",
// 	a: "Cirrus",
// 	b: "Altocumulus",
// 	c: "Cirrostratus",
// 	d: "Cumulus",
// },
// q5:
// {
// 	question: "Which type of cloud produces lightning?", 
// 	a: "Altostratus",
// 	b: "Cumulonimbus",
// 	c: "Cirrocumulus",
// 	d: "Nimbus",
// },
// q6:
// {
// 	question: "Which time of day is the best for tornado development?", 
// 	a: "6:00am - 10:00am",
// 	b: "8:00pm - midnight",
// 	c: "3:00pm - 6:00pm",
// 	d: "Noon - 4:00pm",
// },
// q7:
// {
// 	question: "True or false: Tornadoes do not form in temperatures lower than 50 degrees Fahrenheit.",
// 	a: "True",
// 	b: "False", 
// },
// q8:
// {
// 	question: "True or false: A tornado that forms over water is called a Waterdevil.",
// 	a: "True",
// 	b: "False - It's called a Water Spout!", 
// },
// q9:
// {
// 	question: "True or false: Cold air is heavier than warm air.",
// 	a: "True",
// 	b: "False", 
// },
// q10:
// {
// 	question: "For golf-ball sized hail, a storms updraft must be:",
// 	a: "70 mph",
// 	b: "20 mph",
// 	c: "50 mph",
// 	d: "Does not need an updraft.",
// },

