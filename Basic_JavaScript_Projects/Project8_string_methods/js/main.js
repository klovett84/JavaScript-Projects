// Concatenate multiple strings into one and print
function concatString() {
    var part1 = "This is ";
    var part2 = "a ";
    var part3 = "concatenated string.";
    var sentence = part1.concat(part2, part3);
    document.getElementById("concatenate").innerHTML = sentence;
}

// Search for a value within a string, slice it by its number of characters, and print in uppercase
function sliceMethod() {
    var sentence = "Simple Sally sells seashells by the seashore";
    var sally = sentence.search("Sally");
    
    var section = sentence.slice(sally, (sally + "Sally".length));

    document.getElementById("slice").innerHTML = section.toUpperCase();
}

// Convert number to string
function toStringMethod() {
    var num = 32;
    document.getElementById("numToString").innerHTML = "String: " + num.toString();
}

// Format number to specified length
function precisionMethod() {
    var num = 4.73546524542342;
    document.getElementById("precision").innerHTML = num.toPrecision(4);
}

// Round number to a fixed decimal place
function fixedMethod() {
    var num = 4.73546524542342;
    document.getElementById("fixed").innerHTML = num.toFixed(2);
}

// Return primitive value of string
function valueOfMethod() {
    var food = "Soup";
    document.getElementById("valueResult").innerHTML = food.valueOf();
}