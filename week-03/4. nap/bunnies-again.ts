'use strict'
//We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnyEars1 (n): number {
    let earsOdd: number = 3;
    let earsEven: number = 2;
    console.log(n);
    if (n == 1) {
        return earsOdd;
    }
    if (n % 2 === 0) {
    return bunnyEars1(n - 1) + earsEven;
    } else
    return bunnyEars1(n - 1) + earsOdd;
}

console.log('Total number of bunny ears: ' + bunnyEars1(4));