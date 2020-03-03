'use strict';

const addressInputForm = document.querySelector('#addressInput');
const { zipInput, cityInput, streetInput, nrInput } = addressInputForm.elements
const htmlAddressId = document.querySelector('#htmlAddressId');

const loadAddress = document.querySelector('#loadAddress');
let addressId;
let addressIdValue;

const addressOutputForm = document.querySelector('#addressOutput');

console.log();

//To save address
addressInputForm.addEventListener('submit', (e) => { //formra teszem az eventlistener-t
    e.preventDefault();
    // console.log(addressInputForm.elements.zipInput.value);

    const body = JSON.stringify({
        zip: zipInput.value,
        city: cityInput.value,
        street: streetInput.value,
        nr: nrInput.value
    })

    console.log(body);

        fetch('http://localhost:3000/address', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body
        })
        .then(addressInputForm.reset())
        .then((response) => {
            console.log('Address saved to DB')
            return response.json();
        })
        .then((data) => { //data az adattomb neve, amit visszakapunk. Ennek van id, zip, nr, city, stb
            // console.log(data.id);
            htmlAddressId.innerText = `Address Id: #${data.id}`
        })
})

//To load address
loadAddress.addEventListener('submit', (e) => {
    e.preventDefault();

    addressId = document.querySelector('#addressId'); //megfogjuk az inputot
    addressIdValue = addressId.value; //megfogjuk az input field value-jat
    // console.log(addressId);
    console.log(addressIdValue);

    fetch(`http://localhost:3000/address/${addressIdValue}`,)
    .then(loadAddress.reset())
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data); //arraybe kapjuk vissza az adatot. EGY ELEMES ARRAY, EZERT A [0]
        const zip = document.querySelector('#zipOutput');
            zip.value = data[0].zip;
        const city = document.querySelector('#cityOutput');
            city.value = data[0].city;
        const street = document.querySelector('#streetOutput');
            street.value = data[0].street;
        const nr = document.querySelector('#nrOutput');
            nr.value = data[0].nr;
    })
})