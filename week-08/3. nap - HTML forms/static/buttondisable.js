'use strict';

const question = document.querySelector('#question');
const favPet = document.querySelectorAll('.favouritePet');
const signup = document.querySelector('#signup');
const loveCatsButton = document.querySelector('#loveCats');

document.querySelectorAll('input[name="animal"]').forEach(item => {
    item.addEventListener('input', (e) => {
        e.preventDefault();
        if (e.target.value == "cat" == true) {
            console.log('cat is checked');
            // console.log(signup);
            signup.style.display = 'block';
        } else if (e.target.value != "cat") {
            signup.style.display = 'none';
            alert(`That's not a cat`)
        }
    })
})

document.querySelectorAll('input[name="facts"]').forEach(item => {
    item.addEventListener('input', (e) => {
        e.preventDefault();
        if (e.target.value == "yes") {
            console.log(loveCatsButton);
            loveCatsButton.style.display = 'block';
            alert('Thank you for your subscription!')
        } else if (e.target.value == 'no') {
            alert('You should really change your mind...')
        }
    })
})