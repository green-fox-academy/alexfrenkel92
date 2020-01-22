'use strict';
import * from "tape"
import listFromMatrix from './unique-numbers'

test(t => {
    let testMatrix: number[][] =
        [
            [1, 1],
            [4, 2]
        ]
    let uniqueNumbers: number[] = [1, 4, 2]

    t.deepEqual(listFromMatrix(testMatrix), uniqueNumbers);

    t.end();
});

test(t => {
    let testMatrix2: number[][] =
        [
            [4, 3, -1],
            [10, 2, 5],
            [-2, 3, 4]
        ]
    let uniqueNumbers2: number[] = [4, 3, -1, 10, 2, 5, -2]

    t.deepEqual(listFromMatrix(testMatrix2), uniqueNumbers2);

    t.end();
});