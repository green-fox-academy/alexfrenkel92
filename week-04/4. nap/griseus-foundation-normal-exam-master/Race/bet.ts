'use strict';

export default class Bet {
    betId: number;
    amount: number;
    player: string;
    contestant: string;

    constructor(betId: number = (Math.floor(Math.random() * (9999 - 1000)) + 1000), amount: number, player: string, contestant: string) {
        this.betId = betId
        this.amount = amount;
        this.player = player;
        this contestant = contestant;
    }
}