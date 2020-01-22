'use strict';

const size: number = 8;

for (let i: number = 0; i < size; i++){
    let line: string = ''; //itt sorokat csinalok
    for (let j: number = 0; j < size; j++) { //itt rajzolok
            line += '%';
        }
        console.log(line)
   }