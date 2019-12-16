'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function purpleSteps (w, h) {
    ctx.beginPath();
    ctx.fillStyle = 'purple';
    ctx.fillRect(w, h, 25, 25)
    ctx.stroke();
}

for (let i: number = -25; i < 400; i += 25) {
    purpleSteps(i, i);
}