require('../src/data.js');

describe('pokemon', () => {
  it('debería retornar un objeto', () => {
    expect(typeof pokemon).toBe('object');
  });
});

// Input para la HU #01: Ingresa todas las propiedades de la data.
const inputGet = [{
  'id': 1,
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.69,
  'avg_spawns': 69,
  'spawn_time': '20:00',
  'multipliers': [1.58],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'next_evolution': [{
    'num': '002',
    'name': 'Ivysaur'
  }, {
    'num': '003',
    'name': 'Venusaur'
  }]
}];

// Output para la HU #02 : Devuelve solo las propiedades que se necesitan (name, img, type, height, weight, weaknesses)
const outputGet = [{'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png', 'type': ['Grass', 'Poison'], 'height': '0.71 m', 'weight': '6.9 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']}];

// const outputFilter = [{'name': 'Charmander', 'img': 'http://www.serebii.net/pokemongo/pokemon/004.png', 'type': ['Fire'], 'height': '0.61 m', 'weight': '8.5 kg', 'weaknesses': ['Water', 'Ground', 'Rock']}];

// Input para las demás historias de usuario
const input = [
  {'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png', 'type': ['Grass', 'Poison'],
    'height': '0.71 m', 'weight': '6.9 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Ivysaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/002.png', 'type': ['Grass', 'Poison'],
    'height': '0.99 m', 'weight': '13.0 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Venusaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/003.png', 'type': ['Grass', 'Poison'],
    'height': '2.01 m', 'weight': '100.0 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Charmander', 'img': 'http://www.serebii.net/pokemongo/pokemon/004.png', 'type': ['Fire'],
    'height': '0.61 m', 'weight': '8.5 kg', 'weaknesses': ['Water', 'Ground', 'Rock']}
];

// Input para la HU #02 : Ingresar un nombre de Pokémon
const inputSearch = 'Bulbasaur';

// Output para la HU #02 : Devuelve solo el objeto del Pokémon que se busca
const outputSearch = [
  {'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png', 'type': ['Grass', 'Poison'],
    'height': '0.71 m', 'weight': '6.9 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']}
];

describe('pokemon.getDataMainOfPokemon', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.getDataMainOfPokemon).toBe('function');
  });

  it('debería retornar un nuevo array, con los datos principales de los pokemones', () => {
    expect(pokemon.getDataMainOfPokemon(inputGet)).toEqual(outputGet);
  });
});

describe('pokemon.getTypes',() => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.getTypes).toBe('function');
  });

  it('debería retornar un array de todos los tipos de Pokemon', () => {});  
});

describe('pokemon.filterForType', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.filterForType).toBe('function');
  });

  // it('debería retornar el objeto del Pokemon de tipo Fire', () => {
  //   expect(pokemon.filterForType(inputFilter, 'Fire').toEqual(outputFilter));
  // });
});
// describe('getDataMainOfPokemon', () => {
//   it('debería retornar una función', () => {
//     expect(typeof getDataMainOfPokemon).toEqual('function');
//   });
// });


// it('returns `example`', () => {
// expect(example()).toBe('example');
// });

const outputCalculate = '';

// Test para la 3era historia de usuario: Búsqueda por nombre
describe('searchByName', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.searchByName).toBe('function');
  });
  it('debería retornar el array del pokemon requerido', () => {
    expect(pokemon.searchByName(input, inputSearch)).toEqual(outputSearch);
  });
});

// Test para la 4ta historia de usuario: Cálculo de veces que se repiten los tipos de Pokémon
describe('calculateQuantityByType', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.calculateQuantityByType).toBe('function');
  });
  it('debería retornar la cantidad que se repite un tipo', () => {
    expect(pokemon.calculateQuantityByType(input)).toEqual(outputCalculate);
  });
});
