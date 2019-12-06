'use strict';

const size: number = 8;

for (let i: number = 0; i < size; i++){
    let line: string = ''; //itt sorokat csinalok
    for (let j: number = 0; j < size; j++) { //itt rajzolok
        if ( (i + j) % 2 ! === 0) { //itt vizsgalja, hogy a sorok szama, ahol 0 vagy x ker-l, paros vagz paratlan e
            line += 'X';
        } else {
            line += '0';
        }
    }
    console.log(i, line)
}   

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//