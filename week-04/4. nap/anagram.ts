'use strict';

export function anagram (word1: string, word2: string) {
    if (word1.split('').sort() !== word2.split('').sort()) {
        console.log('Lucky boyyyy, it is an anagram!');
    } else {
        console.log('You are out of luck, it is not an anagram.');
    }
}

anagram('alex', 'lexa');