'use strict';

const express = require('express');
const app = express();

//probalkozz console.log cocktails[0]-al

const cocktails = [
    {
      name: 'GIN FIZZ',
      price: 1520,
      contains: ['gin', 'sugar', 'lemon juice', 'soda'],
      isAlcoholic: true,
    },
    {
      name: 'BLOODY MARY',
      price: 1650,
      contains: ['vodka', 'tomato juice', 'spices'],
      isAlcoholic: true,
    },
    {
      name: 'SEX ON THE BEACH',
      price: 1850,
      contains: [
        'vodka',
        'peach schnapps',
        'orange juice',
        'cranberry juice'
      ],
      isAlcoholic: true,
    },
    {
      name: 'CUBA LIBRE',
      price: 1850,
      contains: ['rum', 'cola', 'lime juice'],
      isAlcoholic: true,
    },
    {
      name: 'MOJITO',
      price: 1850,
      contains: ['rum', 'sugar', 'lime juice', 'soda water'],
      isAlcoholic: true,
    },
    {
      name: 'LONG ISLAND ICE TEA',
      price: 2450,
      contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'],
      isAlcoholic: true,
    },
    {
      name: 'VIRGIN MOJITO',
      price: 990,
      contains: ['sugar', 'lime juice', 'soda water'],
      isAlcoholic: false,
    },
    {
      name: 'SAFE SEX ON THE BEACH',
      price: 990,
      contains: ['peach schnapps', 'orange juice', 'cranberry juice'],
      isAlcoholic: false,
    },
  ];

 const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];


app.set('view engine', 'ejs');

// app.listen(3050, () => {
//     console.log('The app is running on port 3040.');
// });

app.get('/', (req, res) => {
   res.render('cocktails', {cocktails})
});


let ginfizz = cocktails[0];
let ginfizz2 = JSON.stringify(ginfizz);
console.log(ginfizz.hasOwnProperty("name"));
console.log(ginfizz.price);