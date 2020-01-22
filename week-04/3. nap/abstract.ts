// 'use strict';

// abstract class Instrument {
//   name: string;

//   constructor(name) {
//     this.name = name;
//   }

//   abstract sound();

//   playedOn() {
//     console.log(this.name + ' is played');
//     console.log('and it\'s sounds like: ' + this.sound());
//   }
// }

// class Furulya extends Instrument {
//   constructor(name: string) {
//     super(name);
//   }

//   sound(): string {
//     return 'toooot-toot-tooot';
//   }
// }

// class Kocsogduda extends Instrument {
//   constructor(name: string) {
//     super(name);
//   }

//   sound(): string {
//     return 'woop-weep';
//   }
// }

// class Utogardon extends Instrument {
//   constructor(name: string) {
//     super(name);
//   }

//   sound(): string {
//     return 'dwooom-tss';
//   }
// }

// class Musician {
//   play(instrument: Instrument) {
//     instrument.playedOn();
//   }
// }

// let muzsikusEmber = new Musician();
// let furulya: Instrument = new Furulya('furulya');
// let kocsogduda: Instrument = new Kocsogduda('kocsogduda');
// let utogardon: Instrument = new Utogardon('utogardon');

// muzsikusEmber.play(furulya);
// muzsikusEmber.play(kocsogduda);
// muzsikusEmber.play(utogardon);