let ListA: string[] = ['Apple', 'Avodaco', 'Blueberries', 'Durian', 'Lychee'];
let ListB: string[] = [...ListA];

if ((ListA.indexOf('Durian')) < 0) {
    console.log('List A doesn\'t contain Durian');
} else {
    console.log('List A contains Durian')
}


let ListA1: string[] = ListA.splice(3, 0);
console.log(ListA1);


// let url: string = 'https//www.reddit.com/r/nevertellmethebots';
// let url1: string = url.replace('bots', 'odds');
// let url2: string[] = url1.split('');

// url2.splice(5, 0, ':');
// url = url2.join('');
// console.log(url);

// console.log(ListB.indexOf('Durian'));

// let ListA1: string[] = ListA.split(' ').splice(35, 0, 'Kiwifruit');
// console.log(ListA1);


