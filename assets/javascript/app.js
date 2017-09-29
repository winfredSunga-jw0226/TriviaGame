//Horror Movie Trivia Game

//hold variables for set Interval and set Timeout. These will be used for assigining and clearing timeouts/timeouts
//create an object with these key-value pairs
  //counter, initialize to 0
  //interval duration for every trivia question (20s)
  //time out duration for Correct/Wrong/Time Is Up! gifs (1s)
  //time out duration for transition gifs (2.5s)
  //time out duration for the next trivia question (5s)
  //correct gif - same, doesnt change
  //wrong gif - same, doesnt change
  //time is up gif - same, doesnt change
  //current trivia question, initialized to question #1
  //current multiple choices, initialize to a list of choices for first question
  //current trivia answer, initialize to first answer
  //current transition gif, initialize to the transition gif which goes with the first trivia question
  //trivia - has a value of an object having these key value pairs - 
    //trivia_1 :  {  question : "..." ,
    //              choices : ["...","...","...","..."],
    //              answer : "..",
    //              transitionGif : "###.gif",
    //            }
    //trivia_2 :  {  question : "..." ,
    //              choices : ["...","...","...","..."],
    //              answer : "..",
    //              transitionGif : "###.gif",
    //            }
    //trivia_3 :  {  question : "..." ,
    //              choices : ["...","...","...","..."],
    //              answer : "..",
    //              transitionGif : "###.gif",
    //            }
  //correct answers, initialize to 0
  //wrong answers, initialize to 0  
  //function to update the current trivia question
  //function to update the current multiple choices
  //function to update the current trivia answer
  //function to update the current transition gif
  //function to update the correct answers
  //function to update the wrong answers



 var triviaQuiz = {
  counter : 0 ,
  intervalDurationForQuestions : 3000, //in milliseconds
  timeOutForResultGif : 1000, //in milliseconds
  timeOutForTransitionGif : 2500, //in milliseconds
  timeOutForNextTrivia : 5000, //in milliseconds
  gifCorrect : "assets/images/correct.gif",
  gifWrong :  "assets/images/wrong.gif",
  gifTimeIsUp : "assets/images/timeUp.gif",
  currentQuestion : "",
  currentMultipleChoices : "",
  currentAnswer : "",
  currentgifTransition : "",
  quizzes : [ 
    {
      question : "Which character was possessed by the demon in the 1973 movie The Exorcist?",
      choices : ["Father Karras", "Regan MacNeil", "Chris McNeil", "Buffy the Vampire Slayer"] ,
      answer : "Regan MacNeil",
      transitionGif : "assets/images/spiderWalk.gif",
    },
    {
      question : "Freddy Krueger's family residential address is 1428 ___ street",
      choices : ["Amytiville", "Palm", "Nightmare", "Elm"] ,
      answer : "Elm",
      transitionGif : "assets/images/freddy.gif",
    },
    {
      question : "Name of the villain in Texas Chainsaw Massacre",
      choices : ["Leatherface", "Oilyface", "Marco from Tropoja", "Chucky"] ,
      answer : "Leatherface",
      transitionGif : "assets/images/chainsaw.gif",
    },
    {
      question : "In The Exorcist and The Rite, this famous line was used by the priests to banish the devil",
      choices : ["Leave now and never come back", "The power of Christ compels you", "Go back to wherever you came from", "Say hello to my little friend"] ,
      answer : "The power of Christ compels you",
      transitionGif : "assets/images/compelling.gif",
    },
    {
      question : "Jason is the name of the villain in this movie series",
      choices : ["Scream", "Halloween", "The Ring", "Friday the 13th"] ,
      answer : "Friday the 13th",
      transitionGif : "assets/images/jason.gif",
    }
  ], 
  correctAnswersCount : 0,
  wrongAnswersCount : 0,
  updateCurrentQuestion : function() {
    this.currentQuestion = this.quizzes[this.counter].question;    
  },
  updateCurrentMultipleChoices : function() {
    this.currentMultipleChoices = this.quizzes[this.counter].choices;
  },
  updateCurrentAnswer : function() {
    this.currentAnswer = this.quizzes[this.counter].answer;
  },
  updateCurrentTransitionGif : function() {
    this.currentgifTransition = this.quizzes[this.counter].transitionGif;
  },
 } 

 var timeRemaining; 
 var timeOutId;
 var intervalId;

 //create a function to display the timer every second
 //funtion to start the quiz
 //function to stop the quiz

 
 //create a function to display the question
function getQuestion() {
  //first update the appropriate variable in the object
  triviaQuiz.updateCurrentQuestion();
  //triviaQuiz.currentQuestion = triviaQuiz.quizzes[triviaQuiz.counter].question;    

  return triviaQuiz.currentQuestion;
}

 //create a function to display the multiple choices
function getMultipleChoices() {
  triviaQuiz.updateCurrentMultipleChoices();
  //triviaQuiz.currentMultipleChoices = triviaQuiz.quizzes[triviaQuiz.counter].choices;

  return triviaQuiz.currentMultipleChoices;
}

//create a function to display the timer
function countdown() {
  
  //decrement the time remaining by 1 second after each call to this function
  timeRemaining--;

  //increment the counter by 1 
  //triviaQuiz.counter++;
    $("#timer").text("Time Remaining : " + timeRemaining + " seconds");
  
  //we want to stop the countdown and quiz once we reach 0 seconds
  if(timeRemaining === 0) {
    //stopQuiz();
    //showTimeIsOutGif();
    evaluateAnswer();
    //timeOutId = setTimeout(showTransitionGif, 2500);
    //timeOutId = setTimeout(showTransitionGif, triviaQuiz.timeOutForTransitionGif);
  }
}

function startQuiz() {

  //first remove the button 
  $("#start-button").remove();

  timeRemaining = triviaQuiz.intervalDurationForQuestions / 1000;
    
  //display the question, the multiple choices, and the timer ticking down from 20s to 0s
  var question = getQuestion();
  var choice_1 = getMultipleChoices()[0];
  var choice_2 = getMultipleChoices()[1];
  var choice_3 = getMultipleChoices()[2];
  var choice_4 = getMultipleChoices()[3];
  //get the answer and store in the appropriate object key
  triviaQuiz.updateCurrentAnswer();

  $("#timer").text("Time Remaining : " + timeRemaining + " seconds");
  $("#question").text(question);
  $("#choice_1").text("<> " + choice_1);
  $("#choice_2").text("<> " + choice_2);
  $("#choice_3").text("<> " + choice_3);
  $("#choice_4").text("<> " + choice_4);

  //display time left every 1 sev
  intervalId = setInterval(countdown, 1000);
  
}

function stopQuiz() {
  //this clears out the interval and removes texts
  clearInterval(intervalId);
}

//function to clear out the all texts (except headings) 
function removeAllTexts() {
  $("#timer").empty();
  $("#question").empty();
  $("#choice_1").empty();
  $("#choice_2").empty();
  $("#choice_3").empty();
  $("#choice_4").empty();
}

function evaluateAnswer() {
  stopQuiz();

  var answer = $(this).text();
  var correctAnswer = "<> " + triviaQuiz.currentAnswer;

  console.log("this is : " + $(this));
  console.log("answer : " + answer);
  console.log("correct answer : " + correctAnswer);
  console.log("type of answer : " + typeof(answer));

  removeAllTexts();

  if(answer === correctAnswer) {
    showCorrectGif();
    //$("#padding-2").html("<img src='" + triviaQuiz.gifCorrect + "' alt='answer is correct'>");
    triviaQuiz.correctAnswersCount++;
    timeOutId = setTimeout(showTransitionGif, 2000);
  } else if (answer !== correctAnswer && answer !== "") {
    showWrongGif();
    triviaQuiz.wrongAnswersCount++;
    timeOutId = setTimeout(showTransitionGif, 3500);
  } else {
    showTimeIsOutGif();
    triviaQuiz.wrongAnswersCount++;
    timeOutId = setTimeout(showTransitionGif, 2000);
  }

/*
  else if(typeof($(this)) === "object") {
    showTimeIsOutGif();
    triviaQuiz.wrongAnswersCount++;
    timeOutId = setTimeout(showTransitionGif, 2000);
  } else {
    showWrongGif();
    //$("#padding-2").html("<img src='" + triviaQuiz.gifWrong + "' alt='answer is wrong'>");
    //$("#padding-2").append("<h3>Correct Answer : " + triviaQuiz.currentAnswer + "</h3>");
    triviaQuiz.wrongAnswersCount++;
    timeOutId = setTimeout(showTransitionGif, 3500);
  }
*/  
}

function showTransitionGif() {
  triviaQuiz.updateCurrentTransitionGif()
  $("#padding-2").html("<img src='" + triviaQuiz.currentgifTransition + "' alt='gif from the movie'>");
}

function showWrongGif() {
  $("#padding-2").html("<img src='" + triviaQuiz.gifWrong + "' alt='answer is wrong'>");
  $("#padding-2").append("<h3>Correct Answer : " + triviaQuiz.currentAnswer + "</h3>");
}

function showCorrectGif() {
  $("#padding-2").html("<img src='" + triviaQuiz.gifCorrect + "' alt='answer is correct'>");
}

function showTimeIsOutGif() {
  $("#padding-2").html("<img src='" + triviaQuiz.gifTimeIsUp + "' alt='time is up'>");
  $("#padding-2").append("<h3>Correct Answer : " + triviaQuiz.currentAnswer + "</h3>");
}


//event listeners
$("#start-button").on("click", startQuiz);
$("#choice_1").on("click", evaluateAnswer);
$("#choice_2").on("click", evaluateAnswer);
$("#choice_3").on("click", evaluateAnswer);
$("#choice_4").on("click", evaluateAnswer);

// $("#choice_2").on("click", function(event){

// });





  

  //var timeLeft = displayTimer();
  
  

  
  // intervalQuestion = setInterval(displayTimer, 1000);

  // setTimeout(clearInterval(intervalQuestion),10000);





 
