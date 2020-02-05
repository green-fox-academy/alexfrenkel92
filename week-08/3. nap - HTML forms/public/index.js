'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const userData = { username: username, password: password };
  const body = JSON.stringify(userData);
  if (username) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (e) => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callback(response);
      }
    }
    xhr.open('POST', 'http://localhost:3000/api/login');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(body);
    form.reset();
  } else {
    alert('please username')
  }
})
 
const callback = (res) => {
  let p = document.createElement('p');
  let body = document.getElementsByTagName('body')[0];
  p.textContent = res.message;
  body.appendChild(p);
}

document.getElementById('username').addEventListener('input', (e) => {
  console.log(e.target.value);
})