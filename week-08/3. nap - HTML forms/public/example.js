'use strict';

const select = document.getElementById('select');

select.addEventListener('submit', e => {
  e.preventDefault();
  console.log(document.getElementById('pet-select').value);
  select.reset();
});

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('submit', e => {
  e.preventDefault();
  document.querySelectorAll('input[type="checkbox"]').forEach(item => {
    if(item.checked) {
      console.log(item.value);
    }
  });
});

const radio = document.getElementById('radio');

radio.addEventListener('submit', e =>{
  e.preventDefault();
  document.querySelectorAll('input[type="radio"]').forEach(item => {
    if(item.checked) {
      console.log(item.value);
    }
  });
});