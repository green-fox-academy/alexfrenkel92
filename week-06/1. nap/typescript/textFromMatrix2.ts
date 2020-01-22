'use strict';

let matrix1: string[][] = [
    ["n", "x"],
    ["m", "o"]
]

let matrix2: string[][] = [["h", "p", "e"], ["k", "l", "a"], ["l", "m", "o"]]

export function getText(input) {
    // let getTextElements = [];
    let text: string = '';
    for (let row: number = 0; row < input.length; row++) {
        for (let col: number = 0; col < input.length; col++) {
            if (row % 2 === 0 && col % 2 === 0) {
                text += input[row][col]
                // getTextElements.push(input[row][col]);
            } else if (row % 2 === 1 && col % 2 === 1) {
                // getTextElements.push(input[row][col]);
                text += input[row][col]
            }
        }
    }
    // return getTextElements;
    return text;
}

// console.log(getText(matrix1).join(''));
// console.log(getText(matrix2).join(''));
console.log(getText(matrix2));