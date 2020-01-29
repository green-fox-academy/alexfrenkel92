'use strict'

const express = require('express');
const goats = require('./goats');
const app = express();

app.get('/kecske', (res, req) => {
    console.log('KecskeSzerver');
    console.log();
    req.json(goats.list);
});
//kecske pathra ker valamit

app.get('/kecske/:id', (req, res) => { //az id a kecske-ben levo lista x-ik ID elemet tolti be, ha pl 2-t irok, 2 id elemet tolti be..... : utan barmi johet elvleg
    const goatById = goats.list.find((goats) => goats.id === Number(req.params.id)); //for ciklus helyet megkeresi azt a kecsket, es kiirja, akinek azonos az ID szama, azzal amit kertunk .......kell a NUM, mert az id string
    // res.json(goatById);
    if (goatById === undefined) {
        res.status(404).send('nincs is ilyen kecske');
      } else {
        res.json(goatById);
      }
})

app.listen(8080, () => {
    console.log('Port is ok')
});