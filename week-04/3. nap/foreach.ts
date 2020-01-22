class Flower {
	color: string;
	waterLevel: number;

	constructor(color: string) {
		this.color = color;
		this.waterLevel = 0;
	}

	watering(amm: number): void {
		this.waterLevel += amm;
	}
}

const a = new Flower('kek');
const b = new Flower('piros');
const c = new Flower('sarga');

const garden: Flower[] = [a, b, c];

console.log(garden);
// garden.forEach((currentFlower: Flower) => { currentFlower.watering(10) });
garden.forEach((currentflow: Flower) => {currentflow.watering(100)});
console.log(garden);

let garden1 = new Flower('Kek');
console.log(garden1);
garden1.watering(10);
console.log(garden1);

let garden2 = new Flower('Sarga');
console.log(garden2);
garden2.watering(15);
console.log(garden2);