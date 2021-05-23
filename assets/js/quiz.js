var startBtn = document.getElementById("startQuiz");
var score = 0;
var questions = document.getElementById("questions");
var questionAnswers = document.getElementById("questionanswers");
//var nextQuestion;
var nextBtn = document.getElementById("next-question");
var userInput = document.getElementById("user-answer");
var questionTitle = document.getElementById("question-title");
var answerChoices = document.getElementById("choices");
var timeEl = document.getElementById("countdown");
var scoreInput = document.getElementById("score-input");
var submitBtn = document.getElementById("submitscore");
var openingTitle = document.getElementById("opening-title");
var timeLeft = 100;

var i = 0;
var quizQuestions = [
  {
    question: "1. What engine has the most cylinders?",
    choices: ["V8", "I4", "I6", "V4"],
    correctAnswer: [0],
  },
  {
    question: "2. What engine is found inside a Toyota Supra?",
    choices: ["LS2", "RB26", "2JZ", "K24"],
    correctAnswer: [2],
  },
  {
    question: "3. How many cylinders does a V8 have?",
    choices: ["5", "6", "8", "4"],
    correctAnswer: [2],
  },
  {
    question: "4. What type of race goes in a straight line?",
    choices: ["Circuit racing", "Time attack", "Drag racing", "Drifting"],
    correctAnswer: [2],
  },
  {
    question: "5. When should you get an oil change?",
    choices: ["5,000 miles", "2,000 miles", "10,000 miles", "100 miles"],
    correctAnswer: [0],
  },
];

document.getElementById("score-input").style.display = "none";
document.getElementById("submitscore").style.display = "none";
document.getElementById("next-question").style.display = "none";

startBtn.addEventListener("click", function () {
  document.getElementById("startQuiz").style.display = "none";
  clearEverything();
  //display time left
  quizTime();
  displayQuestions();
  document.getElementById("next-question").style.display = "block";
});

function displayQuestions(question) {
  var body = document.body;
  var bodyEl = document.createElement("div");
  bodyEl.textContent = quizQuestions[i].question;
  body.appendChild(bodyEl);
  for (var a = 0; a < quizQuestions[0].choices.length; a++) {
    var bodyEl = document.createElement("button");
    bodyEl.setAttribute("id", a);
    bodyEl.innerHTML = quizQuestions[i].choices[a] + "\n";
    body.appendChild(bodyEl);
    console.log(a);
  }
  i++;
}

function quizTime() {
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timeEl.textContent = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timeEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timeEl` to an empty string
      timeEl.textContent = "";
      // Use `clearInterval()` to stop the time
      clearInterval(timeInterval);
    }
  }, 1000);
}

nextBtn.addEventListener("click", function nextBtn() {
  document.querySelector(".next-question");
  displayQuestions();
});
//create a time to countdown from 100

function correctAnswer() {
  button.getElementById("0").value;
}

function clearEverything() {
  document.getElementById("score-input").style.display = "none";
  document.getElementById("submitscore").style.display = "none";
  document.getElementById("opening-title").style.display = "none";
}
