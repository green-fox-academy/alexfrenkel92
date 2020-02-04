'use strict';

const clickIt = document.querySelector('button');
const h1Change = document.querySelector('h1');

clickIt.addEventListener('click', () => {
    setTimeout(write, 2000);
});

h1Change.addEventListener('click', () => {
    console.log(h1Change);
});

function write() {
    console.log(clickIt);
    if (h1Change.style.display = 'none') {
        h1Change.style.display = 'block';
    } else {
        h1Change.style.display == 'none';
    };
};