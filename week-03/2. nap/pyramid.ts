'use strict';



// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is


// let as: string = '';
// for (let i: number = 0; i < lineCount; i++) { 
//     let sp: string = ''; 
//     for (let j: number = 0; j < (lineCount - i  ); j++) {
//     sp = sp + ' ';
//     }
//     for ( let k: number = 0; k < i; k++) {
//      as = '*';
     
//     }
//   console.log(sp + as);   
  
// 
let lineCount: number = 4;
let sor: string;
let bekezdes: string;
    for (let i: number = 0; i < lineCount; i++) {
        sor = '_';
        bekezdes = '-';
        for (let j: number = 0; j < lineCount - i; j++) {
            bekezdes = bekezdes + ' ';
            }
            for (let k: number = 0; k < 2*i+1; k++) {
            sor = sor + '*'; 
            }
     console.log(bekezdes + sor);
    }