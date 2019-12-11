'user strict';
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


function getDivide (x: number) {
    let divide = 10 / x;
    if (x <= 0) {
        console.log('Fail');
    } else {
        console.log(divide);
    }
}

getDivide(-8);
