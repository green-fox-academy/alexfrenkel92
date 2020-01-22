'use strict';
import Contestant from './contestant'
import Player from './player'
import amount from './bet'
import betId from './bet'

class Race {
    contestants: Map<string, number>;
    players: string[];

    constructor(contestants: Map<string, number>, players: string[]) {
        this.contestants = contestants;
        this.players = players;
    }
    startRace() {
        let placement = []
        for (let i = 0; i < this.contestants.size; i++) {
            placement.push(i + 1);
        }
    }
    winnersToString(): string {
        return `${Player.name} has won ${amount*2} with the bet ${betId}`;
    }
}