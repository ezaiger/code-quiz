/* QUESTION ARRAY: (questions provided by courses.bootcampspot.com)*/
var startQuizBtn = document.querySelector()

const questionArr = [
    {
        text: 'Commonly used data types DO NOT include:',
        a: '1. strings',
        b: '2. booleans',
        c: '3. alerts',
        d: '4. numbers',
        answer: 'c'
    },
    {
        text: 'The condition in an if/else statement is enclosed with ____.',
        a: '1. quotes',
        b: '2. curly braces',
        c: '3. parenthesis',
        d: '4. square brackets',
        answer: 'b'
    },
    {
        text: 'Arrays in JavaScript can be used to store ____.',
        a: '1. numbers and strings',
        b: '2. other arrays',
        c: '3. booleans',
        d: '4. all of the above',
        answer: 'd'
    },
    {
        text: 'String values must be enclosed within ____ when being assigned to variables.',
        a: '1. commas',
        b: '2. curly braces',
        c: '3. quotes',
        d: '4. parentheses',
        answer: 'c'
    },
    {
        text: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        a: '1. JavaScript',
        b: '2. terminal/bash',
        c: '3. for loops',
        d: '4. console log',
        answer: 'd'
    },
]

/* TIMER SECTION */
// Create a timer that counts down, starting at 75 seconds
// Starter code from: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
var timeLeft = 75;
var countdownTimer = setInterval(function(){
  if(timeLeft <= 0){
    clearInterval(countdownTimer);
    document.getElementById("timer").innerHTML = "Finished";
  } else {
    document.getElementById("timer").innerHTML = "Time: " + timeLeft;
  }
  timeLeft -= 1;
}, 1000);

// Time needs to start once the 'Start Quiz' button is pushed

// For every correct answer, timer stays the same
    // For every wrong answer, deduct 10 seconds from the timer

// Stop timer once all questions are answered OR too many wrong answers are selected
    // timeLeft is the score

/* QUIZ SECTION */

// #start-quiz
// When 'Start Quiz' button is (clicked), change .code-quiz-wrapper to first question
function renderQuestion(){
    const question = document.createElement('div');
    const text = questionArr[questionCount].text;
    const a = questionArr[questionCount].a;
    const b = questionArr[questionCount].b;
    const c = questionArr[questionCount].c;
    const d = questionArr[questionCount].d;
    question.append(text, a, b, c, d);
    question.addEventListener("click", function(){
        if(event.target === questionArr[questionCount].answer){
            alert('Correct!');
            questionCount++
        }
    })
}
// When mouse hovers over button (a, b, c, d values), background of button is changed

// Once a question is answered (clicked), change text to next question (text)

// .answer-div:
    //If answer is correct, display 'Correct!'
    // If answer is incorrect, display 'Wrong!'

// Once all questions are answered, or timer runs out, display 'All done!'
    // 'Your final score is (timeLeft).'
    // 'Enter initials: (input)' '<button>Submit</button>
    // This information needs to be stored?

/* HIGH SCORES SECTION */
   
// Display user input with score ranging from largest to lowest (between 0-75)
    // Example: 1. AB - 22
    // Example: 2. JZ - 15

// <button>Go Back</button> <button>Clear High Scores</button>



