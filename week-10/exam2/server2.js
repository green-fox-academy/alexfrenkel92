'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.static('public')); //ugyanaz mint app.get es dirname
app.use(bodyParser.urlencoded());

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.get('/', (req, res) => { //ugyanaz mint express.static('public')
    res.sendFile(__dirname + '/public/index2.html');
});

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

conn.connect((err) => {
    if (err) {
        console.log('Connection to database failed', err);
        return;
    }
    console.log('Database connected');
});

app.get('/alias', (req, res) => {
    conn.query('SELECT * FROM aliaser;', (err, table) => {
        if (err) {
            console.log(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.status(200).send(table);
    })
})

function randomNum() {
    const random = Math.floor(1000 + Math.random() * 9000);
    return random;
}

app.post('/aliases', (req, res) => {
    const url = req.body.url;
    const alias = req.body.alias;
    const code = randomNum();

    conn.query(
        `INSERT INTO aliaser (url, alias, code) VALUES (?, ?, ?)`,
        [url, alias, code],
        (err, rows) => {
            if (err) {
                res.status(500).send('Unkown table');
                return null;
            }
            //inserID reszt szedi ki
            conn.query(
                `SELECT * FROM aliaser WHERE id = ${rows.insertId};`,
                (err, rows) => {
                    if (err) {
                        res.status(500).send('Unkown table');
                        return null;
                    }
                    res.send(rows[0]);
                })
            // res.send(rows); //insertID megjeleniteshez ez kellett
        })
})