'use strict';

const button = document.querySelector('button');

button.addEventListener('click', time);

function time(e) {
    console.log(Date());
    button.removeEventListener('click', time); 
};