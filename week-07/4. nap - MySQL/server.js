'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path');

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

app.get('/booktitles', (req, res) => {
    conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.json(rows);
    });
});

app.get('/fulldata', (req, res) => {
    conn.query(
        `SELECT
            book_mast.book_name, author.aut_name, category.cate_descrip, newpublisher.pub_name, book_mast.book_price
        FROM
            author
        INNER JOIN book_mast ON author.aut_id = book_mast.aut_id
        INNER JOIN category ON book_mast.cate_id = category.cate_id
        INNER JOIN newpublisher ON newpublisher.pub_id = book_mast.pub_id;`,
        (err, rows) => {
            if (err) {
                console.error(`Cannot retrieve data: ${err.toString()}`);
                res.sendStatus(500);
                return null;
            }
            res.json(rows);
        });
});





app.listen(PORT, () => {
    console.log('Server is running on PORT 3000');
});