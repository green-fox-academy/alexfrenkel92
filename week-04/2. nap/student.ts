'use strict';

import {Person} from './person';

export class Student extends Person {
    previousOrganization: string;
    skippedDays: number;

    constructor (name: string = 'Jane Doe', age: number = 30, gender: string = 'fortza female', previousOrganization: string = 'Very very secret organization', skippedDays: number = 0) {
        super();
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
    }
    
    introduce(): string {
        return `Hi, I\'m ${this.name}, a ${this.age} year ${this.gender}, from the ${this.previousOrganization}, who skipped ${this.skippedDays} days from the course already.`;
    }
    getGoal(): string {
        return 'My goal is: Be a junior software developer.';
    }
    skipDay(numberOfDays): void {
        this.skippedDays = numberOfDays;
    }
}
export {Student as StudentExp};

// let student1 = new Student();
// student1.skipDay(10);
// console.log(student1.introduce());

// class Student {
//     name: string;
//     age: number;
//     gender: string;
//     previousOrganization: string;
//     skippedDays: number;

//     constructor (name: string = 'Jane Doe', age: number = 30, gender: string = 'fortza female', previousOrganization: string = 'Very very secret organization', skippedDays: number = 0) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.previousOrganization = previousOrganization;
//         this.skippedDays = skippedDays;

//     }
//     introduce(): string {
//         return `Hi, I\'m ${this.name}, a ${this.age} year ${this.gender}, from the ${this.previousOrganization}, who skipped ${this.skippedDays} days from the course already.`;
//     }
//     getGoal(): string {
//         return 'My goal is: Be a junior software developer.';
//     }
//     skipDay(numberOfDays): void {
//         this.skippedDays = numberOfDays;
//     }
// }

// let student1 = new Student();
// student1.skipDay(10);
// console.log(student1.introduce());