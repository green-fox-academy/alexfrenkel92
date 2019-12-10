let example: string = 'Hi Reddit class'
let escapeWithBackticks: string = `Today is ${(100 ** 2) - 1} th of the year`; // a ` miatt {}-ben matematikai muveleteket tud szamolni

//replace
console.log(example.replace('Reddit', 'Reboot')); //mit mire cserelunk
let newString: string = example.replace('Reddit', 'Awesome');
console.log(newString);

//substring
console.log(example.substring(0, 7)) //honnan indul, meddig megy. Ha nincs megadva zaro ertek, string vegeig megy
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

//Arrays
let bestArrayEver: number[] = [1, 67, 92, 10];
console.log(bestArrayEver.reverse());

//Slice ARRAY
let bestArrayEverSecondElement: number[] = bestArrayEver.slice(2); //honnan indul, meddig megy. Negativ szamot is elfogad
console.log(bestArrayEverSecondElement);

//Splice ARRAY - honnan kezdje, meddig menjen
console.log(bestArrayEver.splice(1, 0, 68)); //1es indexen kezd; 0 azt jelenti, nem kell semmit kitorolnie; 68-t hozzaadja 1 index utan
console.log(bestArrayEver); //a splice megcsinalja a hozzaadast, de nem irja ki, csak ha torlunk is. Ezert ki kel iratni megegyszer

//push ARRAY
bestArrayEver.push(999, 8);
console.log(bestArrayEver); // pont mint slice-nal, 2x kell logolni vagy 1x, de elotte elvegezni a push muveletet

//foreach / adott array minden meghatarozott elemen csinal valamit, amit kerunk
// array.forEach( //valami.foreach-l hivjuk meg. Itt array-en
//     function(element) {
//         console.log()
//     }
// )

// function consoleLogger (whatToConsoleLog: string); {
//     console.log(whatToConsoleLog);
// }
let names: string[] = ['pistike', 'ferike', 'krisztike', 'julika'];

for (let i: number = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.forEach(
    function(name){
        console.log(name);
    }
)

let bestNumbersEver: number[] = [1,2,3];
//numberadder -- 10-t add hozza a szamokhoz
bestNumbersEver.forEach(
    function(number){
        console.log(number += 10);
    }
)
console.log(bestNumbersEver);

//  let newBestNumbersEver: number[] = bestNumbersEver number[] = [1,2,3];
// //numberadder -- 10-t add hozza a szamokhoz
// bestNumbersEver.forEach(
//     function(number){
//         console.log(number += 10);
//     }
// )
// console.log(bestNumbersEver); -->> itt azt akartam, hogy megjegyezze az uj ertekeket?!?!


//OBJECT
// {} kozze irodnak

let myObject = {
    favnumber: 10, //kulcs. Mindig leirja mi a benne talalhato ertek
    name: 'Pista', //kulcshoz tartozo ertek. Pl: tojashoz annak ara
    workplace: 'Malev',
}
console.log(myObject);
console.log(Object.keys(myObject)); //csak a kulcsokat adja vissza

myObject.favnumber = 42; //favnumber erteket megvaltoztatva
console.log(myObject);

//HASOWNPROPERTY
//boolean-t ad vissza
//megnezi, hogy objecten belul megtalalhato e adott cucc
//pl adott szam benne van e a listaban vagy sincs


