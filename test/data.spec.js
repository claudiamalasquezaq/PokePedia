require('../src/data.js');


describe('pokemon', () => {
  it('debería retornar un objeto', () => {
    expect(typeof pokemon).toBe('object');
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
