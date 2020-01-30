var choiceA = document.getElementById("optionA");
var choiceB = document.getElementById("optionB");
var choiceC = document.getElementById("optionC");
var choiceD = document.getElementById("optionD");

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");

var timer = document.getElementById("quizTime");

var questions = [{
    question: "1. Question is here ONE?",
    choiceA: "Hello",
    choiceB: "Hello",
    choiceC: "Hello",
    choiceD: "Hello",
    correct: "Hello"
}, {
    question: "2. Question is here TWO?",
    choiceA: "Umesh",
    choiceB: "Umesh",
    choiceC: "Umesh",
    choiceD: "Umesh",
    correct: "Umesh"
}, {
    question: "3. Question is here THREE?",
    choiceA: "Shrestha",
    choiceB: "Shrestha",
    choiceC: "Shrestha",
    choiceD: "Shrestha",
    correct: "Shrestha"
}, {
    question: "4. Question is here FOUR?",
    choiceA: "0123456789",
    choiceB: "0123456789",
    choiceC: "0123456789",
    choiceD: "0123456789",
    correct: "0123456789"
}, {
    question: "5. Question is here FIVE?",
    choiceA: "SMU Coding",
    choiceB: "SMU Coding",
    choiceC: "SMU Coding",
    choiceD: "SMU Coding",
    correct: "SMU Coding"

}];

function renderQuestion() {
    var q = questions[runningQuestion];

    question.textContent = q.question;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
};

start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    displayTimer();
    renderQuestion();
    quiz.style.display = "block";
};

//
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        score++;
        renderQuestion();
    } else {
        seconds = seconds - 5;
        renderQuestion();
    }

    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }

};

const lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var seconds = 60;
var score = 0;
var interval;

function displayTimer() {

    renderTime();
    interval = setInterval(function() {
        seconds--;
        if (seconds <= 0) {
            finalQuiz();
        }
        renderTime();
    }, 1000);
};

function renderTime() {

    timer.textContent = seconds;
};

function finalQuiz() {
    var highScoreName = prompt("Congratulations! " + score + " out of " + questions.length + "! Enter your name");
    localStorage.setItem()

}