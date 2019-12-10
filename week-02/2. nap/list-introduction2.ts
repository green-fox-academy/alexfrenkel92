// let ListA: string[] = ['Apple', 'Avodaco', 'Bueberries', 'Durian', 'Lychee'];
// let ListB: string[] = [...ListA];

let ListA: string = 'Apple, Avodaco, Bueberries, Durian, Lychee';
let ListB: string = ListA;

if ((ListA.indexOf('Durian')) < 0) {
    console.log('List A doesn\'t contain Durian');
} else {
    console.log('List A contains Durian')
}

let ListB1: string[] = ListB.split(' ').splice(28, 1,);
console.log(ListB1);

// let ListA1: string[] = ListA.split(' ').splice(35, 0, 'Kiwifruit');
// console.log(ListA1);


// let url2: string[] = url1.split('');
// url2.splice(5, 0, ':');
// url = url2.join('');
// console.log(url);
