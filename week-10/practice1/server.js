'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded());

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

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


app.get('/', (req, res) => { //ugyanaz mint express.static('public')
    res.sendFile(__dirname + '/public/index.html'); 
});

app.get('/addresses', (req, res) => {
    conn.query(
        `SELECT * FROM addresses`, (err, rows) => {
            if (err) {
                console.log(`Cannot retrieve data: ${err.toString()}`);
                res.sendStatus(404);
                return null;
            }
            res.status(200).send(rows);
        }
    )
})

app.post('/address', (req, res) => {
    const zip = req.body.zip;
    const city = req.body.city;
    const street = req.body.street;
    const nr = req.body.nr;

    conn.query(
        `INSERT INTO addresses (zip, city, street, nr) VALUES (?, ?, ?, ?)`,
        [zip, city, street, nr],
        (err, rows) => {
            if (err) {
                res.status(404).send('Unkown table');
                return null;
            }
            res.status(200).send(rows);
        }
    )
})