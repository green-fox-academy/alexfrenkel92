'use strict';

let lineCount: number = 4;

for (let i: number = 0; i < lineCount; i++) {
    let line: string = '';
        for (let j: number = 0; j <= (2 * lineCount - 1); j++) {
            
                line += '*';
    }
    console.log(line);
}

// if ( (i + j) % 2 ! === 0) { //itt vizsgalja, hogy a sorok szama, ahol 0 vagy x kerul, paros vagy paratlan e
//     line += '%';
// } else {
//     line += ' ';
// }


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is