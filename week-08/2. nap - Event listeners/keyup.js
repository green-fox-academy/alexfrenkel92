'use strict';

const h1 = document.querySelector('h1');

window.addEventListener('click', () => {
    console.log('Clicked on global window');
});

function keypress(e) {
    h1.innerHTML = `Last pressed key code is: ${e.keyCode}`;
};

window.addEventListener('keyup', keypress);