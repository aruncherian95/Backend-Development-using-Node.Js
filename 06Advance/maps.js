let pikachu = {
    name : 'I am Pikachu',
    power : 'I can electrify'
}

let clifary = {
    name = 'I am clifary',
    power = 'I am cute'
}

let charmindar = {
    name = 'I am charmindar',
    power = 'I throw fire'
}

let pokemon = new Map();
pokemon.set('pika', pikachu);
pokemon.set('cli', clifary);
pokemon.set('char', charmindar);

console.log(pokemon.size);
