'use strict';

import Toy from './toy';
import Doll from './doll';
import JumpingRope from './jumping-rope';
import DottedBall from './dotted-ball'

export default class SantaFactory {
    balance: number;

    constructor(balance: number = 200) {
        this.balance = balance
    }

    produce(name: string, color: string, size?: number): Toy {
        if (name === 'doll' && this.balance > 25) {
            let newDoll: Toy = new Doll(color);
            this.balance -= 25;
            return newDoll;
        } else if (name === 'jumping-rope' && this.balance > 15) {
            let newJumpingRope: Toy = new JumpingRope(color, 10);
            this.balance -= newJumpingRope.cost;
            return newJumpingRope;
        } else if (name === 'dottedBall' && this.balance > 10) {
            let newDottedBall: Toy = new DottedBall(color, 12);
            this.balance -= 10;
            return newDottedBall;
        }
    }
}
