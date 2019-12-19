'use strict';

function exponential(base: number, exponent: number) {
    console.log(base, exponent);
    if (exponent === 1) {
        return base; //ez allitja meg
    }
    return(exponential(base, exponent - 1) * base); //matematikai keplet a hatvanyozasra
}

console.log(exponential(5,4));