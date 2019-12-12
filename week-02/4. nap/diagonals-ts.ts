'use strict';

// const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d');

// // DO NOT TOUCH THE CODE ABOVE THIS LINE

// // Draw the canvas' diagonals.
// // If it starts from the upper-left corner it should be green, otherwise it should be red.

function draw () {
    const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 3;
        ctx.moveTo(0, 0);
        ctx.lineTo(600, 400);
        ctx.stroke();
    }
}

draw();