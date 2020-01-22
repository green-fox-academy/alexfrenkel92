import test from "tape"
import makeGreatestMatrix from './greatest-values'

test(t => {
    let inputMatrix1: number[][] =
        [
            [2, 1],
            [0, 1],
        ];

    let inputMatrix2: number[][] =
        [
            [0, 3],
            [-1, 1]
        ]

    let greatestMatrix: number[][] = [
        [2], [3],
        [0], [1]
    ]
    t.deepEqual(makeGreatestMatrix(inputMatrix1, inputMatrix2), greatestMatrix);

    t.end();
});


test(t => {
    let inputMatrix1: number[][] =
        [
            [-1, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ]

    let inputMatrix2: number[][] =
        [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ]

    let greatestMatrix: number[][] = [
        [0], [1], [0],
        [0], [1], [0],
        [0], [1], [0]
    ]
    t.deepEqual(makeGreatestMatrix(inputMatrix1, inputMatrix2), greatestMatrix);

    t.end();
});
