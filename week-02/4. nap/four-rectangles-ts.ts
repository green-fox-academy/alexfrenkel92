'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


let color: string[] = ['red', 'green', 'magenta', 'blue'];

function fourRec (w, h, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(10 + w, 10 + h, w + 30, h + 30);
        ctx.stroke();
    }


for (let i: number = 0; i < color.length; i++){
    fourRec(i * 30, i * 30, color[i]);
}