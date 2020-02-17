'use strict';


// Callback hell - select posts by user name
// - users
// id   name    country
//      Béla

// - posts
// id   authorId   content   title  createdAt

mysql.query('SELECT * FROM users WHERE name = ?;', request.body.name, function (err, rows) {
  mysql.query('SELECT * FROM posts where authorId = ?', rows[0].id, function (err, res) {
    // nested mysql queries, can go crazy pretty easily
  });
});


// delay a method call by 3 sec. Action has to be passed as a parameter
console.log('declare delay');
function delay(doSomething) {
  console.log('call delay');
  setTimeout(doSomething, 3000);
}

delay(() => console.log('hello world'));
console.log('at the end');


// the same as above but now with a promise.
// callback doesn't need to be passed in, the result has been made public instead
function delayWithPromise() {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve('done'), 3000);
    setTimeout(() => reject('error'), 3000);
  });
}

delayWithPromise()
  .then((result) => {
    //  in case of resolve - line 34
    console.log(result);
  })
  .catch((err) => {
    //  in case of reject - line 35
    console.log(`failed: ${err}`);
  })


// Promise.resolve()
// Promise.all, race

console.log(new Promise(() => {}));
console.log(Promise.resolve('resolved promise'));
console.log(Promise.reject());


Promise.all([
  myFetch('GET', 'http://swapi.co/api/people/1'),
  myFetch('GET', 'http://swapi.co/api/people/2'),
  myFetch('GET', 'http://swapi.co/api/people/3'),
  Promise.reject(123)
]).then(results => {
})




//***********************************************************//
// Fetch related stuff
// generic ajax method with callback
function sendAJAX(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    callback(xhr.responseText);
  }
  xhr.send();
}

sendAJAX('GET', 'https://swapi.co/api/people/1', (result) => console.log(result));
sendAJAX('GET', 'https://google.com/', (result) => alert(':)'));

// generic ajax method with promise
function myFetch(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      resolve(xhr.responseText);
    }
    xhr.send();
  });
}

console.log(myFetch('GET', 'http://swapi.co/api/people/1'))


// fetch
fetch('https://swapi.co/api/people/2', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ a: 12, b:13 })
})
  .then(response => {
    if(response.status !== 200) {
      throw new Error('Cannot load response');
    }
    return response;
  })
  .then(response => response.json())
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log('not happy');
  })
  .finally(() => {
    console.log('always runs');
  });