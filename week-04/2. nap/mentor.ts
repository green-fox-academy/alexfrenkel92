'use strict';

import {Person} from './person';

class Mentor extends  Person {
    level: string;

    constructor (name: string = 'Jane Doe', age: number = 30, gender: string = 'fortza female', level: string = 'intermediate') {
        super();
        this.level = level;
}

    introduce(): string {
        return `Hi, I\'m ${this.name}, a ${this.age} year ${this.gender}, ${this.level} mentor.`;
    }
    getGoal(): string {
        return 'My goal is: To educate brilliant junior software developers';
    }
}
export {Mentor as MentorExp};

// let mentor1 = new Mentor();
// console.log(mentor1.introduce());
// console.log(mentor1.getGoal());

// class Mentor {
//     name: string;
//     age: number;
//     gender: string;
//     level: string;

//     constructor (name: string = 'Jane Doe', age: number = 30, gender: string = 'fortza female', level: string = 'intermediate') {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.level = level;
//     }
//     introduce(): string {
//         return `Hi, I\'m ${this.name}, a ${this.age} year ${this.gender}, ${this.level} mentor.`;
//     }
//     getGoal(): string {
//         return 'My goal is: To educate brilliant junior software developers';
//     }
// }

// let mentor1 = new Mentor();
// console.log(mentor1.introduce());
// console.log(mentor1.getGoal());