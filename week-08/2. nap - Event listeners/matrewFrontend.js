'use strict';

//query selector using variable
const maci = document.querySelector('.maci');
const cica = document.querySelector('#cica');

//variable + onclick function
maci.onclick = () => {
    console.log('en vagyok a maci')
};

cica.onclick = () => {
    alert('en vagyok a tzitza')
};


// adding event listener to var
cica.addEventListener('mouseover', () => {
    console.log('cicuka');
});

cica.addEventListener('click', () => {
    alert('ez egy masodik alert');
});


//creating your own event handler
const eventHandler = (event) => {
    console.log(event);
};

maci.addEventListener('mouseover', eventHandler);
cica.addEventListener('mouseover', eventHandler);

maci.removeEventListener('mouseover', eventHandler);
maci.addEventListener('mouseleave', eventHandler);



const input = document.querySelector('input');

input.addEventListener('blur', eventHandler);
input.addEventListener('focus', eventHandler);


//reaching the whole document
document.body.addEventListener('keydown', (e) => {

    if(e.keyCode === 40){
        console.log('lefele megy');
    }
});


//preventing default action
document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e);
//    alert('BESZOPTAD');
});

    //const gomb = document.querySelector('#gomb')
   // gomb.addEventListener('click', function(e){
    //      e.preventDefault();
//        console.log('erre sem kattinthatsz ra, mert nem csinal semmit')

 //   });


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
const { cica, maci } = event.target.elements;
console.log(cica);
console.log(maci);
});



// document.body.addEventListener('click', function(event) {
//     console.log(event);
//     alert("DANGER");
// });