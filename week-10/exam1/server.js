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

app.get('/index', (req, res) => { //ugyanaz mint express.static('public')
    res.sendFile(__dirname + '/public/index.html');
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

app.post('/orders', (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const base = req.body.base;
    const toppings = req.body.toppings;
    conn.query(
        `INSERT INTO takeout (name, address, base, topping) VALUES (?, ?, ?, ?)`,
        [name, address, base, toppings],
        (err, rows) => {
            if (err) {
                res.status(500).send('Unkown table');
                return null;
            }
            console.log(rows.insertId);

            //ez a resz felelos az orderId megjelenitesert
            conn.query(
                `SELECT * FROM takeout WHERE id = ${rows.insertId};`, //csak 1 rows insertId van, a legutobbi tombe, amit elkuldtunk
                (err, rows) => {
                    if (err) {
                        res.status(500).send('Unkown table');
                        return null;
                    }
                    res.send(rows[0]); //rows insertId 0-ik eleme. CSak 1 elembol all a cucc
                })
        })
})

app.get('/orders', (req, res) => {
    conn.query('SELECT * FROM takeout;', (err, table) => {
        if (err) {
            console.log(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.status(200).send(table);
    })
})

app.get('/orders/:id', (req, res) => {
    conn.query(`SELECT * FROM takeout where id = ${req.params.id};`, (err, table) => {
        if (err) {
            console.log(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.status(200).send(table);
    })
})

app.patch('/orders/:id', (req, res) => {
    const id = req.params.id;
    const newStatus = req.body.status;
    conn.query(`UPDATE takeout SET status = ? WHERE id = ${id};`, [newStatus],
        (err, table) => {
            if (err) {
                console.log(`Cannot retrieve data: ${err.toString()}`);
                res.sendStatus(400);
                return null;
            }
            res.status(200).send(table);
        })
})