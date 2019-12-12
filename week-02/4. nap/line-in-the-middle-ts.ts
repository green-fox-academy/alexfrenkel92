'use strict';

// const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d');

// // DO NOT TOUCH THE CODE ABOVE THIS LINE

// // draw a red horizontal line to the canvas' middle.
// // draw a green vertical line to the canvas' middle.

function draw0 () {
    const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 3;
        ctx.moveTo(300, 200);
        ctx.lineTo(150, 200);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.moveTo(300, 200);
        ctx.lineTo(300, 50);
        // ctx.lineTo()
        ctx.stroke();
    }
}

draw0();
