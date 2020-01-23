'use strict';

const express = require('express');
const app = express();

const todos = ['get up', 'survive', 'go back to bed'];

app.set('view engine', 'ejs');

app.listen(3040, () => {
    console.log('The app is running on port 3040.');
});

// a '/' mondja meg hova akarom kiiratni a tartalmat
app.get('/', (req, res) => {
   res.render('todo', {todos})
});