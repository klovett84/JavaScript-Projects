// Add two numbers
function add() {
    var addAnswer = 45 + 62;
    document.getElementById("addition").innerHTML = "45 + 62 = " + addAnswer;
}

// Subtract one number from another
function subtract() {
    var subtractAnswer = 45 - 62;
    document.getElementById("subtraction").innerHTML = "45 - 62 = " + subtractAnswer;
}

// Multiply two numbers
function multiply() {
    var multiplyAnswer = 45 * 62;
    document.getElementById("multiplication").innerHTML = "45 * 62 = " + multiplyAnswer;
}

// Divide one number by another
function divide() {
    var divideAnswer = 45 / 62;
    document.getElementById("division").innerHTML = "45 / 62 = " + divideAnswer;
}

// Multiple operations put together
function math() {
    var mathAnswer = 5 * 4 / 3 + 2 - 1;
    document.getElementById("multiple-operations").innerHTML = "5 * 4 / 3 + 2 - 1 = " + mathAnswer;
}

// (Dividend - modulus) / divisor
function modulus() {
    var modulusAnswer = 9 % 2;
    document.getElementById("division-remainder").innerHTML = "9 / 2 = " + ((9 - modulusAnswer) / 2) + " (remainder " + modulusAnswer + ")";
}

// Invert number
function negate() {
    var positive = 8
    var negateAnswer = -positive;
    document.getElementById("negation").innerHTML = "8 inverse = " + negateAnswer;
}

// Increment by 1
function increment() {
    var incrementAnswer = 11;
    incrementAnswer++;
    document.getElementById("incrementation").innerHTML = "11++ = " + incrementAnswer;
}

// Decrement by 1
function decrement() {
    var decrementAnswer = 11;
    decrementAnswer--;
    document.getElementById("decrementation").innerHTML = "11-- = " + decrementAnswer;
}

// Generate random number
function random() {
    var randomAnswer = (Math.random() * 100 );
    document.getElementById("random-number").innerHTML = "Random number = " + randomAnswer;
}

// Print Euler's number
function euler() {
    var eulerAnswer = Math.E;
    document.getElementById("eulers-number").innerHTML = "Euler's number = " + eulerAnswer;
}