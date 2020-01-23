'use strict';

console.log(window.document);
console.dir(window.document);
let pElements = document.getElementsByTagName('p');
console.log(pElements);
console.log(pElements[0].innerText);
console.log(pElements[0].innerText[0]);
console.log(typeof pElements[0].innerText);

console.log(document.querySelector('p'));

console.log(pElements);
console.log(document.querySelectorAll('p'));

pElements[1].innerText = '<span>Bye World!</span>';
pElements[1].textContent = 'Bye World!';
pElements[1].innerHTML = '<span>Bye World!</span><script>alert("lol")</script>';



/*
  <button>Click me!</button>
  <ul>
    <li>First item</li>
  </ul>
*/

let buttonElement = document.getElementsByTagName('button')[0];
let ulElement = document.querySelector('ul');
let liElementsSnapshot = document.querySelectorAll('li');
let liElements = document.getElementsByTagName('li');

buttonElement.onclick = () => {
  let liElement = document.createElement('li');
  liElement.onclick = () => {
    alert('li element was clicked');
    console.log('after alert');
  }
  liElement.innerText = 'Apple';
  liElement.setAttribute('class', 'red');
  liElement.className += ' fruit';
  liElement.classList.toggle('tasty');
  liElement.toggleAttribute('readonly');
  ulElement.appendChild(liElement);
  console.log({
    liElement: liElement,
    liElementsSnapshot: liElementsSnapshot,
    liElements: liElements
  });

  // console.log({ liElement, liElements, liElementsSnapshot });
}

document.body.removeChild(document.querySelector('h1'));
ulElement.style.backgroundColor = 'tomato';
document.querySelector('ol').appendChild(document.querySelector('li'));

const specialPElement = document.querySelector('#special');
console.log(specialPElement.dataset);
specialPElement.dataset.veryImportantAttribute = 'lol';
console.log({
  innerText: specialPElement.innerText,
  textContent: specialPElement.textContent,
  innerHTML: specialPElement.innerHTML
});

// document.querySelector('button').onclick = 
// pElements[1].innerHTML = `<img src="empty.gif" onerror="alert('test');this.parentNode.removeChild(this);" />`