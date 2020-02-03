const express = require('express'); //behuzzuk az expresst
const app = express(); //letrehozzuk az alkalmazast
const PORT = 3020;

//set the view engine to ejs
//We use app.set('view engine', 'ejs'); to tell express to use EJS as our templating engine Express will automatically look inside the views/ folder for template files
app.set('view engine', 'ejs');

// // home page
// app.get('/', (req, res) => {
//   //render `home.ejs`
//   //The res.render() method is used to render the view we pass it and send the HTML to the client
//   res.render('home');
// });

app.get('/', (req, res) => {
    //render `home.ejs`
    //The res.render() method is used to render the view we pass it and send the HTML to the client
    res.render('home', {
        title: 'Hello World',
        title2: `I'm Osama`
  });
});

//megadom, hogy olvassa be az index.html-t
app.get('/index', (req, res) => {
    dirname: __dirname;
    res.sendFile(__dirname + '/index.html');
});

// start express app on port 3000 .... hallgatozik a porton
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});