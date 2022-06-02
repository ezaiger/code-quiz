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

// Stop timer once all questions are answered - timeLeft is the score

/* QUIZ SECTION */

// When 'Start Quiz' button is pushed, change text to first question

// When mouse hovers over button, background of button is changed

// Once a question is answered, change text to next question

// If answer is correct, display 'Correct!'
    // If answer is incorrect, display 'Wrong!'

// Once all questions are answered, or timer runs out, display 'All done!'
    // 'Your final score is (timeLeft).'
    // 'Enter initials: (input)' '<button>Submit</button>
    // This information needs to be stored?

/* HIGH SCORES SECTION */

// Display user input with score ranging from largest to lowest
    // Example: 1. AB - 22
    // Example: 2. JZ - 15

// <button>Go Back</button> <button>Clear High Scores</button>

/* QUESTION ARRAY: (Provided by courses.bootcampspot.com)
<h1>Commonly used data types DO NOT include:</h1>
<button>1. strings</button>
<button>2. booleans</button>
<button>3. alerts</button>
<button>4. numbers</button>

<h1>The condition in an if/else statement is enclosed with ____.</h1>
<button>1. quotes</button>
<button>2. curly braces</button>
<button>3. parenthesis</button>
<button>4. square brackets</button>

<h1>Arrays in JavaScript can be used to store ________.</h1>
<button>1. numbers and strings</button>
<button>2. orther arrays</button>
<button>3. booleans</button>
<button>4. all of the above</button>

<h1>String values must be enclosed within ____ when being assigned to variables.</h1>
<button>1. commas</button>
<button>2. curly braces</button>
<button>3. quotes</button>
<button>4. parenthesis</button>

<h1>A very useful tool used during development and debugging for printing content to the debugger is:</h1>
<button>1. JavaScript</button>
<button>2. terminal/bash</button>
<button>3. for loops</button>
<button>4. console log</button>
*/



