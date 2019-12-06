'use strict';

for (let number: number = 1; number <= 100; number++) {
    if (number%3 === 0 && number%5 === 0) {
        console.log('FizzBuzz')
    } else if (number%3 === 0) {
        console.log('Fizz')
    } else if (number%5 === 0) {
        console.log('Buzz')
    } else if (number!/3 && number!/5) {
        console.log (number)
    }
}

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.