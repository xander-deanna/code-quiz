// global variables
var score = 0;
var questionIndex = 0;

// html DOM elements
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

//variables for the timer
var timer = document.querySelector("#start");
var currentTime = document.querySelector("#currentTime");
var secondsLeft = 61;
var holdInterval = 0;
var penalty = 5;
var ulCreate = document.createElement("ul");

// sounds linked through the html document
var wrongSound = document.getElementById("wrongSound");
var rightSound = document.getElementById("rightSound");
var endSound = document.getElementById("endSound");

// displays timer
start.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "00:" + secondsLeft;
            if (secondsLeft < 10) {
                currentTime.textContent = "00:0" + secondsLeft;
            }
            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                gameOver();
                endSound.play();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// questions, choices, and answers in an array
var questions = [
    {
        title: "_____ is a tool for used for debugging and printing content to the debugger:",
        choices: ["javaScript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "Is it possible to break JavaScript Code into several lines?",
        choices: ["yes, with the use of a backslash", "yes, with <br>", "yes, with the use of a forward slash", "no"],
        answer: "yes, with the use of a backslash"
    },
    {
        title: "Which is not a javaScript data type",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "Which of the following is an advantage of using JavaScript?",
        choices: ["less server interaction", "immediate feedback to the visitors", "increased interactivity", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?",
        choices: ["toLocaleLowerCase()", "toLowerCase()", "toString()", "substring()"],
        answer: "toLowerCase()"
    },
];

// renders questions and choices to page
function render(questionIndex) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    
    // to loop through entire questions array
    for (var i = 0; i < questions.length; i++) {
        // appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // appends questions and choices, and adds hr elements for aesthetics
    var rule = document.createElement("hr");
    questionsDiv.appendChild(rule);
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        var listBtn = document.createElement("btn")
        questionsDiv.appendChild(ulCreate);
        listBtn.textContent = newItem;
        ulCreate.appendChild(listItem);
        listItem.appendChild(listBtn);
        listBtn.setAttribute("class", "btn");
        listBtn.addEventListener("click", (compare));
    });
    var rule = document.createElement("hr");
    questionsDiv.appendChild(rule);
};

// compares the questions to choices (and evaluates if correct). 
// also plays sounds based on correctness
function compare(event) {
    var element = event.target;

    if (element.matches("btn")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            rightSound.play();
        // incorrect condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
            wrongSound.play();
        };
    };

    // Question Index determines number question user is on
    questionIndex++;
    if (questionIndex >= questions.length) {
        // All done will append last page with user stats
        gameOver();
        endSound.play();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    };
    questionsDiv.appendChild(createDiv);
};

// appends last page
function gameOver() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    // Heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Game Over!"

    questionsDiv.appendChild(createH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    // Calculates time remaining and replaces it with score
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    // Label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.setAttribute("class", "btn");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {
            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Travels to final page
            window.location.replace("./Highscores.html");
        };
    });
};