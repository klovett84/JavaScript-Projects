// Ternary operation to determine if tall enough to ride
function rideFunction() {
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride.";
};

// Ternary operation to determine if old enough to vote
function voteFunction() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("vote").innerHTML = canVote + " to vote!";
};

// Creating "vehicle" object constructor
function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

// Creating "vehicle" objects
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");

// Printing object values
function printCar() {
    document.getElementById("car-container").innerHTML =
    "Erik drives a " + Erik.vehicle_color + "-colored " + Erik.vehicle_model + " manufactured in " + Erik.vehicle_year;
}

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

// Generate and print a random color
function randomColor() {
    document.getElementById("color").innerHTML = getColor();
    function getColor() {
        var colorOptions = ["red", "orange", "yellow", "green", "blue", "purple"];
        var color = colorOptions[Math.floor(Math.random()*colorOptions.length)];
        return color;
    }
}