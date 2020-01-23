// npm install express (package neve) - ezzel telepitunk egy konnyed szerverkezelo cuccost

const express = require('express'); //szerverhez valtozot hozunk letre?

const app = express();

// itt kezeljuk a cliens GET kereset, amit  abongeszo kuld
app.get('/', function (request, response) {
    response.send('Hello');
})

app.get('/dom-example', (res, req) => {
    response.send('Masik endpoint');
});

app.get('/dom-example', (res, req) => {
    console.log(_dirname);
    res.sendFile(__dirname + '/.html'); //itt html tartalmat iratnank ki
});


// hallgatozik, argumentum: melzik portrol induljon
app.listen(3000, function () {
    console.log('The application is running on port 3000');
});

/////szerverrrr
//npm install ejs - eloszor telepiteni kell
//igy elerheto lesz a res.render parancs - a template, kepeket ujra kell renderelje a bongeszo
///webshop.ejs -t letrehozni
//  beirod html:5 es general rakas kodot, amit nem kell berini
//  htmlbe ha js kodot akarok: <% > => ezt szerveroldali renderelesnek hivjak
//Szerveroldali rendereles:
//  amikor dinamikusan valtozik meg a kod a kliens oldalon

//html body-ba <% username %>
//  username valtozot behelyetessiti html kodba
// <%= index %>  for loopba az index eredmenye latszani fog, az = jel miatt

//node mode: nem kell kezzel, hanem magatol ujra indul a ejs valtoztatas soran

