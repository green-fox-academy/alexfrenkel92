'use strict';

import * as test from 'tape';
import {multiply, addNum, substractNum} from './exercise';

test('MULTIPLY', function (t) { //'' egy cimke, haszn'lata nem szukseges
    t.equal(multiply(3, 3), 9);
    t.end();
})

test('SUM', t => {
    const actual = addNum(2, 2);
    const expected = 4;

    t.equal(actual, expected);
    t.end();
})

test('SUBSTRACT', t => {
    t.equal(substractNum(2, 2), 0);
    t.end();
})