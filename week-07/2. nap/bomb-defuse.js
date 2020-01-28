
let button = document.querySelector("#defuse");

button.addEventListener("click", function (e) {
    console.log('Button was clicked!!!')
});


let display = document.getElementById("display").textContent;

let countdown = setInterval(() => {
    display--;
    document.getElementById("display").textContent = display;

    if (display <= 0) {
        document.getElementById("display").textContent = "Bomb exploded....not your lucky day"
    }
}, 1000);

function clickDefuse() {
    document.querySelector("#display").innerHTML = 'Bomb defused....lucky boy';
    clearInterval(countdown);
};