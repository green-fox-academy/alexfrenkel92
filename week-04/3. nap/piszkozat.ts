'use strict';

class Person {
    height: number;
    name: string;
    age: number;
}

class Button {
    private width: number;
    private height: number;
    private color: string;

    print() {
        console.log('I\'m a button');
        console.log('Height: ' + this.height);
        console.log('Width: ' + this.width);

        // button doesn't have text
        // console.log(this.text);
    }

    constructor(height: number = 0, width: number = 0) {
        this.height = height;
        this.width = width;
        this.color = '#000000';
    }

    // setter method, we can set height in a controlled way
    setHeight(height: number) {
        if(height < 0) {
            throw 'Height must not be negative.';
        }

        this.height = height;
    }

    getHeight() {
        return this.height;
    }
}

class TextButton extends Button {

    // These properties are inherited
    // width: number;
    // height: number;
    // color: string;

    text: string = 'abcd';

    // method override
    print() {
        super.print();
        console.log(this.text);
    }
}

let proba = new TextButton();
console.log(proba.print());