var questions = [
  {
    question: "1. What engine has the most cylinders?",
    choices: ["V8", "I4", "I6", "V4"],
    correctAnswer: 0,
  },
  {
    question: "2. What engine is found inside a Toyota Supra?",
    choices: ["LS2", "RB26", "2JZ", "K24"],
    correctAnswer: 2,
  },
  {
    question: "3. How many cylinders does a V8 have?",
    choices: ["5", "6", "8", "4"],
    correctAnswer: 2,
  },
  {
    question: "4. What type of race goes in a straight line?",
    choices: ["Circuit racing", "Time attack", "Drag racing", "Drifting"],
    correctAnswer: 2,
  },
  {
    question: "5. When should you get an oil change?",
    choices: ["5,000 miles", "2,000 miles", "10,000 miles", "100 miles"],
    correctAnswer: 0,
  },
];
console.log(questions);

var i = 0;

var startBtn = document.getElementById("startQuiz");
function output() {
  var body = document.body;
  var bodyEl = document.createElement("div");
  //for (i; i < questions.length; i++)
  bodyEl.textContent = questions[i].question;
  body.appendChild(bodyEl);
  for (var j = 0; j < questions[0].choices.length; j++) {
    var bodyEl = document.createElement("button");
    bodyEl.setAttribute("class", j);
    bodyEl.textContent = questions[i].choices[j] + "\n";
    body.appendChild(bodyEl);
  }
  i++;
  console.log(
    questions,
    questions[2],
    questions[2].question,
    questions[2].choices[2]
  );
}
/*function outputA() {
  var body = document.body;

  for (var j = 0; j < questions[0].choices.length; j++) {
    var bodyEl = document.createElement("button");
    bodyEl.setAttribute("class", j);
    bodyEl.textContent = questions[i].choices[j] + "\n";
    body.appendChild(bodyEl);
  }
  console.log(
    questions,
    questions[2],
    questions[2].question,
    questions[2].choices[2]
  );
  i++;
}*/

startBtn.onclick = output;
//startBtn.onclick = outputA;

for (var k = 0; k < questions.length; k++) output();
//outputA();
//output();
//outputA();
//output();
//outputA();
//output();
//outputA();
//o//utput();
//outputA();
