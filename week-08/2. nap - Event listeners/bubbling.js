'use strict';

const nav = document.querySelector('nav');
const imgInspector = document.querySelector('.img-inspector');
let size = 500;
let posX = 0;
let posY = 0;

nav.addEventListener('click', navigate);

function navigate(e) {
    const position = e.target.dataset.direction;
    if (position === 'up') {
        posY -= 10;
        imgInspector.style.backgroundPositionY = posY + 'px';
    };
    if (position === 'down') {
        posY += 10;
        imgInspector.style.backgroundPositionY = posY + 'px';
    };
    if (position === 'left') {
        posX -= 10;
        imgInspector.style.backgroundPositionX = posX + 'px';
    };
    if (position === 'right') {
        posX += 10;
        imgInspector.style.backgroundPositionX = posX + 'px';
    };
    if (position === 'in') {
        size += 20;
        imgInspector.style.backgroundSize = size + 'px';
    };
    if (position === 'out') {
        size -= 20;
        imgInspector.style.backgroundSize = size + 'px';
    };
};
