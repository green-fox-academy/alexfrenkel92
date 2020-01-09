'use strict';

import * as test from 'tape';
import { countletters } from './countletters';

// let counting: string = 'alma'; 

// test('LETTER COUNTING', function (t) {
//     t.equal(countletters('alma'), { a: 2, l: 1, m: 1 })
//     t.end();
// })

test('LETTER COUNTING', t => {
    // const testing: string = ;
    
    const actual = countletters('alma');
    const expected = { a: 2, l: 1, m: 1 };
    t.deepEqual(actual, expected);
    t.end();
})