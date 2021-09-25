# JavaScript-Projects
A collection of small JS projects.

## Basic JavaScript Projects
This is a set of pages demonstrating JavaScript fundamentals.

### Project 1: Expressions Alert
- Printing to document:
  ```javascript
  document.write("Hello, world!<br>");
  ```
  
- Declaring variables:
  ```javascript
  var x = "This is a string.";
  ```
  
- Alerts:
  ```javascript
  window.alert(x);
  ```
  
- Concatenation: 
  ```javascript
  var a = "This is "
  var b = "a concatenated string.<br>";
  document.write(a+b);
  ```
  
- Modifying DOM elements:
  ```javascript
  function changeColor() {
    var text = "This text is blue.";
    var text = text.fontcolor("blue");
    document.getElementById("colorChange").innerHTML = text;
   };
   ```
   
 ### Project 2: Functions
 ```javascript
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
  };
```

### Project 3: Math Operators
- Addition, subtraction, multiplication, division, modulus:
  ```javascript
  var addAnswer = 45 + 62;
  var subtractAnswer = 45 - 62;
  var multiplyAnswer = 45 * 62;
  var divideAnswer = 45 / 62;
  var modulusAnswer = 9 % 2;
  ```
  
- Combined operators:
  ```javascript
  var mathAnswer = 5 * 4 / 3 + 2 - 1;
  ```

- Number inversion:
  ```javascript
  function negate() {
    var positive = 8
    var negateAnswer = -positive;
    document.getElementById("negation").innerHTML = "8 inverse = " + negateAnswer;
  }
  ```

- Incremenation and decrementation:
  ```javascript
  function increment() {
    var incrementAnswer = 11;
    incrementAnswer++;
    document.getElementById("incrementation").innerHTML = "11++ = " + incrementAnswer;
  }
  
  function decrement() {
    var decrementAnswer = 11;
    decrementAnswer--;
    document.getElementById("decrementation").innerHTML = "11-- = " + decrementAnswer;
  }
  ```
  
- Random number generation:
  ```javascript
  function random() {
    var randomAnswer = (Math.random() * 100 );
    document.getElementById("random-number").innerHTML = "Random number = " + randomAnswer;
  }
  ```

### Project 4: Dictionaries
```javascript
// Create dictionary and print to page
function printDictionary() {
    //Define the dictionary
    var song = {
        Genre: "Disco",
        Tempo: "120 BPM",
        Key: "F Major",
        Year: 1972
    };

    // Delete Year KVP
    delete song.Year;

    // Attempt to print deleted KVP
    document.getElementById("dictionary").innerHTML = song.Year;
};
```

### Project 5: Comparison Operators
- Typeof:
  ```javascript
  function typeOf() {
    var typeCheck = "sentence";
    document.getElementById("type").innerHTML = "A sentence is a type of: " + typeof typeCheck;
  };
  ```
  
- Coercion:
  ```javascript
  function coerce() {
    document.getElementById("coercion").innerHTML = "Twenty + 10 = " + "Twenty" + 10;
  };
  ```

- Not a number
  ```javascript
  function zeroNaN() {
    document.getElementById("zero").innerHTML = "0 / 0 = " + 0/0;
  };

  function dogNaN() {
      document.getElementById("dog").innerHTML = "Is \"dog\" not a number? " + (isNaN("dog"));
  };

  function numNaN() {
      document.getElementById("num").innerHTML = "Is 42 not a number? " + (isNaN(42));
  };
  ```
  
- Infinity floating point:
  ```javascript
  function posInfinity() {
    document.getElementById("infinity").innerHTML = "2E344 = " + 2E344;
  };

  function negInfinity() {
      document.getElementById("neg-infinity").innerHTML = "-4E500 = " + -4E500;
  };
  ```
  
- Booleans:
  ```javascript
  function greaterThan() {
    document.getElementById("greater").innerHTML = "80 > 7 = " + (80 > 7);
  };

  function lessThan() {
      document.getElementById("less").innerHTML = "19 < 12 = " + (19 < 12);
  };
  ```
  
- Double equal signs:
  ```javascript
  function equalTrue() {
    document.getElementById("equalT").innerHTML = "Is 6 == 6? " + (6 == 6);
  };
  ```
  
- Triple equal signs:
  ```javascript
  function tripleEqualTrue() {
    document.getElementById("3equalT").innerHTML = "Is 3 === 3?  " + (3 === 3);
  };
  ```
  
- AND:
  ```javascript
  function andTrue() {
    document.getElementById("andT").innerHTML = "If 11 = 11 and blue = blue, are both true?  " + (11 == 11 && "blue" == "blue");
  };
  ```
  
- OR:
  ```javascript
  function orFalse() {
    document.getElementById("orF").innerHTML = "Is either square = triangle or 10 < 9 true?  " + ("square" == "triangle" || 10 < 9);
  };
  ```
  
- NOT:
  ```javascript
  function notFalse() {
    document.getElementById("notF").innerHTML = "Is 70 not 70?  " + !(70 == 70);
  };
  ```
  
### Project 6: Ternary Operators
- Ternary operator:
  ```javascript
   // Ternary operation to determine if old enough to vote
  function voteFunction() {
      var age, canVote;
      age = document.getElementById("age").value;
      canVote = (age < 18) ? "You are not old enough":"You are old enough";
      document.getElementById("vote").innerHTML = canVote + " to vote!";
  ```
  
- Objects:
  ```javascript
  // Creating and printing a "computer" object
  function Computer(manufacturer, type, operatingSystem) {
      this.computer_manufacturer = manufacturer;
      this.computer_type = type;
      this.computer_operatingSystem = operatingSystem;
  }

  var myComputer = new Computer("Dell", "laptop", "Windows 10");

  function printComputer() {
      document.getElementById("computer-container").innerHTML =
      "I use a " + myComputer.computer_manufacturer + " " + myComputer.computer_type + " running " + myComputer.computer_operatingSystem;
  }
  ```

### Project 7: Scope, Time, Function
- Global variable:
  ```javascript
  var text = "string";
  function printString1() {
      document.write("This is a " + text + "<br>");
  }

  function printString2() {
      document.write("This is also a " + text + "<br>");
  }

  printString1();
  printString2();
  ```
  
- Local variable:
  ```javascript
  function printNum1() {
    var num = 14;
    document.write(num + 10);
    console.log(num + 10)
  }

  function printNum2() {
      document.write(num + 40);
      console.log(num + 40);
  }

  printNum1();
  printNum2();
  ```
  
- Display time of day:
  ```javascript
  function whatTime() {
    var time = new Date().getHours();
    console.log(time)

    if (time < 6) {
        document.getElementById("time").innerHTML = "It's night!";
    }
    else if (time < 12) {
        document.getElementById("time").innerHTML = "It's morning!";
    }
    else if (time < 17) {
        document.getElementById("time").innerHTML = "It's afternoon!";
    }  
    else if (time < 20) {
        document.getElementById("time").innerHTML = "It's evening!";
    }  
    else {
        document.getElementById("time").innerHTML = "It's night!";
    }
  }
  ```

### Project 8: String Methods
- Concatenate multiple strings into one:
  ```javascript
  function concatString() {
    var part1 = "This is ";
    var part2 = "a ";
    var part3 = "concatenated string.";
    var sentence = part1.concat(part2, part3);
    document.getElementById("concatenate").innerHTML = sentence;
  }
  ```
  
- Search for a value within a string, slice it by its number of characters, and print in uppercase:
  ```javascript
  function sliceMethod() {
      var sentence = "Simple Sally sells seashells by the seashore";
      var sally = sentence.search("Sally");
      var section = sentence.slice(sally, (sally + "Sally".length));
      document.getElementById("slice").innerHTML = section.toUpperCase();
  }
  ```
  
- Convert number to string:
  ```javascript
  function toStringMethod() {
    var num = 32;
    document.getElementById("numToString").innerHTML = "String: " + num.toString();
  }
  ```
  
- Format number to specified length:
  ```javascript
  function precisionMethod() {
    var num = 4.73546524542342;
    document.getElementById("precision").innerHTML = num.toPrecision(4);
  }
  ```

- Roung number to fixed decimal place:
  ```javascript
  function fixedMethod() {
    var num = 4.73546524542342;
    document.getElementById("fixed").innerHTML = num.toFixed(2);
  }
  ```

- Return primitive value:
  ```javascript
  function valueOfMethod() {
    var food = "Soup";
    document.getElementById("valueResult").innerHTML = food.valueOf();
  }
  ```
  
### Project 9: Countdown Slideshow
- Image slideshow:
  ```javascript
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  ```
  
- Countdown timer:
  ```javascript
  function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML - seconds;
        setTimeout(tick, 1000);

        if(seconds == -1) {
            alert("Time's up!")
        }
    }
    tick();
  }
  ```

### Project 10: Loops Arrays
- While loop:
  ```javascript
  function counter() {
    var digit = "";
    var count = 0;
    while (count < 16) {
        digit += count + "<br>";
        count++;
    }
    document.getElementById("loop").innerHTML = digit;
  }
  ```
  
- For loop:
  ```javascript
  var instruments = ["guitar", "drums", "piano", "bass", "violin", "trumpet", "flute"]
  var content = "";
  var y;
  function forLoop() {
    for (y = 0; y < instruments.length; y++) {
        content += instruments[y] + "<br>"
    }
    document.getElementById("instrumentList").innerHTML = content;
  }
  ```
  
- Array:
  ```javascript
  function cats() {
    var catArray = [];
    catArray[0] = "sleeping";
    catArray[1] = "playing";
    catArray[2] = "eating";
    catArray[3] = "purring";
    document.getElementById("cat").innerHTML = "The cat is " + catArray[2] + ".";
  }
  ```
  
- For loop with break and continue:
  ```javascript
  function cats() {
    var catArray = [];
    catArray[0] = "sleeping";
    catArray[1] = "playing";
    catArray[2] = "eating";
    catArray[3] = "purring";
    document.getElementById("cat").innerHTML = "The cat is " + catArray[2] + ".";
  }
  ```

## Calculator
This is a calculator with basic add/subtract/multiply/divide functionality.

![calc](https://user-images.githubusercontent.com/84836870/134747691-6dd25a1a-d0b4-4d6a-9d8b-abe490b9d6fa.gif)

```javascript
const Perform_Calculation = {
  '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
  '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
  '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
  '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
  '=': (First_Operand, Second_Operand) => Second_Operand
};
```


## Pizza Project
This is a mock order page for a pizza restaurant. The user can select a pizza size and toppings and the subtotal is displayed.

![pizza](https://user-images.githubusercontent.com/84836870/134756447-7263ace0-1c6a-406f-acfa-a05127c05360.gif)

```javascript
var toppingTotal = 0;
  var selectedTopping = [];
  var toppingArray = document.getElementsByClassName("toppings");
  for (var j = 0; j < toppingArray.length; j++) {
      if (toppingArray[j].checked) {
          selectedTopping.push(toppingArray[j].value);
          console.log("selected topping item: ("+toppingArray[j].value+")");
          text1 = text1+toppingArray[j].value+"<br>";
      }
  }
  var toppingCount = selectedTopping.length;
  if (toppingCount > 1) {
      toppingTotal = (toppingCount - 1);
  } else {
      toppingTotal = 0;
  }
  runningTotal = (runningTotal + toppingTotal);
```

## Tic Tac Toe
This is a tic tac toe game played against the computer.

![tictactoe](https://user-images.githubusercontent.com/84836870/134756564-30c5f41b-70ea-4f84-94c6-3619debffae4.gif)

```javascript
function computersTurn() {
    // This boolean is needed for the while looop
    let success = false;
    // This variable stores a random number 0-8
    let pickASquare;
    // This condition allows the while loop to keep trying if a square is selected already
    while(!success) {
        // A random number between 0 and 8 is selected
        pickASquare = String(Math.floor(Math.random() * 9));
        // If the random number evaluated returns true, the square hasn't been selected yet
        if (placeXOrO(pickASquare)) {
            // This line calls the function
            placeXOrO(pickASquare);
            // This changes our boolean and ends the loop
            success = true;
        };
    }
}
```


## jQuery
This project demonstrates a few basic jQuery functions.

```javascript
// When paragraph 1 is double clicked, fade out
$("#1").dblclick(function() {
    $('#1').fadeOut();
});
// Make paragraph 2 red
$("#2").css({"color":"red"})

// Hide header when paragraph 3 is clicked
$("#3").click(function() {
    $('h1').hide();
});
```
