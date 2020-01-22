// 'use strict';

// //HERO CLASST letrehozni kesobb

// const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d');

// let posX: number = 0;
// let posY: number = 0;

// window.onload = () => {
//   // Drawing a floor tile
// //   const heroDown = document.getElementById('hero-down') as HTMLImageElement;
// //   const heroUp = document.getElementById('hero-up') as HTMLImageElement;
// //   const heroLeft = document.getElementById('hero-left') as HTMLImageElement;
// //   const heroRight = document.getElementById('hero-right') as HTMLImageElement;
// //   const wall = document.getElementById('wall') as HTMLImageElement;
// //   const boss = document.getElementById('boss') as HTMLImageElement;
// //   const skeleton = document.getElementById('skeleton') as HTMLImageElement;
//   // const veganKolbasz = document.getElementById('veganKolbasz') as HTMLImageElement;
//   // ctx.drawImage(veganKolbasz, posX, posY);

//   const image = document.getElementById('hero-down') as HTMLImageElement;
//   ctx.drawImage(image, posX, posY);
// };

// let layout = 
// [ 
//  [0,0,0,1,0,0,0,0,0,0],
//  [0,0,0,1,0,1,0,1,1,0],
//  [0,1,1,1,0,1,0,1,1,0],
//  [0,0,0,0,0,1,0,0,0,0],
//  [1,1,1,1,0,1,1,1,1,0],
//  [0,1,0,1,0,0,0,0,0,0],
//  [0,1,0,1,0,1,1,0,1,0],
//  [0,0,0,0,0,1,1,0,1,0],
//  [0,1,1,1,0,0,0,0,1,0],
//  [0,0,0,1,0,1,1,0,0,0],
// ]

// function drawMap() {
//     const floor = document.getElementById('floor') as HTMLImageElement;
//     const wall = document.getElementById('wall') as HTMLImageElement;
//     for (let i: number = 0; i < layout.length; i++){
//     for (let j: number = 0; j < layout.length; j++) {
//         if (layout[j][i] == 0) {
//           ctx.drawImage(floor, i * 72, j * 72);
//         } else {
//           ctx.drawImage(wall, i * 72, j * 72);
//       }
//     }
//   }
// }
// drawMap()

// let magicNum: number = 72;

// function wallLeft(posX: number, posY: number) {
//   return layout[posY / magicNum][(posX / magicNum) - 1] === 1;
// };

// function wallRight(posX: number, posY: number) {
//   return layout[posY / magicNum][(posX / magicNum) + 1] === 1;
// };

// function wallDown(posX: number, posY: number) {
//   return layout[(posY / magicNum) + 1][posX / magicNum] === 1;
// };

// function wallUp(posX: number, posY: number) {
//   return layout[(posY / magicNum) - 1][posX / magicNum] === 1;
// }

//   function onKeyPress(event) {
//     const heroDown = document.getElementById('hero-down') as HTMLImageElement;
//     const heroUp = document.getElementById('hero-up') as HTMLImageElement;
//     const heroLeft = document.getElementById('hero-left') as HTMLImageElement;
//     const heroRight = document.getElementById('hero-right') as HTMLImageElement;
//     const floor = document.getElementById('floor') as HTMLImageElement;
//     const wall = document.getElementById('wall') as HTMLImageElement;
//     const boss = document.getElementById('boss') as HTMLImageElement;
//     const skeleton = document.getElementById('skeleton') as HTMLImageElement;

//   switch (event.keyCode) {
//     case 37:
//       // if (posX <= 0 || posX === 0) {
//       //   break;
//       // }
//       if (posX <= 0 || wallLeft(posX, posY) === true) {
//         break;
//       }
//         drawMap();
//         ctx.drawImage(heroLeft, posX -= magicNum, posY);
//       break;

//     case 38:
//       // if (posY <= 0 || posY === 0) {
//       //   break;
//       // }
//       if (posY <= 0 || wallUp(posX, posY) === true) {
//         break;
//       }
//         drawMap();
//         ctx.drawImage(heroUp, posX, posY -= 72);
//       break; 

//       case 39:
//       //if (posX >= 648 || posX === 648) {
//       //   break;
//       //}  
//       if (posX >= magicNum * 9 || wallRight(posX, posY) === true) {
//           break;
//         } else {
//           drawMap();
//           ctx.drawImage(heroRight, posX += magicNum, posY);
//           break;
//         }

//     case 40:
//       // if (posY >= 648 || posY === 648) {
//       //   break;
//       // }
//       if (posY >= magicNum * 9 || wallDown(posX, posY) === true) {
//         break;
//       }
//         drawMap();
//         ctx.drawImage(heroDown, posX, posY += magicNum);
//       break;
//   }
// }

// document.body.addEventListener('keydown', onKeyPress);