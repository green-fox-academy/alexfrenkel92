'use strict';

const myForm = document.querySelector('#myForm');
const { url, alias } = myForm.elements;
const response = document.querySelector('#response');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const body = JSON.stringify({
        url: url.value,
        alias: alias.value
    })

    fetch('http://localhost:3000/aliases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
    })
        .then(myForm.reset())
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data); //insertID megjeleniteshez alsot kikommentelni
            response.innerText = `Your URL is aliased to ${data.url} and your secret code is ${data.code}.`;
        })
})