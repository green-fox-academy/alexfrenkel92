'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let url1: string = url.replace('bots', 'odds');
let url2: string[] = url1.split('');

console.log(url2.splice(5, 0, ':'));
console.log(url2.join(''));

// console.log(example.replace('Reddit', 'Reboot')); //mit mire cserelunk
// let newString: string = example.replace('Reddit', 'Awesome');
// console.log(newString);

// console.log(bestArrayEver.splice(1, 0, 68)); //1es indexen kezd; 0 azt jelenti, nem kell semmit kitorolnie; 68-t hozzaadja 1 index utan
// console.log(bestArrayEver);