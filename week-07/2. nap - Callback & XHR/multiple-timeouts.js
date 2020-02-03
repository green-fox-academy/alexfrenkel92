'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

console.log('apple');

setTimeout(() => {
    console.log('pear')
}, 1000);

setTimeout(() => {
    console.log('melon')
}, 2000);

setTimeout(() => {
    console.log('grapes')
}, 3000);

// let fruits = ['apple', 'pear', 'melon', 'grapes'];
// let counter = 0;

// function fruitListing() {
//     for (let i = 0; i < fruits.length; i++) {
//         console.log(fruits[counter]);
//         counter++;
//     }
// }

// setTimeout(fruitListing, 1000)

// setTimeout(() => {
//     for (let i = 0; i < fruits.length; i++) {
//         console.log(fruits[i]);
//     }
// }, 1000);