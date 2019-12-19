'use strict';
//We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyEars (N) {
    let ears: number = 2;
    console.log(N);
    if (N == 1) {
        return ears;
    }
    return bunnyEars(N - 1) + ears;
}

console.log('Total number of bunny ears: ' + bunnyEars(6));


// function nSum(N) {
//     console.log(N)
//     if (N == 1) {                        
//         return N;
//     }
//     return nSum(N - 1) + N;
// }

// console.log(nSum(5));