'use strict';

const matrix3 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

function rotateTheFuck(matrix: number[][]): number[][] {
    let rotated: number[][] = [];
    for (let row = 0; row < matrix.length; row++) {
        let line = [];
        for (let col = matrix.length - 1; col >= 0; col--) {
            line.push(matrix[col][row])
        }
        rotated.push(line);
    }
    return rotated;
}

console.log(rotateTheFuck(matrix3));


// function rotateMatrix(matrix: number[][]): number[][] {
// 	let rotated: number[][] = [];
// 	for (let i = 0; i < matrix.length; i++) {
// 		let row = [];
// 		for (let j = matrix.length - 1; j >= 0; j--) {
// 			row.push(matrix[j][i]);
// 			rotated.push(row);
// 		}
// 	}
// 	return rotated;
// }