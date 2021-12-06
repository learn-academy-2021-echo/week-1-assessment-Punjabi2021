// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.
//If the var is above 212 it will return a value of Above boiling point
//If the var is at 212 it will return a value of boiling point
// If the var is  below boiling point it will return a value of below boiling
// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//var temp1 = 42
//var temp2 = 350
//var temp3 = 212

//if(temp1 === 212) {
  //console.log("Boiling point.")
//} else if(temp1 > 212) {
  //console.log("Above boiling point")
//} else {
  //console.log("Below boiling point")
//}

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

//var myNumbers1 = [3, 7, 0, 36, -9]
//var myNumbers2 = [8, -7, 42, 9, 13]




//let array1 = [3, 7, 0, 36, -9];
//let array2 = [8, -7, 42, 9, 13];
//let array3 = array1.concat(array2);

//console.log(array3.length);


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

//var currentCohort = "Echo 2021"
//console.log("Echo 2021".split("").reverse().join(""));

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"
//var myArray = [13, 34, 5, 10, 27, 42];

//for(let index = 0; index < myArray.length; index++)
//{
  //if(myArray[index] % 2 === 0) {
    //console.log("even")
  //} else if(myArray[index] % 2 === 1) {
    //console.log("odd")
  //}
//}

// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

//let y = 100;
//let x = 58;

//let z = y - x;

//console.log(z);


let y = 27
let x = 24

let z = y - x;

console.log(z);
