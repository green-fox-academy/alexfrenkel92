'use strict';
import Bet from './bet'

export default class Player {
    name: string;
    account: number;
    bets: Map<string, number>;

    constructor(name: string, account: number, bets: Map<string, number>) {
        this.name = name;
        this.account = account;
        this.bets = bets;
    }

    makeBet(contestant: string, amount: number): void {
        if (this.account >= amount) {
            this.bets.set(contestant, amount);
        } else {
            return null
        }
    }
}
