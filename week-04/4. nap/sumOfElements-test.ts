'use strict';

import * as test from 'tape';
import { Sum } from './sumOfElements';

let total = new Sum([555, 1000]);

test('SUMofELEMENTS', function (t) {
    t.equal(total.sumOfElements(), 1555);
    t.end();
})