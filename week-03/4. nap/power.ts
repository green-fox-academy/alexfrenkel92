'use strict';
// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function power (base: number, N: number) {
    console.log(base, N)
    if (N === 1) {
        return base;
    }
    return (power(base, N - 1) * base);
}

console.log(power(2, 5));

// function power (base: number, N: number ) {
//     let total = 0;
//     for (let i = 1; i <= base; i++) {
//         total = base * N * i;
//     }
//     return total;
// }

// console.log(power(3, 4));