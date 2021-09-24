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
  ```javscript
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

## Calculator
This is a calculator with basic add/subtract/multiply/divide functionality.

## Pizza Project
This is a mock order page for a pizza restaurant. The user can select a pizza size and toppings and the subtotal is displayed.

## Tic Tac Toe
This is a tic tac toe game played against the computer.

## jQuery
This project demonstrates jQuery basics.
