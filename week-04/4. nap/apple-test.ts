'use strict';

import * as test from 'tape';
import { Fruit } from './apple';

test('GET APPLE', function (t) {
    let appleee = new Fruit('X');

    t.equal(appleee.getApple('alma'), 'alma');
    t.end();
})