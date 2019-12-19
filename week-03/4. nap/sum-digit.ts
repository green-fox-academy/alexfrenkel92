'use strict'

//Given a non-negative integer n, return the sum of its digits recursively (without loops).
//There is no integer type in JavaScript. To remove the rightmost digit you must divide (/) the number by 10 and find a way to get the the whole number portion of that number.

function sumOfDigits(N: number) {
    console.log(N);
    let digit: number = 0;
    digit = N % 10;
        if ( N < 10 ) {
        return N;
    } else  
        return sumOfDigits((N - digit) / 10) + digit;
}

console.log(sumOfDigits(666));

// function bunnyEars (N) {
//     let ears: number = 2;
//     console.log(N);
//     if (N == 1) {
//         return ears;
//     }
//     return bunnyEars(N - 1) + ears;
// }

// console.log('Total number of bunny ears: ' + bunnyEars(6));
