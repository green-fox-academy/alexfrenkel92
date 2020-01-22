'use strict';

const king = document.getElementById('b325');
console.log(king);

const businessLamp = document.getElementsByClassName('big');
console.log(businessLamp);

// var conceitedKing = document.getElementsByTagName('div');
// for (let i = 0; i < conceitedKing.length - 1; i++) {
//     console.log(conceitedKing[i]);
// }

const conceitedKing = document.querySelectorAll('section > div');
console.log(conceitedKing);
// alert('The King');
// alert('The Conceited Man');

const noBusiness = document.querySelectorAll('div');
console.log(noBusiness)
