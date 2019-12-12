'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function horLine (x, y) {
    const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 50, y);
        ctx.stroke();
    }
}

// horLine(30, 30);


for (let i: number = 0; i < 600; i += 200){
    horLine(30 + i, 30);
}