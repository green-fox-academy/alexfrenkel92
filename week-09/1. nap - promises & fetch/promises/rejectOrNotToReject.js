'use strict';

var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
})


function onRejected(error) {
    console.log(error);
}

promise.
then((result) => {
        console.log(result);
    }, (err) => {
        onRejected(err);
    });