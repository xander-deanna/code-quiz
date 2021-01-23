//quiz funtion //

// quiz questions //
var questions = [
    {
        title: "_____ is a very useful tool for used for debugging and printing content to the debugger:",
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


// ties timer to start click //
document.getElementById("start").onclick = function () {
    var sixtySeconds = 3,
        display = document.querySelector('.timer');
    startTimer(sixtySeconds, display);
};

// timer funtion //
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            display.textContent = "Times up!";
        }
    }, 1000);
}


// Not working
//  var quizContent = document.getElementsByTagName('quiz-box')[0],
//     questionContent = document.createElement('h3');
//     newQuestion.id = 'question';
//     body.appendChild(newQuestion);
//     choicesContent = document.createElement('p');
//     newQuestion.id = 'choices';
//     body.appendChild(newQuestion);