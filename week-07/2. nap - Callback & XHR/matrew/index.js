function a () {}
let b = function () {}

// first class function
// higher order function
// callback function

let myNumbers = [1, 2, 3];

myNumbers.forEach(function (e, i, arr) {
  console.log(e);
});

function print(e, i, arr) {
  console.log(e);
}

// myNumbers.forEach(print());
// myNumbers.forEach(undefined);

myNumbers.forEach(print);

function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

myForEach(myNumbers, print);
console.log('end of program');