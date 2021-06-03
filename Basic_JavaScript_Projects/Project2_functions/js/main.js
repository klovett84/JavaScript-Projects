// Change the color of a button's text after clicking
function greenText() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("green").innerHTML = result;
};

// Concatenate the string variable and print on HTML page
function stringConcatenate() {
    var string = "This string has ";
    string += "been concatenated."
    document.getElementById("concatenate").innerHTML = string;
}