'use strict';

// function countletters (text: string) {
//     let splittedText = text.split('').sort();
//     console.log(splittedText);
//     return;
// }
// countletters('alma');


export function countletters (text: string): {} {
    let counted: { [k: number]: number } = {};
    for (let i = 0; i < text.length; i++) {
	    let currentNumber = text[i];
	    if (counted.hasOwnProperty(currentNumber)) {
    		counted[currentNumber] += 1;
    	} else {
		    counted[currentNumber] = 1;
        }
    }
return counted;
}

countletters('alma');