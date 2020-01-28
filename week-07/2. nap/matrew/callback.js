console.log('start of program');

setTimeout(function greetingFromTheOtherside() {
  console.log('hello from the otherside');
}, 0);

let id = setTimeout(function greetingFromTheOtherside() {
  console.log('hello again from the otherside');
}, 2000);

console.log(id);
clearTimeout(id);
console.log('end of program');

// event loop

let counter = 4;

let intervalId = setInterval(() => {
  console.log(`${counter} hi`);
  counter--;
  if (counter === 0) {
    clearInterval(intervalId);
  }
}, 1000);       