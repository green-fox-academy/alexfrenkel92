'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 600;
const heigth = 400;
//DO NOT TOUCH THE CODE ABOVE THIS LINE

//lineto - vonalat huz
//moveto - felveszi a tollat es odebb teszi
//ctx.stroke - kifesti


ctx.strokeStyle = 'red';
ctx.strokeRect (100, 50,  500, 150);
ctx.strokeStyle = 'blue';
ctx.strokeRect (10, 50,  50, 50); // 111

ctx.fillStyle = 'tomato';
ctx.fillRect (100, 250,  50, 50);


//kor rajzolas dobozba 111-be
let radians = (Math.PI/180)*180; //keplet, ami radiant alakit at??? Ha 2. 180-t atirjuk 360-ra, teljes k0rt rajzol
ctx.strokeStyle = 'green';
ctx.beginPath(); //felemeli a tollad es uj helyen folytatja a rajzolast
ctx.arc(35, 75, 25, 0, radians) //parameter valamit adunk meg itt
ctx.fill();


for (let i = 0; i < 5; i++) { //5 dobozt fog rajzolni
    ctx.strokeRect(i * 10, i * 5, 30, 30);
}

for (let i = 50; i < 500; i += 100) { //5 dobozt fog rajzolni
    if (i === 250 {
        ctx.fillRect(i * 10, i * 5, 30, 30);

    } else {
        ctx.strokeRect(i * 10, i * 5, 30, 30);

    }
}