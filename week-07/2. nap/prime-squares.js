'use strict'

let hundredNr = [];

function nrGenerator() {
    for (let i = 1; i <= 100; i++) {
        hundredNr.push(i);
    }
    return hundredNr;
}

// for (let i = 0; i < hundredNr.length; i++) {
//     console.log(hundredNr[i]);
// }
// console.log(hundredNr);
// console.log(nrGenerator());
nrGenerator()

function primeNr() {
    let primeNrList = [];
    for (let i = 0; i <= hundredNr.length; i++) {
        if (hundredNr[i] % 2 !== 0 && hundredNr[i] % 3 !== 0) {
            primeNrList.push(hundredNr[i])
        }
    }
    return primeNrList;
}

console.log(primeNr());

let createDiv = document.createElement('div');
createDiv.id = 