'use strict'

//Given a non-negative integer n, return the sum of its digits recursively (without loops).
//There is no integer type in JavaScript. To remove the rightmost digit you must divide (/) the number by 10 and find a way to get the the whole number portion of that number.

function sumOfDigits(n: number) {
    console.log(n);
    let digit: number = 0;
    digit = n % 10;
        if ( n < 10 ) {
        return n;
    } else  
        return sumOfDigits((n - digit) / 10) + digit;
}

console.log(sumOfDigits(666));
    