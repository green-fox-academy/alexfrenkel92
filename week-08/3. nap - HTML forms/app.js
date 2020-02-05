const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/login', (req, res) => {
  console.log(req.query);
  res.send({message: 'success'});
})

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send({message: 'success'});
})

app.post('/api/login', (req, res) => {
  console.log(req.body);
  res.send({message: 'big success'});
})


app.listen(3000, () => console.log('listening'));