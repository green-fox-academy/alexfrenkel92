//Callback fuggveny: olyan fuggveny, amit egy m'sik fuggveny, mint argumentum fog meghivni. Miutan valami tortenik.

function a () {}
let b = function () {}

//first class function
//higher order function: map, filter
//callback function: for each, while

let myNumbers = [1, 2, 3]

myNumbers.forEach(function (e, i, arr) {
    console.log(e);
})

function print(e, i, arr) {
    console.log(e);
}

myNumbers.forEach(print); //itt van kiszervezve a fuggveny egy masik fuggvenybe

function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr) //ez a forEach mukodesi elve
    }
}

myForEach(myNumbers, print)

console.log('start of program');

setTimeout(function () {
    console.log('hello from the other side');
}, 2000);
console.log('end of program');

//xhr: szerverrol tud adatokat kerni

//JSON.parse => stringbol csinal javascript objectet...vagz arrayt
//JSON.stringify => fenti fordiyva
//.onload - mikor megerkezik a valasz, csinal valamit, pl console.log
