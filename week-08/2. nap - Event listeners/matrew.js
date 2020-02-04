'use strict';

const maci = document.querySelector('.maci') //.class

matchMedia.onclick = () => {
    console.log(maci);
    //vaaagz alert(1);
};

maci.addEventListener('mousover', () => {
    console.log('macika');
});

const eventHandler = (event) => { //barmilyen eventet ra tudok rakni barmire
    console.log(event);
};

maci.addEventListener('mousover', eventHandler); //eventet beveszi, ha meghatarozom
maci.removeEventListener('mousover', eventHandler);

const input = document.querySelector('input');

input.addEventListener('blur', eventHandler);

document.body.addEventListener('keydown', (event) => { //itt nem valotozo van, hanem egybol a body-t hivjuk meg ------ majd az event-t megirjuk
    if (event.keyCode === 74) {
        console.log('lefele megy')
    };
});