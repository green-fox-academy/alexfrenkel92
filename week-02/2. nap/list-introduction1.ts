'user strict';

let nevek: string[] = ['Clark', 'Kent', 'Lex','Luthor'];
console.log(nevek.length);

nevek.push('William') ;
console.log(nevek);

if (nevek.length < 0) {
    console.log ('The list is empty')
} else {
    console.log('The list is not empty')
}

nevek.push('John', 'Amanda');
console.log(nevek);
console.log(nevek.length);
console.log(nevek[2] + '\n' );

nevek.forEach(
    function(nevek){
        console.log(nevek);
    }
)

// nevek.forEach(
//     function(nevek){
//         let i:number = 0; i < nevek.length; i++;
//         console.log(i, nevek);
// })

let nevekElement: string[] = nevek.split(' ');

// let quote1: string[] = quote.split(' ');

// quote1.splice(3, 0, 'always takes longer than');
// quote = quote1.join(' ');
// console.log(quote);