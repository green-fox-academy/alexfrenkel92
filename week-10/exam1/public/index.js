'use strict';

const myForm = document.querySelector('#myForm');
const { name, address, base, toppings } = myForm.elements;
const orderId = document.querySelector('#orderId');

myForm.addEventListener('submit', e => {
    e.preventDefault();

    const body = JSON.stringify({
        name: name.value,
        address: address.value,
        base: base.value,
        toppings: toppings.value
    });

    console.log(body);

    fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body //itt van az, amit kuldunk, ez a resz csak a kuldesert felelos
    })
        .then(myForm.reset()) //formot reseteli
        .then((response) => {
            // console.log(response);
            return response.json(); //jsonba a visszakuldott adatot megjelenitjuk
        })
        .then((data) => {
            console.log(data);
            orderId.innerText = data.id; //korabbi insertId row-t appendeljuk itt html p tagbe
        });
})

    // //radio buttons
    // radioButton.forEach(item => {
    //     if (item.checked) {
    //         const radioButtonValueToSend = { base: item.value };
    //         const radioButtonValueToSendJson = JSON.stringify(radioButtonValueToSend);
    //         // console.log(radioButtonValueToSendJson)
    //     }
    // })

    // //dropdown list
    // dropdownList.forEach(item => {
    //     if (item.selected) {
    //         const dropdownListValueToSend = { topping: item.value };
    //         const dropdownListValueToSendJson = JSON.stringify(dropdownListValueToSend);
    //         // console.log(dropdownListValueToSendJson);
    //     }
    // })