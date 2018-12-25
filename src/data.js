// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// Obtener data principal de Pokemon (Historia de usuario #01)
const getDataMainOfPokemon = (arr) => {
  let newArr = [];
  arr.forEach(function(element) {
    newArr.push({name: element.name, img: element.img, type: element.type, height: element.height, weight: element.weight, weaknesses: element.weaknesses});
  });
  return newArr;
};

// Obtener pokemón por nombre (Historia de usuario #02) 
const searchByName = (arr, name) => {
  const getPokemon = arr.filter(obj => obj.name.toUpperCase() === name.toUpperCase());
  return getPokemon;
};
  

const calculateQuantityByType = () => {};

// Obtener un arreglo con todos los tipos de Pokémon
const getTypes = (data) => {
  let arrTypes = [];
  data.forEach(obj => {
    arrTypes = arrTypes.concat(obj.type);
  });
  return arrTypes;
};

const uniqueTypes = (data) => {
  const acumType = getTypes(data).reduce((acum, elem) => {
    if (elem !== '' && acum.indexOf(elem) === -1) {
      acum.push(elem);
    }
    return acum;
  }, []);
  return acumType;
};

const filterForType = () => {};

window.pokemon = {
  // Obtener data principal de Pokemon (Historia de usuario #01)
  getDataMainOfPokemon,
  searchByName,
  calculateQuantityByType,
  getTypes,
  uniqueTypes,
  filterForType,
};
 
 
