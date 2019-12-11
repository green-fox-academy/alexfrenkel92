'user strict';
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


function getDivide (x: number) {
    if (x === 0) {
        throw Error ('Error');
    } else {
        let divide = 10 / x;
        console.log(divide);
    }
}

// getDivide(0);

try {
    getDivide(0);
} catch (e) {
    console.log('Nem oszthato')
}
