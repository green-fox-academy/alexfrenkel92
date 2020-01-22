'use strict';



/*### Race

Create a `Race` class. This class will simulate a race. It has 2 private fields
 which must be set through the constructor.

- `contestants` - it will store all of the contestants attending the race
- `players` - it will store all of the players

and 1 public method

- `startRace()` - this will simulate a race
  - first you need to evaluate the race by setting the placement field of the contestants 
  to a random number (1 <= x <= contestants.length)
  - please keep in mind that every contestant's placement should be unique
  - after the evaluation, write the placements to the console in increasing order 
  (use the `toString()` method)
  - to keep things simple a bet is won if the contestant won the race and the player
   will win the double price of the money he made the bet with
  - finally you need to write the winners to the console in the following format
    - `{name} has won {money}$ with the bet: {betId}` */

import Constentants from './consentants1'
import {Player }from './player1'
import amount from './bet1'
import betId from './bet1'

export default class Race {
    contestants: Map<string, number>;
    players: string[];
    constructor (contestants: Map<string,number>, players: string[]){
        this.contestants=contestants;
        this.players=players;
    }
    startRace(){
        let placement = [];
        for(let i:number = 0; i>this.contestants.size; i++)
        placement.push(i+1);
    }

    winnersToString(): string {
    return `${Player.name} has won ${amount*2} with the bet ${betId}`;
}
}

