'use strict';

export class Person {
    name: string;
    age: number;
    gender: string;

    constructor (name: string = 'Jane Doe', age: number = 30, gender: string = 'fortza female') {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    introduce(): string {
        return `Hi, I\'m ${this.name}, a ${this.age} year ${this.gender}.`;
    }
    getGoal(): string {
        return 'My goal is: Live for the moment!';
    }
}

// let person1 = new Person('Thomas', 32, 'male');
// console.log(person1.introduce());
// console.log(person1.getGoal());

// let person2 = new Person();
// console.log(person2.introduce());