'use strict';

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

let database = {
  fruits: [
    'apple',
    'pear',
    'peach'
  ]
};

app.get('/', function (request, response) {
  response.send('<h1 style="color: red;">Hello!</h1>');
});

app.get('/dom-example', (req, res) => {
  console.log({dirname: __dirname});
  res.sendFile(__dirname + '/index.html');
});

app.get('/hello/:message', (req, res) => {
  res.send(`Hello ${req.query.name}!<br>${req.params.message}`);
});

app.get('/webshop', (req, res) => {
  let username = 'Sanyi';
  res.render('webshop', { username: username, fruits: database.fruits });
});

// localhost:3000/add-item?name=KORTE
app.get('/add-item', (req, res) => {
  let name = req.query.name;
  database.fruits.push(name);
  res.send('Minden rendben van!');
});

app.listen(3000, function () {
  console.log(`The application is running on port 3000.`);
});


// GET / HTTP/1.1
// Host: localhost
// Accept: text/html