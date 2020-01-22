'use strict';

const numbers = [1, 4, 9];

function myFunc(num: number): number {
	return num * 2;
}
const doubles = numbers.map(myFunc);

const fancyDoubles = numbers.map((num: number): number => num * 2);

function doubling(arr: number[]): number[] {
	let newArr: number[] = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i] * 2);
	}
	return newArr;
}

console.log(numbers);
console.log(doubles);
console.log(fancyDoubles);
console.log(doubling(numbers));

const appenda = ['kuty', 'macsk', 'szark'];

const appended = appenda.map((curr: string): string => curr + 'a');

console.log(appended);