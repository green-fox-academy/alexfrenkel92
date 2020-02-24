'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path');
app.use(express.json());
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.listen(PORT, () => {
    console.log('Server is running on PORT 3000');
});


let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

conn.connect((err) => {
    if (err) {
        console.error('Cannot connect to the database', err);
        return;
    }
    console.log('Database connected');
    // conn.end();
});

app.get('/posts', (req, res) => {
    conn.query('SELECT * FROM posts;', (err, table) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.status(200).send(table);
    });
});


app.post('/post', (req, res) => {
    let id = 0;
    let title = req.body.title;
    let url = req.body.url;
    let timestamp = Date.now();
    let score = 0;
    conn.query(
        `INSERT INTO posts (title, url, timestamp, score) VALUES 
        (?, ?, ?, ?)`, //segit elkerulni az sql injection-t
        [title, url, timestamp, score]);
        (err) => {
            if (err) {
                res.status(500).send('Unknown table');
                return null;
            }
        }
        //ezzel az oldal refresshel es mutatja a mar betoltott adatot
        res.redirect('/');
        //az alabbi resz json-ban adja vissza a bevitt adatot, kulon oldalon
        // res.setHeader('Content-Type', 'application/json');
        // res.status(200).json({
        //     id: id,
        //     title: title,
        //     url: url,
        //     timestampl: timestamp,
        //     score: score
        // })
});

app.put('/upvote/:id', (req, res) => { //: kell id ele, igy tudatjuk a queryvel, hogy ezt az adatot mi adjuk meg
    conn.query(
        `UPDATE posts SET score = score + 1 WHERE id = ${req.params.id}`,
        (err, result) => {
            if (err) {
                res.status(500).send('Upvote failed');
                return null;
            }
            res.status(200).send(result);
        }
    )
})

app.put('/downvote/:id', (req, res) => { //: kell id ele, igy tudatjuk a queryvel, hogy ezt az adatot mi adjuk meg
    conn.query(
        `UPDATE posts SET score = GREATEST (score - 1, 0) WHERE id = ${req.params.id}`, //GREATEST es 0 megakadalyozza, hogya a score 0 ala menjen
        (err, result) => {
            if (err) {
                res.status(500).send('Downvote failed');
                return null;
            }
                res.status(200).send(result);
        }
    )
})

app.delete('/delete/:id', (req, res) => {
    conn.query(
        `DELETE FROM posts WHERE id = ${req.params.id}`,
        (err, result) => {
            if (err) {
                res.status(500).send('Delete failed');
                return null;
            }
            res.status(200).send(result);
        }
    )
})