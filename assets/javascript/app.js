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

var timeOutId;
var intervalId;

 var triviaQuiz = {
  counter : 0 ,
  intervalDurationForTrivias : 20000, 
  timeOutForResultGif : 1000,
  timeOutForTransitionGif : 2500,
  timeOutForNextTrivia : 5000,
  gifCorrect : "../images/wrong.gif",
  gifWrong :  "../images/wrong.gif",
  gifTimeIsUp : "../images/timeUp.gif",
  currentQuestion : "",
  currentMultipleChoices : "",
  currentAnswer : "",
  currentgifTransition : "",
  quizzes : [ 
    {
      question : "Which character was possessed by the demon in the 1973 movie The Exorcist?",
      choices : ["Father Karras", "Regan MacNeil", "Chris McNeil", "Buffy the Vampire Slayer"] ,
      answer : "Regan MacNeil",
      transitionGif : "../images/spiderWalk.gif",
    },
    {
      question : "Freddy Krueger's family residential address is 1428 ___ street",
      choices : ["Amytiville", "Palm", "Nightmare", "Elm"] ,
      answer : "Elm",
      transitionGif : "../images/freddy.gif",
    },
    {
      question : "Name of the villain in Texas Chainsaw Massacre",
      choices : ["Leatherface", "Oilyface", "Marco from Tropoja", "Chucky"] ,
      answer : "Leatherface",
      transitionGif : "../images/chainsaw.gif",
    },
    {
      question : "In The Exorcist and The Rite, this famous line was used by the priests to banish the devil",
      choices : ["Leave now and never come back", "The power of Christ compels you", "Go back to wherever you came from", "Say hello to my little friend"] ,
      answer : "The power of Christ compels you",
      transitionGif : "../images/compelling.gif",
    },
    {
      question : "Jason is the name of the villain in this movie series",
      choices : ["Scream", "Halloween", "The Ring", "Friday the 13th"] ,
      answer : "Friday the 13th",
      transitionGif : "../images/jason.gif",
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
  updateCorrectAnswersCount : function() {

  },
  updateWrongAnswersCount : function() {
    this.correctAnswersCount++;
  },
  displayQuiz : function() {
    this.wrongAnswersCount++;
  }
 } 

 //create a function to display the timer every second

 
 //create a function to display the question
function displayQuestion() {
  //first update the appropriate variable in the object
  triviaQuiz.updateCurrentQuestion();
  //return the question
  return triviaQuiz.currentQuestion;
}



 //create a function to display the multiple choices
function displayMultipleChoices() {
triviaQuiz.updateCurrentMultipleChoices();
return triviaQuiz.currentMultipleChoices
}

$(document).ready(function() {
  var question = displayQuestion();
  var choice_1 = displayMultipleChoices()[0];
  var choice_2 = displayMultipleChoices()[1];
  var choice_3 = displayMultipleChoices()[2];
  var choice_4 = displayMultipleChoices()[3];


  //on document load, display the first question, the multiple choices, and the timer ticking down from 20s to 0s
  $("#question").text(question);
  $("#choice_1").text("<> " + choice_1);
  $("#choice_2").text("<> " + choice_2);
  $("#choice_3").text("<> " + choice_3);
  $("#choice_4").text("<> " + choice_4);

});
 
