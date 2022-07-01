
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

// nested loops and nested arrays


var nums = [23, 56, 67, 86];
var nums2 = [23, 56, 67, 86,98];

function searchForNum(arr, numToFind){

    for (var i = 0; i < arr.length; i++){
        if(arr[i] == numToFind){
            return i;
        }
    }

    return -1;

}

console.log(searchForNum(nums, 1));