'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 600;
const heigth = 400;
// DO NOT TOUCH THE CODE ABOVE THIS LINE

ctx.strokeStyle = 'red';
ctx.strokeStyle = 'green';
ctx.strokeRect(100, 100, 400, 100);

ctx.fillStyle = 'orange';
ctx.fillRect (50, 50,  100, 100);

ctx.strokeStyle = 'blue';
ctx.strokeRect(10, 50, 50, 50);

ctx.fillStyle = 'blue';
ctx.fillRect(100, 250, 50, 50);


ctx.beginPath();
// ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.lineWidth = 3;
ctx.moveTo(300, 300); // felveszi a tollat es odeb teszi
ctx.lineTo(300, 350); // vonalat huz
ctx.lineTo(350, 350);
ctx.lineTo(350, 300);
ctx.lineTo(300, 300);
ctx.stroke();

let radians = (Math.PI / 180) * 360;
ctx.strokeStyle = 'purple';
ctx.lineWidth = 8;
ctx.beginPath();
// ctx.arc(width / 2, heigth / 2, 25, 0, radians);
ctx.arc(250, 250, 50, 0, radians);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.arc(35, 75, 25, 0, radians);
ctx.stroke();

ctx.lineWidth = 2;
// ctx.strokeStyle = 'pink';
for (let i = 100; i < 500; i += 50) {
	if (i === 250) {
		ctx.fillRect(i, i, 30, 30);
	} else {
		ctx.strokeRect(i, i, 30, 30);
	}
}

function drawSquare(xPos: number, yPos: number, size: number, color: string): void {
	ctx.strokeStyle = color;
	ctx.strokeRect(xPos, yPos, size, size);
}

drawSquare(150, 150, 50, 'rgb(200,200,200)');