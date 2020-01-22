class DiceSet {
  dice: number[];
  readonly numOfDices: number = 6;

  roll(): number[] {
    this.dice = [];
    for (let i = 0; i < this.numOfDices; i++) {
      this.dice.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dice;
  }

  reroll(index?: number): void {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        this.dice[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dice[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  getCurrent(index?: number): number[] | number {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        return this.dice;
      }
    } else {
      return this.dice[index];
    }
  }
  currentNumber(): number[] {
      for (let i: number = 0; i < this.numOfDices; i++) {
          return this.dice;
      }
    }
  rollDiceUntil(): void {
    this.dice === 6;
    }
}
for(i = 0; i < numOfDices.length; i++){
    if(!numOfDices[i] === 6){
        reroll []
    } else if (numofdices[i] === 6)
}

// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

let diceSet = new DiceSet();

// unction chosenPokemon(pokemonOfAsh, wildPokemon){
//     for (let i = 0; i < pokemonOfAsh.length; i++) {
//         if(pokemonOfAsh[i].effectiveAgainst == wildPokemon.type) {
//             return pokemonOfAsh[i].name;
//         }
//     }


console.log(diceSet.roll);
console.log(diceSet.getCurrent());

// diceSet.reroll();
// console.log(diceSet.getCurrent());
// diceSet.reroll();
// console.log(diceSet.getCurrent());
// console.log(diceSet.getCurrent(0));

// console.log("------------------");

// diceSet.reroll();
// console.log(diceSet.getCurrent());

// console.log("------------------");

// console.log(diceSet.getCurrent(5));
// diceSet.reroll();
// console.log(diceSet.getCurrent());

// console.log("------------------");

// diceSet.reroll(4);
// console.log(diceSet.getCurrent());