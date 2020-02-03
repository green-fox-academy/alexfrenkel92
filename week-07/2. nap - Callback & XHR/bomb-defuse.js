'use strict';

let button = document.querySelector("#defuse");
let button1 = document.querySelector("#armIt");
let display = document.getElementById("display").textContent;
let counter = Number;


function countDown() {
    counter = setInterval(() => {
        display--;
        document.getElementById("display").textContent = display;
        if (display <= 0) {
            document.getElementById("display").textContent = "Bomb exploded....not your lucky day"
        }
    }, 1000);
}

countDown();

button.onclick = function (e) {
    console.log('Button was clicked!!!');
    document.querySelector("#display").innerHTML = 'Bomb defused....lucky boy';
    // clearTimeout(countdown);
    defuse();
};

button1.onclick = function (e) {
    console.log('Button was clicked!!!');
    document.querySelector('#display').innerHTML = display;
    countDown();
};

function defuse() {
    clearInterval(counter);
}

// function clickDefuse() {
    //     document.querySelector("#display").innerHTML = 'Bomb defused....lucky boy';
    //     clearInterval(countdown);
// };  //HTML tag-be ezt kell beteni: onclick="clickDefuse()", hogy meghivjad