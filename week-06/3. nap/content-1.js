'use strict';

const pElements = document.querySelectorAll('p');
console.log(pElements);

pElements[0].innerText = pElements[1].innerText
pElements[1].innerText = pElements[2].innerText;;
pElements[2].innerHTML = pElements[3].innerHTML;
pElements[3].innerText = pElements[0].innerText;