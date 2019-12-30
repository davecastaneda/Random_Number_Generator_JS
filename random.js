// Math.random() generates a random number from 0 - 1, but does NOT include 1

var myRand = Math.random();
// myRand is less than one && myRand is greater than, or equal to zero

// Math.floor() rounds a number DOWN to the nearest integer
Math.floor();

// Math.ceil() rounds a number UP to the nearest integer
Math.ceil();

function randNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
