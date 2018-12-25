require('../src/data.js');

const POKEMON = 
describe('pokemon', () => {
  it('debería retornar un objeto', () => {
    expect(typeof pokemon).toBe('object');
  });
});

describe('pokemon.getDataMainOfPokemon', () => {
  it('debería retornar una función', () => {
    expect(typeof pokemon.getDataMainOfPokemon).toBe('function');
  });
  
  it('debería retornar un nuevo array, con los datos principales', () => {
    expect(pokemon.getDataMainOfPokemon(POKEMON.pokemon)).not.toEqual(POKEMON);
  });
});

// describe('getDataMainOfPokemon', () => {
//   it('debería retornar una función', () => {
//     expect(typeof getDataMainOfPokemon).toEqual('function');
//   });
// });


// it('returns `example`', () => {
// expect(example()).toBe('example');
// });
