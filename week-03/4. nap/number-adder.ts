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