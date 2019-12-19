'use strict';
//Find the greatest common divisor of two numbers using recursion.

function greatestCommonDivisor(a: number, b: number) {
    console.log(a, b);
    if (!b) {
        return a;
    }
    return greatestCommonDivisor(b, a % b);
}

console.log(greatestCommonDivisor(3, 9));