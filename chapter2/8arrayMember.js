// Generated by CoffeeScript 1.10.0
(function() {
  var number, plants,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  number = 3;

  if (number === 1 || number === 2 || number === 3 || number === 4 || number === 5) {
    console.log(number + "is in array");
  }

  plants = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

  if (indexOf.call(plants, "Pluto") >= 0) {
    console.log("Hooray!");
  }

}).call(this);
