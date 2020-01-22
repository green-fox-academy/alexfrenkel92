'use strict';

let inputMatrix: number[][] = [
    [1, 1],
    [4, 2]
]

export default function listFromMatrix(inputMatrix: number[][]): number[] {
    let newList = [];
    for (let i: number = 0; i < inputMatrix.length; i++) {
        for (let j: number = 0; j < inputMatrix.length; j++) {
            newList.push(inputMatrix[i][j])
        }
    }
    return Array.from(new Set(newList));
}

console.log(listFromMatrix(inputMatrix));