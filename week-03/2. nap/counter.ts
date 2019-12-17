'use strict';
// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
    changed: number;
    initial: number;
    constructor (changed: number = 0) {
        this.changed = changed;
        this.initial = changed;
    }
        
    add (input?: number): void {
         if (input === undefined) {
         this.changed++;
         } else {
         this.changed += input
        }
    }
    increase (): number {
        return this.changed;
    }
    reset (): number {
        return this.initial;
    }
}

let counter = new Counter(25);
counter.add(10);
console.log(counter);
console.log(counter.increase());

console.log(counter.reset());




