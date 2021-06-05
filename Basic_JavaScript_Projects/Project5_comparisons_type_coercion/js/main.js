// Typeof check
function typeOf() {
    var typeCheck = "sentence";

    document.getElementById("type").innerHTML = "A sentence is a type of: " + typeof typeCheck;
};

// Coercion
function coerce() {
    document.getElementById("coercion").innerHTML = "Twenty + 10 = " + "Twenty" + 10;
};

// Not a number
function zeroNaN() {
    document.getElementById("zero").innerHTML = "0 / 0 = " + 0/0;
};

function dogNaN() {
    document.getElementById("dog").innerHTML = "Is \"dog\" not a number? " + (isNaN("dog"));
};

function numNaN() {
    document.getElementById("num").innerHTML = "Is 42 not a number? " + (isNaN(42));
};

// Infinity floating point
function posInfinity() {
    document.getElementById("infinity").innerHTML = "2E344 = " + 2E344;
};

function negInfinity() {
    document.getElementById("neg-infinity").innerHTML = "-4E500 = " + -4E500;
};

// Booleans
function greaterThan() {
    document.getElementById("greater").innerHTML = "80 > 7 = " + (80 > 7);
};

function lessThan() {
    document.getElementById("less").innerHTML = "19 < 12 = " + (19 < 12);
};

// console.log
console.log(9 + 9);

console.log(4 > 5)

//Double equal signs
function equalTrue() {
    document.getElementById("equalT").innerHTML = "Is 6 == 6? " + (6 == 6);
};

function equalFalse() {
    document.getElementById("equalF").innerHTML = "Is 6 == 4?  " + (6 == 4);
};

// Triple equal signs
function tripleEqualTrue() {
    document.getElementById("3equalT").innerHTML = "Is 3 === 3?  " + (3 === 3);
};

function tripleEqualFalse() {
    document.getElementById("3equalF").innerHTML = "Is \"frog\" === 7?  " + ("frog" === 7);
};

function tripleEqualFalseValue() {
    document.getElementById("3equalFV").innerHTML = "Is \"2\" === 2?  " + ("2" === 2);
};

function tripleEqualFalseData() {
    document.getElementById("3equalFD").innerHTML = "Is \"bird\" === \"turtle\"?  " + ("bird" === "turtle");
};

// AND operators
function andTrue() {
    document.getElementById("andT").innerHTML = "If 11 = 11 and blue = blue, are both true?  " + (11 == 11 && "blue" == "blue");
};

function andFalse() {
    document.getElementById("andF").innerHTML = "If 11 = 11 and blue = red, are both true?  " + (11 == 11 && "blue" == "red");
};

// OR operators
function orTrue() {
    document.getElementById("orT").innerHTML = "Is either 12 = 16 or 45 = 45 true?  " + (12 == 16 || 45 == 45);
};

function orFalse() {
    document.getElementById("orF").innerHTML = "Is either square = triangle or 10 < 9 true?  " + ("square" == "triangle" || 10 < 9);
};

// NOT operators
function notTrue() {
    document.getElementById("notT").innerHTML = "Is 22 not greater than 67?  " + !(22 > 67);
};

function notFalse() {
    document.getElementById("notF").innerHTML = "Is 70 not 70?  " + !(70 == 70);
};