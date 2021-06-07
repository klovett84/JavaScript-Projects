// Loop to count to 15
function counter() {
    var digit = "";
    var count = 0;
    while (count < 16) {
        digit += count + "<br>";
        count++;
    }
    document.getElementById("loop").innerHTML = digit;
}

// For loop to print a list of instruments
var instruments = ["guitar", "drums", "piano", "bass", "violin", "trumpet", "flute"]
var content = "";
var y;
function forLoop() {
    for (y = 0; y < instruments.length; y++) {
        content += instruments[y] + "<br>"
    }
    document.getElementById("instrumentList").innerHTML = content;
}

// Print a value from an array
function cats() {
    var catArray = [];
    catArray[0] = "sleeping";
    catArray[1] = "playing";
    catArray[2] = "eating";
    catArray[3] = "purring";
    document.getElementById("cat").innerHTML = "The cat is " + catArray[2] + ".";
}

// Assign a const, change one property and add another
function getRecipe() {
    const breadRecipe = {
        type:"rye",
        mainIngredient: "flour",
        cookTime: "2 hours"
    };
    breadRecipe.type = "sourdough";
    breadRecipe.servings = 6;
    document.getElementById("recipe").innerHTML = "The main ingredient in this " + breadRecipe.type + " bread is " + breadRecipe.mainIngredient + ".";
}

// Print a value as a variable and as a let with block scope
function printLet() {
    var string = "This is a string.";
    document.getElementById("let").innerText = string;
    {
        let string = "This is the same string.";
        document.getElementById("let2").innerText = string;
    }
    document.getElementById("let3").innerText = string;
}

function randomNumber() {
    return (Math.random()*100).toFixed(2);
}
document.getElementById("number").innerHTML = randomNumber();

// Create an object with a let variable with a method for creating a description of the object
let song = {
    artist: "Lady Gaga ",
    genre: "pop ",
    year: "2021 ",
    description: function() {
        return "A " + this.genre + "song released in " + this.year + "by " + this.artist;
    }
};
document.getElementById("songObject").innerHTML = song.description();

// For loop counting up to 30 using break and continue statements
var text = "";
var i;
for (i = 0; i < 30; i++) {
    if (i === 7) {
        continue;
    }
    if (i === 15) {
        break;
    }
    text += i + "<br>"
}
document.getElementById("count").innerHTML = text;