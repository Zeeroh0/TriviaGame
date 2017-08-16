

// //************* PSUEDO CODE ***************** // 

// Trivia Game
// Need theme/topic

// Looks like all activity takes place mostly in one main box
// Begins w just a title and a start button
	// Each question has a time remaming countdown
		// Under that is the question
		// Under that are 4 possible answers for the user to click on 
		// When the user selects an answer, the timer freezes
		// 	If user clicks on wrong answer:
		// 		have the box change to some "Wrong Answer!" notification
		// 		display correct answer
		// 		let this last for about 5 seconds then start next question
		// 	If clicks right answer: 
		// 		inform user "Correct" etc
		// 		lasts 5 seconds, then moves on 
		// 	If the timer runs out: 
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






		// Weather Questions

		// 	1) Which is safest during a tornado? C
		// 	a) Inside a car
		// 	b) Under an overpass
		// 	c) In a ditch
		// 	d) Under a tree

		// 	2) Which kills more people every year? B 
		// 	a) Lightning
		// 	b) Floods
		// 	c) Tornadoes
		// 	d) Hurricanes

		// 	3) Which type of cloud is highest in the atmosphere? A 
		// 	a) Cirrus
		// 	b) Altostratus
		// 	c) Cumulus
		// 	d) Nimbostratus

		// 	4) Which type of cloud is most likely to produce rain? D 
		// 	a) Cirrus
		// 	b) Altocumulus
		// 	c) Cirrostratus
		// 	d) Cumulus

		// 	5) Which type of cloud produces lightning? B 
		// 	a) Altostratus
		// 	b) Cumulonimbus
		// 	c) Cirrocumulus
		// 	d) Nimbus

		// 	6) Which time of day is the best for tornado development? C 
		// 	a) 6:00am - 10:00am 
		// 	b) 8:00pm - midnight
		// 	c) 3:00pm - 6:00pm
		// 	d) Noon - 4:00pm

		// 	7) True or false: Tornadoes do not form in temperatures lower than 50 degrees Fahrenheit. F 

		// 	8) True or false: A tornado that forms over water is called a Waterdevil. F 

		// 	9) True or false: Cold air is heavier than warm air. T 

		// 	10) For golf-ball sized hail, a storms updraft must be: A
		// 	a) 70 mph
		// 	b) 20 mph
		// 	c) 50 mph
		// 	d) Does not need an updraft.


