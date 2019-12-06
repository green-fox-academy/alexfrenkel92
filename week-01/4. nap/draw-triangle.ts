'use strict';

let lineCount: number = 4;
let a: number = 0;
let b: string = '*';

while (a < lineCount) {
    console.log(b)
    b = b + '*';
    a++;
}

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is