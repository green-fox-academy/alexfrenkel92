const express = require('express');
const app = express();
module.exports = app;
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

app.get('/groot/', (req, res) => {
    if (!req.query.message) {
        res.status(404).json({
            error: 'I am Groot!'
        })
    } else if (req.query.message) {
        res.status(200).json({
            Received: req.query.message,
            Translated: 'I am Groot!'
            })
    }
});

