'use strict'

const express = require('express');
const app = express();;

app.set('view engine', 'ejs');
//alabb a webshopot a views mappabol olvassa be. Alap beallitas a mappa
app.use(express.static('views'));

let database = {
    fruits: [
        'apple',
        'melon',
        'lemon'
    ]
};

//h1 (ola olaaa Sanyiii-t) zoldre szinezi
app.get('/', function (request, response) {
    response.send('<h1 style="color: limegreen;">Hello!</h1>');
  })

//kiirja a Hellot a porton. Ha ez nincs cannot GET-t ad vissza
app.get('/', function (request, response) {
    response.send('Olaaaaa');
})

//a localhost:3010/dom-example-t letrehozzuk es betoltjuk oda az index.html-t
app.get('/dom-example', (req, res) => {
    // console.log({dirname: __dirname});
    dirname: __dirname
    res.sendfile(__dirname + '/index.html');
});

//webshopot beolvassa, de kell hozza a views mappa
app.get('/firstwebshop', (req, res) => {
    let username = 'Sanyiii';
    res.render('firstwebshop', {username: username, fruits: database.fruits});
});

//elinditom a szervert port 3010-n
app.listen(3010, function () {
    console.log('The app is running on port 3010')
})

