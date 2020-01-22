'use strict';

const numbers = [1, 2, 3, 4];

function getEven(num: number): boolean {
	return num % 2 === 0;
}

const evens = numbers.filter(getEven);

const odds = numbers.filter((e: number): boolean => e % 2 !== 0);
console.log(odds);

const names = ['Zoli', 'Bela', 'Kati', 'Zsuzsi'];

const endsWithI = names.filter((name: string) => name.charAt(name.length - 1) === 'i');
console.log(endsWithI);