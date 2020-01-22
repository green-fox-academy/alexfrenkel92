'use strict';

/*Write a method which can read and parse a file containing information about
weekly feedbacks from apprentices about a mentor.

The mentor is *rated* in 4 different metrics, those are respectively (*matReview*, *presSkills*, *helpfullness*, *explanation*) separated with 1 space:

 - m = matReview
 - p = presSkills
 - h = helpfulness
 - e = explanation

```
m p h e
1 3 5 3   // this line is an answer from an apprenitce
2 3 4 3   // this is another response
...
```

The method must return a map containing the average rating (in each metric) of the mentor.

#### Example

[Example file can be found here.](./responses.txt)

Output

```js
{
  matReview: 2.25,
  presSkills: 4.0, // or 4 is fine as well
  helpfulness: 4.5,
  explanations: 3.75
}*/

const fs = require('fs');

let fileContent = fs.readFileSync('responses.txt', 'utf-8');
let split: string[] = fileContent.split('\r\n');
let moreSplit: string[] = split.toString().split('\,');
let abitmoreSplit: string[] = moreSplit.toString().split(' ')
let keys: string[] = ['matReview', 'preSkills', 'helpfulness', 'explanations']
let list: string[][] = [];

function jozsi() {
    for (let i: number = 0; i < split.length; i++) {
        let splitted = split[i].split(' ');
        list.push(splitted);
    }
    return list;
}

function counter(list) {
    let rowAwerage: number
    for (let i: number = 0; i < list.length; i++) {
        for (let j: number = 0; j < list.length; j++) {
            rowAwerage = list[i][j]
        }
    } return list
}
console.log(counter(list))