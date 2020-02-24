'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 4000;
require('dotenv').config();
const tableName = 'posts';
app.use(express.static('public'));


app.use(express.urlencoded())
app.use(express.json());
// connection details
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'reddit'
});

// database connection
conn.connect((err) => {
    if (err) {
        console.log('Error connecting to DB');
        console.log(err.message);
        return;
    }
    console.log('Database connection established');
});

// serving the HTML files
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
  
  app.get('/newpost', (req, res) => {
    res.sendFile(__dirname + '/public/newpost.html');
  });

//Helloworld
app.get('/hello', (req, res) => {
    res.send('Hello World')
});
// get all posts
app.get('/posts', (req, res) => {
    let select_all = `SELECT * FROM ${tableName}`;
    conn.query(select_all, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send('DB ERROR');
            return;
        }
        res.status(200).send(result);
    })
});
// post a new post
app.post('/posts', (req, res) => {
    let id = 0;
    let title = req.body.title;
    let url = req.body.url;
    let timestamp = Date.now();
    let score = 0;
    let addpost = `INSERT INTO ${tableName} (title, url, timestamp, score)
    VALUES 
    ("${title}", "${url}",${timestamp}, "${score}")`;
    console.log(addpost);
    conn.query(addpost, (error, result) => {
        if (error) {
            res.status(500).send('Database ERROR');
            console.log(error);
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            id: id,
            title: title,
            url: url,
            timestamp: timestamp,
            score: score
        });
        console.log('Data inserted');
    });
});
//vote up

app.put('/posts/:id/upvote', (req, res) => {
    let upvote = `UPDATE ${tableName} SET score = score +1 WHERE (id = ${req.params.id})`;
    conn.query(upvote, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send('DB ERROR');
            return;
        }
        res.status(200).send(result);
    })
});
//votedown
app.put('/posts/:id/downvote', (req, res) => {
    let downvote = `UPDATE ${tableName} SET score = score -1 WHERE (id = ${req.params.id})`;
    conn.query(downvote, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send('DB ERROR');
            return;
        }
        res.status(200).send(result);
    })
});

//deletepost

app.delete('/posts/:id', (req, res) => {
    let query = `DELETE FROM ${tableName} 
    WHERE id = ${req.params.id}`;
    conn.query(query, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send('DB ERROR');
            return;
        }
        res.status(200).send(result);
    });
});

app.listen(PORT, () => {
    console.log(`Application is listening on port# ${PORT}`);
});