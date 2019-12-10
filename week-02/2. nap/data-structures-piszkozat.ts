let example: string = 'Hi Reddit class'
let escapeWithBackticks: string = `Today is ${(100 ** 2) - 1} th of the year`; // a ` miatt {}-ben matematikai muveleteket tud szamolni

//replace
console.log(example.replace('Reddit', 'Reboot')); //mit mire cserelunk
let newString: string = example.replace('Reddit', 'Awesome');
console.log(newString);

//substring
console.log(example.substring(0, 7)) //honnan indul, meddig megy. Ha nincs megadva zaro ertek, srting vegeig megy
console.log(example.substring(5)); //Kiir: ddit

//charIndex
let array = [1, 2, 3];
let exampleString: string = 'Hello';

//indexOf
console.log(example.indexOf('Reddit')); //Reddit index erteket akarom megtudni, szammal ter vissza

//slice - var egy kezdo es opcionalisan vegso indexet, s kivagja az ezeken kivulieket
console.log(example.slice(3));
let whichClass: string = example.slice(3);
console.log(whichClass);

//split - string manipulalashoz eloszor karakterekre szet kell bontani. Erre van a split
let characterArray: string[] = example.split('');
console.log(characterArray);

let hello: string = 'olleh';
let goodSolutionArray: string[] = hello.split('');
console.log(goodSolutionArray);

let goodExampleSplit: string[] = example.split(' ');
console.log(goodExampleSplit);
