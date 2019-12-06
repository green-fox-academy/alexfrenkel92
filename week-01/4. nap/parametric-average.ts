'use strict';

let a: number = 1;
let input: number = 5;
let b: number = 0;


while (a <= input) {
    b = a + b;
    a++;
} 
    console.log('Sum: ' + b); 
    console.log('Average: ' + b / input);



// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3