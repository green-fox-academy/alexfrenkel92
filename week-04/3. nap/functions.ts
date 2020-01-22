'use strict';

const first = function(a: number): number {
	return a + 10;
}

function second(a: number): number {
	return a + 10;
}

const third = (a: number): number => a + 10;  // function(a) { return a + 10 }

const forth = (a: number): number => {
	if(a % 2 === 0) {
		return a + 10;
	} else {
		return a + 100;
	}
}

console.log(first(10));
console.log(second(10));
console.log(third(100));
console.log(forth(15));