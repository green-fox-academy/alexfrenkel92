'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

const x: number = 0;
const y: number = 0;


function drawToCenter (x, y) {
    const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
    // const x: number = 10;
    // const y: number = 30;
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(300, 200);
        ctx.stroke();
    }
}

for (let i: number = 50; i < 200; i += 50){
    drawToCenter(50, 0 + i);
}
    

// drawToCenter(100, 0);