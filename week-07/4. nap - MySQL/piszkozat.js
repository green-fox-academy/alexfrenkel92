'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'bookstore'
});

conn.connect();

// conn.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

app.get('/', (req, res) => {
  let mainSelection = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id '
  let qsKey = Object.keys(req.query);
  let qsValue = Object.values(req.query);
  let whereString = ''
  function tableKeys(key) {
    if (key == 'category') {
      return 'cate_descrip =';
    } else if (key === 'author') {
      return 'aut_name =';
    } else if (key === 'publisher') {
      return 'pub_name =';
    } else if (key === 'plt') {
      return 'book_price <';
    } else if (key === 'pgt') {
      return 'book_price >';
    } else {
      return '';
    }
  }

  function isNum(value) {
    if (typeof (value) === 'number') {
      return '';
    } else {
      return '"'
    }
  }
  if (Object.entries(req.query).length > 0) {
    whereString += 'WHERE ';
  }
  for (let i in req.query) {
    console.log(req.query[i]);
    whereString += `${tableKeys(i)} ${isNum(req.query[i])}${req.query[i]}${isNum(req.query[i])} AND `
  }
  whereString = whereString.slice(0, -4);
  console.log('whereString final: ' + whereString);
  console.log('length of req.query entries: ', Object.entries(req.query).length);

  conn.query(mainSelection + whereString + ';', (error, rows) => {
    // if (error) throw error;
    if (error) {
      res.status(400).send({ error: 'invalid query param' });
    }
    console.log('req.query keys: ', qsKey);
    console.log('req.query values: ', qsValue);
    console.log('data received from db:\r\n');
    console.log(rows);
    res.send(rows);
  })
});

// conn.end();

app.listen(PORT, () => {
  console.log('app listening ');
});