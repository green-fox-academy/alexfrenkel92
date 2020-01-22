'use strict';

/*#### Player

Create a `Player` class with 3 private fields

- `name` - a string, the name of the player
- `account` - an integer, it represents the amount of money the player has
- `bets` - a `Bet` list which stores the bets made by the player

and 1 public method

- `makeBet(contestant, amount)`
  -  it makes a bet with the given amount of money and the given contestant
  -  store the `bet` in the `bets` list if the player has enough money to make the bet
  -  if the player does not have sufficient amount of money just ignore the bet*/

  export class Player {
      name: string;
      account: number;
      bets: Map<string,number>;
      constructor (name: string, account: number, bets:Map<string,number> ){
        this.name=name;
        this.account = account;
        this.bets=bets;
      }
      makeBet(contestant:string, amount:number) {
          if(this.account>=amount) {
             this.bets.set(contestant, amount) ;
          }else {
              return 'You do not have enough money to bet';
          }
      }
  }
