'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
// app.use(express.static('views'));

app.listen(3030, () => {
    console.log('The app is running on port 3030.');
});

app.get('/', (req, res) => {
    res.send('<h1 style="color: red;">Welcome back, my dearest....and only....Guest! You are my favourite!!!</h1>');
});

//a views mappabol renderelem a home.ejs-t
app.get('/home', (req, res) => {
   res.render('home', {
       title: `Show me your favourite cave`
   });
});