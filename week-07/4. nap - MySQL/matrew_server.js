'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
});

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.get('/', (req,res) =>{
  conn.query('SELECT * FROM author', function(err, rows){
    console.log(rows);
  })
  res.send(rows);
});

app.listen(PORT);