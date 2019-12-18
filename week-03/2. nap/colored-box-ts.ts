'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 600;
const heigth = 400;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(150, 350);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(150, 350);
ctx.lineTo(450, 350);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(450, 350 );
ctx.lineTo(450, 50);
ctx.stroke();

ctx.strokeStyle = 'pink';
ctx.beginPath();
ctx.moveTo(450, 50);
ctx.lineTo(150, 50);
ctx.stroke();