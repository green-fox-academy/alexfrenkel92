'user strict';

abstract class Instrument {
    name: string;
    constructor(name) {
        this.name = name;
    }
    abstract play();
}

abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;
    constructor(name: string, numberOfStrings: number) {
        super(name);
        this.numberOfStrings = numberOfStrings;
    }
    abstract sound()
    
    play() {
        console.log(this.name + ' is played');
        console.log('It is a ' + this.numberOfStrings + '-stringed instrument and it sounds like this: ' + this.sound());
    }
}

class ElectricGuitar extends StringedInstrument  {
    constructor(numberOfString: number = 6) {
        super('ELectric guitar', numberOfString);
    }
    sound(): string {
        return 'Twang';
    }
}

class BassGuitar extends StringedInstrument {
    constructor(numberOfStrings: number = 4) {
        super('Bass guitar', numberOfStrings);
    }
    sound(): string {
        return 'Duum-duum-dummm';
    }
}

class Violin extends StringedInstrument {
    constructor(numberOfStrings: number = 4) {
        super('Violin', numberOfStrings);
    }
    sound(): string {
        return 'Screeeeech';
    }
}

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
  let guitar = new ElectricGuitar();
  let bassGuitar = new BassGuitar();
  let violin = new Violin();
  
//   console.log('Test 1 Play');
  guitar.play();
  bassGuitar.play();
  violin.play();

  console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.');
  let guitar2 = new ElectricGuitar(7);
  let bassGuitar2 = new BassGuitar(5);
  
//   console.log('Test 2 Play');
  guitar2.play();
  bassGuitar2.play();