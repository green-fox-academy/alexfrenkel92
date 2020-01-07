'use strict';

import {Person} from './person';

class Sponsor extends Person {
    company: string;
    hiredStudents: number;

    constructor (name: string = 'Jane Doe', age: number = 30, gender: string = 'fortza female', company = 'Very Very Secretive Big Company', hiredStudents = 0) {
        super();
        this.company = company;
        this.hiredStudents = hiredStudents;    
    }
    introduce(): string {
        return `Hi, I\'m ${this.name}, a ${this.age} year ${this.gender}, who represents the ${this.company} and hired ${this.hiredStudents} students so far.`;
    }
    getGoal(): string {
        return 'My goal is: to hire brilliant software developers';
    }
    hire(): void {
        this.hiredStudents++;
    }
}

let sponsor1 = new Sponsor();
sponsor1.hire();
console.log(sponsor1.introduce());
console.log(sponsor1.getGoal());

// class Sponsor {
//     name: string;
//     age: number;
//     gender: string;
//     company: string;
//     hiredStudents: number;

//     constructor (name: string = 'Jane Doe', age: number = 30, gender: string = 'fortza female', company = 'Very Very Secretive Big Company', hiredStudents = 0) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.company = company;
//         this.hiredStudents = hiredStudents;
//     }
//     introduce(): string {
//         return `Hi, I\'m ${this.name}, a ${this.age} year ${this.gender}, who represents the ${this.company} and hired ${this.hiredStudents} students so far.`;
//     }
//     getGoal(): string {
//         return 'My goal is: to hire brilliant software developers';
//     }
//     hire(): void {
//         this.hiredStudents++;
//     }
// }

// let sponsor1 = new Sponsor();
// sponsor1.hire();
// console.log(sponsor1.introduce());