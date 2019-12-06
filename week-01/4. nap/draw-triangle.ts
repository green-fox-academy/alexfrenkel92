'use strict';

let lineCount: number = 4;

for (let i: number = 0; i < lineCount; i++) {
    let line: string = '';
    for (let j: number = 0; j <= i; j++) {
        line +=  '*';
    }
    console.log(line)
}


// let a: number = 0;
// let b: string = '*';

// while (a < lineCount) {
//     console.log(b)
//     b = b + '*';
//     a++;
// }

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is