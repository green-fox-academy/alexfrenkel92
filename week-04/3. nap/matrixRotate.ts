'use strict';

let matrix1 = [
    [1, 2, 3],
    [2, 5, 8],
    [7, 8, 9]
]

let matrix2 = [
    [2, 3, 4],
    [5, 3, 4],
    [0, 9, 8]
]

function rotateClockwise(a) {
    var n = a.length;
    for (var i = 0; i < n / 2; i++) {
        for (var j = i; j < n - i - 1; j++) {
            var tmp = a[i][j];
            a[i][j] = a[n - j - 1][i];
            a[n - j - 1][i] = a[n - i - 1][n - j - 1];
            a[n - i - 1][n - j - 1] = a[j][n - i - 1];
            a[j][n - i - 1] = tmp;
        }
    }
    return a;
}

console.log(rotateClockwise(matrix1));