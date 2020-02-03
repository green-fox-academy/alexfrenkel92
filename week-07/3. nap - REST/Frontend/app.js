'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('assets'));

app.listen(8080, () => {
    console.log('Port is running on 8080');
});

app.get('/', (req, res) => {
    let dirname = __dirname;
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    const doubling = Number(req.query.input * 2);
    const inputNr = Number(req.query.input);
    if (!req.query.input) {
        res.send({ error: 'Please provide an input!' });
    } else {
        res.json({ received: inputNr, result: doubling });
    }
});

app.get('/greeter', (req, res) => {
    const name = req.query.name;
    const title = req.query.title;
    if (!req.query.name && !req.query.title) {
        res.status(400).send({ error: 'Please provide a name and a title!' });
    } else if (!req.query.name) {
        res.status(400).json({error: 'Please provide a name'});
    } else if (!req.query.title) {
        res.status(400).send({ error: 'Please provide a title!' });
    } else {
        res.json({ welcome_message: `Oh, hi there ${name}, my dear ${title}!` });
    }
});

app.get('/appenda', (req, res) => {
    const appendable = req.query.appendable;
    if (!req.query.appendable) {
        res.status(404).send();
    } else {
        res.json({ appended: `${appendable}a` })
    }
});

app.get('/dountil/'), (req, res) => {
    const sum = Number(req.query.sum);
    var a = 1;
    var input = sum;
    var b = 0;

    while (a <= input) {
        b = a + b;
        a++;
    };

    res.json({ sum: b });

}