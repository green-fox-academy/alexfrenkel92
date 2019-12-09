let drinks: string[] = ['Gin', 'Whiskey', 'Whine', 'Beer'];

for (let i: number = 0; i < drinks.length; i++) {
    drinks[i] = drinks[i] + drinks[i];
}

console.log(drinks);




// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`