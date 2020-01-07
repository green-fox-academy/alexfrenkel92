'use strict';

import {StudentExp} from './student';
import {MentorExp} from './mentor';

class Cohort {
    name: string;
    students: StudentExp[];
    mentors: MentorExp[];

    constructor (name: string) {
        this.name = name;
        this.students = [];
        this.mentors = [];
    }

    addStudent(student: StudentExp) {
        this.students.push(student);
    }
    addMentor(mentor: MentorExp) {
        this.mentors.push(mentor);
    }
    info() {
        console.log(`The ${this.name} cohort has ${this.students} students and ${this.mentors} mentors.`)
    }
}
let people = [];
// let john = new StudentExp('John Doe', 20, 'male', 'BME');
// people.push(john);

let student = new StudentExp();
people.push(student);

// let gandhi = new MentorExp('Gandhi', 148, 'male', 'senior');
// people.push(gandhi);

// let mentor = new MentorExp();
// people.push(mentor);

let awesome = new Cohort('Roman');
// awesome.addStudent(student);
// awesome.addStudent(john);
// awesome.addMentor(mentor);
// awesome.addMentor(gandhi);
// awesome.info();

awesome.addStudent(student);
console.log(awesome);