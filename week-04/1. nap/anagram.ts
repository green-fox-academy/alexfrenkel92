'use strict'
//Create a function that takes two strings, and returns a boolean that should be True if the strings are anagrams and False otherwise.

function anagram (string1: string, string2: string): boolean {
        if (string1.toLowerCase().split('').sort().join() === string2.toLowerCase().split('').sort().join()) {
            return true;
        } else
            return false;
    }

console.log(anagram('alex', 'lexa'));

