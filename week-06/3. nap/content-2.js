'use strict';

const liOldItems = document.querySelectorAll('li');
const liNewItems = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < liOldItems.length; i++) {
    liOldItems[i].innerText = liNewItems[i];
}

console.log(liOldItems.children);