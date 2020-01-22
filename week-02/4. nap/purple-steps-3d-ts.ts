'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

let rectW: number = 25;
let rectH: number = 25;

function purpleSteps3D (rectPW, rectPH) {
    ctx.beginPath();
    ctx.fillStyle = 'purple';
    ctx.fillRect(rectPW, rectPH, 25, 25)
    ctx.stroke();
}
// purpleSteps3D(10, 10);

for (let i: number = 0; i < 400; i += 25) {
    purpleSteps3D(i, i);
}

