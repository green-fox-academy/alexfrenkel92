'use strict';

let input1: number[][] = [
    [-1, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
  ];

let input2: number[][] = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];

function makeGreatestMatrix(matrix1: number[][], matrix2: number[][]) {
    let greatestMatrix: number[][] = []
    for (let i: number = 0; i < matrix1.length; i++) {
        for (let j: number = 0; j < matrix1.length; j++) {
            if (matrix1[i][j] >= matrix2[i][j]) {
                //let greaterNumber1: number[][] = matrix1[i][j]
                greatestMatrix.push(matrix1[i][j])
            } else {
                let greaterNumber2: number = matrix2[i][j]
                greatestMatrix.push([greaterNumber2])
            }
        }
    } return greatestMatrix
}

console.log(makeGreatestMatrix(input1, input2));