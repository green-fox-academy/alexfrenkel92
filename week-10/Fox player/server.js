'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fetchVideoInfo = require('youtube-info');

app.use(express.json());
app.use(express.static('public')); //ugyanaz mint app.get es dirname
app.use(bodyParser.urlencoded());

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.get('/index', (req, res) => { //ugyanaz mint express.static('public')
    res.sendFile(__dirname + '/public/index.html')
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

app.get('/tracks', (req, res) => {
    conn.query('SELECT * FROM tracks;', (err, table) => {
        if (err) {
            console.log(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.status(200).send(table);
    })
})

app.post('/post', (req, res) => {
    const videoId = req.body.videoId;

    fetchVideoInfo(`${videoId}`).then(function (videoInfo) {
        console.log(videoInfo.title, videoInfo.owner, videoInfo.duration);
        const id = 0;
        const title = videoInfo.title;
        const artist = videoInfo.owner;
        const duration = videoInfo.duration;
        const url = videoInfo.url;

        conn.query(
            `INSERT INTO tracks (title, artist, duration, url) VALUES (?, ?, ?, ?)`,
            [title, artist, duration, url]);
            (err) => {
                if (err) {
                    res.status(500).send('Unknown table');
                    return null;
                }
            }
            res.redirect('/tracks');
    });

})