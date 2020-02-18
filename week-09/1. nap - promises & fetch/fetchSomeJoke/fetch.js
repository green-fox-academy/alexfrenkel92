'use strict';

let jokes = [
    { id: 1, content: 'When archeologists found King Tuts Tomb, they found graffiti on the wall saying "Chuck Norris was here".'},
    {id: 2, content: 'Chuck Norris invented the Olympic Games in hopes of finding a worthy opponent.'},
    {id: 3, content: 'Chuck Norris threw a grenade and killed 50 people, then it exploded.'},
    {id: 4, content: `The THX sound is actually a recording of Chuck Norris' yawn.`}
]

let divContent = document.querySelector('div');

divContent.innerText = jokes[0];