let nameToGreet: string = 'Green Fox';

function greet(name: string) {
    let x = ('Greetings, dear ' + name);
    console.log(x);
    return x;
}

greet('Barni')
let y = greet(nameToGreet);
console.log(y);
// greet(nameToGreet);


// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`