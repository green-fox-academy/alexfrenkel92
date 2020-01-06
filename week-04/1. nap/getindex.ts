'use strict'
//Create a function that takes a list and a value, and returns the index of that value in the list. If the value is not it the list, the function should return -1.

function getIndex (index): string {
    // let list: string[];
    let list = ['a', 'b', 'c', 'd', 'e', 'f'].indexOf(index);
    // let list1 = [1, 2, 3, 4, 5, 6].indexOf(index);
    // console.log('Index is: ' + list1)
    return 'Index is: ' + list;

}

console.log(getIndex('d'));

// let index = [12, 5, 8, 130, 44].indexOf(8); 
// console.log("index is : " + index );