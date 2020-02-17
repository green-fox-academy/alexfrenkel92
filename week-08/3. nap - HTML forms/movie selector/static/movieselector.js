'use strict';

const genre = document.querySelector('.genre');
const selected = document.querySelector('#movies');
const selectedMovie = document.querySelector('.selectedMovie');
const scifi = document.querySelectorAll('.scifi');
const drama = document.querySelectorAll('.drama');
const comedy = document.querySelectorAll('.comedy');

console.log(selected);
console.log(scifi);

let genreSelect = genre.addEventListener('change', (e) => {
    if (e.target.value == "scifi" == true) {
        console.log('scifi');
        scifi.forEach(item => {
            item.style.display = 'block';
        })
    } else if (e.target.value != 'scifi' == true) {
        scifi.forEach(item => {
            item.style.display = 'none';
        })
    } if (e.target.value == "drama" == true) {
        console.log('drama');
        drama.forEach(item => {
            item.style.display = 'block';
        })
    } else if (e.target.value != 'drama' == true) {
        drama.forEach(item => {
            item.style.display = 'none';
        })
    } if (e.target.value == "comedy" == true) {
        console.log('drama');
        comedy.forEach(item => {
            item.style.display = 'block';
        })
    } else if (e.target.value != 'comedy' == true) {
        comedy.forEach(item => {
            item.style.display = 'none';
        })
    }
})

selected.addEventListener('change', (e) => {
    selectedMovie.innerHTML = `The selected movie is: ${e.target.value}`
})