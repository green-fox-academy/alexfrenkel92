'use strict'

// require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path');
app.use(express.json());

app.listen(PORT, () => {
    console.log('Server is running on PORT 3000');
});

app.get('/hello', (req, res) => {
    res.send('Hello boooooy')
})

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'GoFreee_69',
    database: 'reddit',
});

conn.connect((err) => {
    if (err) {
        console.error('Cannot connect to the database', err);
        return;
    }
    console.log('Connection established');
    // conn.end();
});

app.get('/posts', (req, res) => {
    conn.query('SELECT * FROM posts;', (err, table) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.send(table);
    });
});


app.post('/posts', (req, res) => {
    let id = 0;
    let title = req.body.title;
    let url = req.body.url;
    let timestamp = Date.now();
    let score = req.body.score;
    conn.query(
        `INSERT INTO posts (title, url, timestamp, score) VALUES 
        ('${title}', '${url}', '${timestamp}', '${score}');`,
        (err, table) => {
            if (err) {
                res.status(500).send('Unkown table');
                return null;
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({
                id: id,
                title: title,
                url: url,
                timestampl: timestamp,
                score: score
            })
        }
    )
});