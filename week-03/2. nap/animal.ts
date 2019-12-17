'user strict';
// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
    hunger: number;
    thirst: number;

    constructor (hunger: number = 50, thirst: number = 50) {
        this.thirst = thirst;
        this.hunger = hunger;
    }
    eat(): void {
        this.hunger =- 1;
    }
    drink(){
        this.thirst =- 1;
    }
    play(){
        this.hunger++;
        this.thirst++;
        // return 'i played';
    }
    getHunger(): number {
        return this.hunger;
    }
}

let dog = new Animal (25, 78);
dog.play();
console.log(dog.getHunger());
console.log(dog);

// class Human {
//     name: string;
//     age: number;
//     iq: number;
  
//     constructor(name: string = 'unknown', age: number = 0, iq: number = 0) {
//       this.name = name;
//       this.age = age;
//       this.iq = iq;
//     }
  
//     public isSmart(): boolean {
//       return this.iq > 100;
//     }
  
//     public isNameless(): boolean {
//       return this.name === 'unknown' || this.name === '';
//     }
  
//     public beSmarter(): void {
//       this.iq += 20;
//     }
//   }
  
//   let human = new Human();
//   let human2 = new Human('Laci', 18, 110);
//   console.log(human2.isSmart());
// //   human2.iq = 5;
//   console.log(human2.beSmarter());
//   console.log(human2.iq);
//   console.log(human2.isNameless());

//   human.name = 'Hector';
//   human.age = 1;
  
//   if (human.isSmart()) {
//     console.log(`${human.name} is smart, with iq: ${human.iq}`);
//   }