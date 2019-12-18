import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

// function chosenPokemon(pokelist: Pokemon[], wildPok: Pokemon){
//     for (let i = 0; i < pokelist.length; i++) {
//         if(pokelist[i].effectiveAgainst == wildPok.type) {
//             return pokelist[i].name;
//         }
//     }
// }

// let chosenOne = chosenPokemon(pokemonOfAsh, wildPokemon);
// console.log('I choose you, ' + chosenOne);

function chosenPokemon(pokemonOfAsh, wildPokemon){
    for (let i = 0; i < pokemonOfAsh.length; i++) {
        if(pokemonOfAsh[i].effectiveAgainst == wildPokemon.type) {
            return pokemonOfAsh[i].name;
        }
    }
}

console.log(chosenPokemon(pokemonOfAsh, wildPokemon));

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}