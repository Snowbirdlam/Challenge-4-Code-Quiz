let Start = document.querySelector(".startBtn button");

Start.addEventListener("click", function () {
    setTime()
    nextquestion()
})


var timer = document.querySelector(".Timing");

var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + ' seconds remaining';

        if (secondsLeft === 0) {
            timer.textContent = 'Time is up!'
            clearInterval(timerInterval);
        }
    }, 1000)
}


let Question = document.getElementById("Quiz")

let Question1 = {
    question: "What does JS stand for?",
    options: ["John Smith", "JavaScript", "JavaSource", "JavaScreen"],
    answer: "JavaScript"
};

let Question2 = {
    question: "When linking css to your html, what do you put after the 'rel=' spot?",
    options: ["css style", "style", "sheetstyle", "stylesheet"],
    answer: "stylesheet"
}

let Question3 = {
    question: "What do you start an index.html with?",
    options: ["!DOCSHEET html", "!Document html", "!DOCTYPE html", "!DOCSTYLE html"],
    answer: "!DOCTYPE html",
}

let Question4 = {
    question: "What does css stand for?",
    options: ["Cascading Style Sheets", "Computer Styling Sheets", "Cascading Sheets Style", "Computed Style Screen"],
    answer: "Cascading Style Sheets",
}

let Question5 = {
    question: "What does HTML stand for?",
    options: ["Hyper Texual Marking Language", "High Text Marking Language", "HTML", "Hyper Text Markup Language"],
    answer: "Hyper Text Markup Language",
}

let Question6 = {
    question: "What is the first index in an array?",
    options: ["1", "1.0", "0", "0.0"],
    answer: "0",
}

let Question7 = {
    question: "What is a Global Javascript Variable?",
    options: ["A variable declared outside a function", "A variable declared inside a function", "A variable declared in all functions", "A variable that shows a Globe image"],
    answer: "A variable declared outside a function",
}

let Question8 = {
    question: "What is the Javascript 'this' Method? Which answer is false?",
    options: ["Alone, 'this' refers to a global object", "In object method, 'this' refers to the object", "In functions, 'this' selects the function", "In an event, 'this' refers to the element that recieved the event"],
    answer: "In functions, 'this' selects the function",
}

let Question9 = {
    question: "Which is NOT a Javascript primitive data type?",
    options: ["Number", "String", "Boolean", "Object"],
    answer: "Object",
}

let Question10 = {
    question: "What is NOT a way to declare a variable?",
    options: ["Let", "var", "const", "div"],
    answer: "div",
}

let Question11 = {
    question: "What is one good way to use console.log?",
    options: ["Communicating with aliens", "Testing purposes", "Sending messages to someone", "Make code react to an external console device"],
    answer: "Testing purposes",
}

let Question12 = {
    question: "What does an EventListener do in javascript?",
    options: ["Bubbles everything to the parent element", "Concatenates everything you coded", "A function that waits for an event, then responds to it", "An Event where you listen"],
    answer: "A function that waits for an event, then responds to it",
}

let Question13 = {
    question: "What do you put in Git Bash when you want to make a note of your changes?",
    options: ["Git add .", "Git push", "Git pull", "Git commit-m"],
    answer: "Git commit-m",
}

let Question14 = {
    question: "What is the purpose of the `querySelector` method in JavaScript?",
    options: ["To select and modify HTML elements", "To define a new variable", "To declare a function", "To check the type of a variable"],
    answer: "To select and modify HTML elements",
}

let Question15 = {
    question: "How do you create a loop in Javascript?",
    options: ["for (i = 0; i < 10; i++) {}", "while (i < 10) {}", "do {} while (i < 10);", "All of the above"],
    answer: "for (i = 0; i < 10; i++) {}",
}

let Question16 = {
    question: "What is the correct way to add an image in HTML?",
    options: ["<img src='Image.jpg'>", "<image>image.jpg</image>", "<picture src='image.jpg'></picture>", "<source>image.jpg</source>"],
    answer: "<img src='image.jpg'>",
}

let Question17 = {
    question: "Given the array [1, 2, 3], how do you access the element '2'?",
    options: ["array [0]", "array[1]", "array[2]", "array[3]"],
    answer: "array[1]",
}

let Question18 = {
    question: "How do you apply styles to an element only when the user hovers over it?",
    options: [":hover {}", ":active {}", ":focus {}", ":select {}"],
    answer: ":hover {}",
}

let Question19 = {
    question: "What is the correct way to write a comment in JavaScript?",
    options: ["/* This is a comment */", "//This is a comment//", "# This is a comment #", "--This is a comment--"],
    answer: "//This is a comment//",
}

let Question20 = {
    question: "What is the purpose of the z-index property in CSS?",
    options: ["Controls the transparency of an element", "Specifies the order of stacking elements along the z-axis", "Sets the width of an element", "Defines the vertical alignment of an element"],
    answer: "Specifies the order of stacking elements along the z-axis",
}

const questionarray = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11,
    Question12, Question13, Question14, Question15, Question16, Question17, Question18, Question19, Question20];
let index = 0
let checkanswer = document.querySelector(".check")

let nextquestion = function () {
    document.querySelector(".question").innerText = questionarray[index].question;
    document.querySelector(".A").innerText = questionarray[index].options[0];
    document.querySelector(".B").innerText = questionarray[index].options[1];
    document.querySelector(".C").innerText = questionarray[index].options[2];
    document.querySelector(".D").innerText = questionarray[index].options[3];

    document.querySelector(".A").onclick = checkquestion
    document.querySelector(".B").onclick = checkquestion
    document.querySelector(".C").onclick = checkquestion
    document.querySelector(".D").onclick = checkquestion
}


let checkquestion = function (e) {
    let clickedbutton = e.target
    let chosenanswer = clickedbutton.innerText
    let answercount = document.querySelector(".results");

    if (chosenanswer === questionarray[index].answer) {
        checkanswer.textContent = 'Correct!';
        correctAnswersCount++;
    } else {
        checkanswer.textContent = 'Incorrect!';
        decrementSeconds();
    }

    index++;
    if (index < questionarray.length) {
        nextquestion()
        answercount.textContent = 'You answered ' + correctAnswersCount + ' questions correctly.'
    }
}

let correctAnswersCount = 0;

let decrementSeconds = function () {
    secondsLeft--;
    timer.textContent = secondsLeft + ' seconds remaining'

    if (secondsLeft === 0) {
        timer.textContent = 'Time is up!'
        clearInterval(timerInterval);
        return
    }
}


let FirstLast = document.getElementById('Initials');
let save = document.getElementById('SaveButton')
var scores = JSON.parse(localStorage.getItem("scores")) || [];

function saveLastScore() {
    var saveScore = {
        FirstLast: FirstLast.value.trim(),
        correctAnswersCount: correctAnswersCount,
    };
    console.log(saveScore);
    scores.push(saveScore);
    localStorage.setItem('saveScore', JSON.stringify(saveScore));
}

function renderLastScore() {
    var LastScore = JSON.parse(localStorage.getItem('saveScore'));

    if (LastScore !== null) {
        document.getElementById('saved-Initials').textContent = LastScore.FirstLast;
        document.getElementById('saved-count').textContent = LastScore.correctAnswersCount + ' answered correctly';
    }
}

save.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Button clicked!")
    saveLastScore();
    renderLastScore();
});

function init() {
    renderLastScore();
}
init();
