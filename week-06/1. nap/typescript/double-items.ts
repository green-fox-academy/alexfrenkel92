'use strict';

// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

let drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];

function double(list: string[]): string[] {
    let doubled: string[] = [];
    for (let i: number = 0; i < list.length; i++) {
        doubled.push(list[i] + list[i]);
    }
    return doubled;
}

// console.log(double(drinks));

const doubleIt = drinks.map((list: string): string => list + list);

console.log(doubleIt);