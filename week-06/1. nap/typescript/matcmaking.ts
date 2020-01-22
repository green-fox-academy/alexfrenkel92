'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
const boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function matchmaking(): string[] {
    let newOrder: string[] = [];
    for (let i: number = 0; i < girls.length; i++) {
        newOrder.push(girls[i]);
        for (let j: number = 0; j < boys.length; j++) {
        }
        newOrder.push(boys[i]);
    }
    return newOrder;
}

console.log(matchmaking());