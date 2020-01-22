'use strict';

// We are going to represent a shopping input in a input containing strings.

// Create a input with the following items.
// Eggs, milk, fish, apples, bread and chicken
// Create an application which solves the following problems.
// Do we have milk on the input?
// Do we have bananas on the input?

const shoppingList: string[] = ['Eggs', 'milk', 'fish', 'apples', 'bread', 'chicken']

function checkList(list: string[], input: string): void {
    let contain: number = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] == input) {
            contain += 1;
        }
    }
    if (contain != 0) {
        console.log('The list contains ' + input);
    } else {
        console.log('The list does not contain ' + input);
    }
}

checkList(shoppingList, 'apple');