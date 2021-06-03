// Print "Hello, world!" to document
document.write("Hello, world!<br>");

// Set string variable and create an alert
var x = "This is a string.";
// window.alert(x);

// Backslash (\) to allow quotation mark in string
document.write('Here\'s a string with an apostrophe.<br>');

// Plus sign to concatenate strings into one
var a = "This is "
var b = "a concatenated string.<br>";

document.write(a+b);

//Multiple variables declared in one statement
var color = "blue", shape = "square", animal = "dog";

//Colors of variable text changed
var color = color.fontcolor("blue");
var shape = shape.fontcolor("green");
var animal = animal.fontcolor("orange");

document.write(animal + "<br>");

//Variable with an expression
document.write(2+2);

//Change <p> color
function changeColor() {
    var text = "This text is blue.";
    var text = text.fontcolor("blue");
    document.getElementById("colorChange").innerHTML = text;
};