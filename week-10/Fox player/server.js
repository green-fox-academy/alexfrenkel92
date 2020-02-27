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
    console.log(`Server is running on port ${PORT}`)
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

//TRACKS GTE POST DELETE
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

app.post('/post-track', (req, res) => {
    const videoId = req.body.videoId;
    fetchVideoInfo(`${videoId}`)
        .then((videoInfo) => {
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

app.delete('/delete-track/:id', (req, res) => {
    conn.query(
        `DELETE FROM tracks WHERE id = ${req.params.id}`,
        (err, result) => {
            if (err) {
                res.status(500).send('Cannot delete track');
                return null;
            }
            res.status(200).redirect('/tracks');
        }
    )
})

//PLAYLISTS GET POST DELETE
app.get('/playlists', (req, res) => {
    conn.query(`SELECT * FROM playlists;`, (err, table) => {
        if (err) {
            console.log(`Cannot retrieve data: ${err.toStringify()}`);
            res.sendStatus(500);
            return null;
        }
        res.status(200).send(table);
    })
})

app.post('/post-playlist', (req, res) => {
    const playlistName = req.body.name;
    conn.query(
        `INSERT INTO playlists (name) VALUES (?)`,
        [playlistName]);
    (err) => {
        if (err) {
            res.status(500).send('Unkown table');
            return null;
        }
    }
    res.redirect('playlists');
})

app.delete('/delete-playlist/:id', (req, res) => {
    conn.query(
        `DELETE FROM playlists WHERE id = ${req.params.id}`,
        (err, result) => {
            if (err) {
                res.status(500).send('Cannot delete playlist');
                return null;
            }
            res.status(200).redirect('/playlists');
        }
    )
})

//GET, ADD, DELETE SONG to/from SPECIFIC PLAYLIST

app.get('/playlists-tracks', (req, res) => {
    conn.query(`SELECT * FROM playlists_tracks;`, (err, table) => {
        if (err) {
            console.log(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.status(200).send(table);
    })
})

app.post('/post-track-to-playlist', (req, res) => {
    const trackid = req.body.trackid;
    const playlistid = req.body.playlistid;
    conn.query(
        `INSERT INTO playlists_tracks (trackid, playlistid) VALUES (?, ?)`,
        [trackid, playlistid]);
        (err) => {
            if (err) {
                res.status(500).send('Unkown table');
                return null;
            }
        }
        res.status(200).redirect('/playlists-tracks');
})

app.delete('/delete-track-from-playlist/:trackid&&:playlistid', (req, res) => {
    conn.query(
        `DELETE FROM playlists_tracks WHERE
        trackid = ${req.params.trackid} AND playlistid = ${req.params.playlistid};`,
        (err, result) => {
            if (err) {
                res.status(500).send('Cannot delete track from playlist');
                return null;
            }
            res.status(200).redirect('/playlists-tracks');
        }
    )
})