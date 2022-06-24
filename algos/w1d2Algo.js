
// data types


var name = "Olga";
var age = 2;
var isTeachingToday = true;

console.log(name);


// operators

// division 
var halfAge = age/2;

// multiplication
var twiceMyAge = age*2;




// data structures
// array

var artist = ["Drake", "Weezy", "Swift"]
// indexes -->   0        1        2

console.log(artist[0]);

// loops

for (var i = 0; i < artist.length; i++){
    console.log(artist[i]);
}

// functions

/* Parameter is the woeda that represet ahat function is wzpecting as input.
Argument is the data that i give to the funnction wahen wr inboke it/
*/

function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(3,9));