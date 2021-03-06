'use strict';

let matrix1: number[][] = [
    [1, 2, 3],
    [2, 5, 8],
    [7, 8, 9]
]

let matrix2: number[][] = [
    [2, 3, 4],
    [54, 3, 466],
    [0, 95, 8]
]


function isSymmetric(matrix: number[][]): string {
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length[i]; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return 'Not symmetric';
            }
        }
    }
    return 'Symmetric';
}

console.log(isSymmetric(matrix1));
console.log(isSymmetric(matrix2));
console.log(matrix2[0][1]);