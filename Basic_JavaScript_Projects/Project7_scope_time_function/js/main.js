// Global variable

var text = "string";
function printString1() {
    document.write("This is a " + text + "<br>");
}

function printString2() {
    document.write("This is also a " + text + "<br>");
}

printString1();
printString2();

// Local variable
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

// Display time of day
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

// Take age value and check if over 16
function checkAge() {
    var age;
    age = document.getElementById("age").value;

    if (age < 16) {
        document.getElementById("result").innerHTML = "You are too young to drive!";
    }

    else {
        document.getElementById("result").innerHTML = "You are old enough to drive!";
    }

};