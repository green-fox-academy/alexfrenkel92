'use strict';

const fs = require('fs');
const path1 = './content.txt';

let swearWordsArray = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']
let contentRead = fs.readFileSync(path1, 'utf-8');
let contentSplit = contentRead.toLowerCase().split(' ');

let swearWordsListed = contentSplit.filter(sw => swearWordsArray.includes(sw)); //ez csak kigyujti a csunya szavakat
let swearWordsNr = swearWordsListed.length; //kigyujtott csunya szavak szama
console.log('Number of deleted words: ' + swearWordsNr);

let contentCleared = contentSplit.filter((sw: string) => (!swearWordsArray.includes(sw) && !swearWordsArray.includes(sw.substring(0, sw.length - 1)))); //ez torli
fs.writeFileSync(path1, contentCleared.join(' '));

// console.log(swearWordsListed);
// console.log(contentSplit.length);
// console.log(contentCleared.length);



// function removeWords () {
//     try {
//         for (let i: number = 0; i < contentSplit.length; i++) {
//             for (let j: number = 0; j < swearWordsArray.length; j++) {
//                 if (contentSplit.length[i] === swearWordsArray.length[j]) {
//                     contentSplit.splice(i, 1);
//                     // wordsToDelete.push(contentSplit[i]);
//                     // console.log(wordsToDelete);
//                 } else {
//                     return false;
//                 }
//             }
//         }
//         // contentSplit.splice(position, line).join('\n');
//         // fs.writeFileSync(path1, contentSplit);
//         // console.log(contentSplit);
//     }
//     catch (e) {
//         console.log('File not found');
//     }
// }

// console.log(removeWords());

// //lower case es include