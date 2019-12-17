'user strict';
// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

//  

class PostIt {
    backgroundcolor: string;
    text: string; 
    textcolor: string;

    constructor(backgroundcolor, text, textcolor){
        this.backgroundcolor = backgroundcolor;
        this.text = text;
        this.textcolor = textcolor;
    }

}

let P1 = new PostIt ('blue', 'coal', 'red');
let P2 = new PostIt ('green', 'fuel', 'pink');
let P3 = new PostIt ('blue', 'EVs', 'black');

console.log(P1, P2, P3);