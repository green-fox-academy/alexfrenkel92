'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let url1: string = url.replace('bots', 'odds');
let url2: string[] = url1.split('');

url2.splice(5, 0, ':');
url = url2.join('');
console.log(url);
