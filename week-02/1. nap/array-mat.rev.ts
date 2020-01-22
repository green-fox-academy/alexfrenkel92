let names: string[] = ['Zoli', 'Kata', 'Bela'];

console.log(names.indexOf('Bela')); // megnezi melyik indexen van Bela

console.log(names);
console.log(names[0]);
console.log(names.length);
let nameslength: number = names.length;
console.log(names [1 + 1]);
console.log(names [nameslength - 1]);

let myNumbers: number[] = [];
myNumbers[0] = 1;
myNumbers[1] = 2;
myNumbers.push (3); //mindig a vegere teszi
myNumbers.push (10); // myn 10. eleme legyen 100
console.log(myNumbers[10]);


let allNames: string = '';

for(let i: number = 0; i < names.length; i++) {
    //allNames += names[i]; 
    //console.log('Szia kedves ' + names[i]);
    // names[i] = 'Szia kedves ' + names[i];
}

// console.log(names);
// names[0] = 'Most megvaltoztattalak Zoli!';
// console.log(names);
console.log(names.sort()); // sortolja abc szerint


let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [10, 11, 12];
let arr3: number[] = [...arr1, ...arr2]; //arr = arr1 egy masolataval, igy ket kulon, szetvalt lista lesz
arr1[0] = 100; //arr1 0ik szamat 100ra valtoztatjuk, de fenti sor miatt arr2 0ka nem valtozik

console.log(arr3);


// matrixok

// let myMatrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(myMatrix);
console.log(myMatrix[0]);
// console.log(myMatrix[0][0]); //0ik elem 0ik eleme
console.table(myMatrix);
// // console.log(myMatrix[2][1]);

// let firstLine: number[] = myMatrix[0];
// let firstElement: number = myMatrix[0][0] //firtsLine[0] - ugyanazt jelenti a ketto

// console.log(firstLine);
// console.log(firstElement);

// for (let i: number = 0; i < myMatrix.length; i++)  { //i-n egyessevel akaork vegig menni jelenti a ++
//     console.log(myMatrix[i]);
// }

// for (let i: number = 0; i < myMatrix.length; i++)  { //i-n egyessevel akaork vegig menni jelenti a ++
//     for (let j: number = 0; j < myMatrix[i].length; j++) {
//     // console.log(i, j);
//     console.log(myMatrix[i][j]);
//     }
// }

// let myText: string = 'Alig varom a szunetet';
// console.log(myText.split(' ')); //minden szo egy elem, a szuneteket kivagja
// console.log(myText.split('r'));