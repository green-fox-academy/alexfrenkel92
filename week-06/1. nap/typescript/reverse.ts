'use strict';

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

const list = [3, 4, 5, 6, 7];

function reverse(list: number[]): number[] {
    let newList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        newList.push(list[i]);
    }
    return newList;
}

console.log(reverse(list));