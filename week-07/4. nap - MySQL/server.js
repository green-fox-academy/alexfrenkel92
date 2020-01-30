'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'bookstore',
});

conn.connect((err) => {
    if (err) {
        console.error('Cannot connect to the database', err);
        return;
    }
    console.log('Connection established');
    // conn.end();
});

// app.get('/', (req, res) => {
//     conn.query('SELECT * FROM author', function (err, rows) {
//         console.log(rows);
//     })
//     res.send(rows);
// });

app.get('/', (req, res) => {
    conn.query('SELECT * FROM author;', (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.send(rows);
    });
});

app.listen(PORT, () => {
    console.log('Server is running on PORT 3000');
});