require('../src/data.js');

describe('pokemon', () => {
  it('debería retornar un objeto', () => {
    expect(typeof pokemon).toBe('object');
  });
});

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

const inputSearch = 'Bulbasaur';

const outputSearch = [
  {'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png', 'type': ['Grass', 'Poison'],
    'height': '0.71 m', 'weight': '6.9 kg', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']}
];

const inputCalculate = [{

}];

const outputCalculate = '';
// Test para la 3era historia de usuario: Búsqueda por nombre
describe('searchByName', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.searchByName).toBe('function');
  });
  it('debería retornar el objeto con las siguientes propiedades(name,img,type,heigth,weight,weakness) al ingresar el nombre del Pokémon', () => {
    expect(pokemon.searchByName(input, inputSearch)).toEqual(outputSearch);
  });
});

// Test para la 4ta historia de usuario: Cálculo de veces que se repiten los tipos de Pokémon
describe('calculateQuantityByType', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.calculateQuantityByType).toBe('function');
  });
  it('debería retornar la cantidad que se repite un tipo', () => {
    expect(pokemon.calculateQuantityByType(inputCalculate)).toEqual(outputCalculate);
  });
});