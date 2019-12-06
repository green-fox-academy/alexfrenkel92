'user strict';

let apple;

console.log(apple);
console.log(apple + 1);

apple = null;
console.log(apple);

let a: number = 13;
if (a === 13) {
    console.log(a + ' erteke 13')
}

let thirsty: boolean = true;
let hungry: boolean = false;
if (thirsty && hungry) {
    console.log('Lunch time!');
  } else if (thirsty || hungry) {
    console.log('Snack time!');
  } else {
    console.log('No food for you.');
  }

//   let a1: number = 0;
//   while (a1 < 10) {
//       console.log(a);
//       a++;
//   }

for (let i: number = 0; i < 100; i++) {
    console.log(i);
}