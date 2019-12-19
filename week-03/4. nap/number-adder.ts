'user strict';
// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

// function numberSum(N) {
//     let total = 0;
//     for(let i = 1; i <= N; i++){
//         total += i;
//       }
//       return total;
//   }
//   console.log(numberSum(5));

function nSum(N) {
    console.log(N)
    if (N == 1) {
        return N;
    }
    return nSum(N - 1) + N;
}

console.log(nSum(5));


// function exponential(base: number, exponent: number) {
//     console.log(base, exponent);
//     if (exponent === 1) {
//         return base; //ez allitja meg
//     }
//     return(exponential(base, exponent - 1) * base); //matematikai keplet a hatvanyozasra
// }

// console.log(exponential(5,4));

// 



// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

// let num: number = 3;
// let sum: number = 0;

// for (let i: number = 0; i < num; i++) {
// sum += i; //sumhoz mindig hozzaadom i erteket, mig el nerm eri a 4-t
// }

// console.log(sum);


