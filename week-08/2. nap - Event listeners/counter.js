'use srtict';

const li = document.querySelectorAll('li');
const button = document.querySelector('button');
const result = document.querySelector('.result');

button.addEventListener('click', () => {
    console.log(button);
});

button.addEventListener('click', () => {
    console.log(li);
    result.innerHTML = `${li.length}`
}); 