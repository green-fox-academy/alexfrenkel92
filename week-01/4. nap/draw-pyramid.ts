'use strict';

// let lineCount: number = 4;
// let line: string = '';
// let i: number = 0;
// let j: string = '*';


// for (i; i < lineCount; i++) {
//     for (let b = 0; b < lineCount; b++)
// console.log(j)
// j = j + '*';
// }

let rows: number = 4;

for (let x = 1; x<= rows; ++x) {
    for (let y = 1; y <= x; ++y) {
        console.log( y + ' ')
    }
    console.log('')
}


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is