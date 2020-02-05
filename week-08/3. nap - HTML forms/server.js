'use strict';

const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/buttondisable.html');
})

app.listen(3000, () => console.log('Server is running'));