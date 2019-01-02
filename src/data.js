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
  
// Obtener un arreglo con todos los tipos de Pokémon incluye repetidos H03
const getTypes = (data) => {
  let arrTypes = [];
  data.forEach(obj => {
    arrTypes = arrTypes.concat(obj.type);
  });
  return arrTypes;
};

// Obteniendo tipos únicos H03 para el select
const uniqueTypes = (data) => {
  const acumType = getTypes(data).reduce((acum, elem) => {
    if (elem !== '' && acum.indexOf(elem) === -1) {
      acum.push(elem);
    }
    return acum;
  }, []);
  return acumType;
};

const filterForType = (arr, nameType) => {
  let arrFiltType = [];
  arr.filter(function(elem) {
    if (elem.type.includes(nameType)) {
      arrFiltType.push(elem);
    } 
  });
  return arrFiltType;
};

const calculateQuantityByType = (arr, type) => {
  const filtrado = filterForType(arr, type);
  const newArr = filtrado.length;
  return newArr;
};


window.pokemon = {
  getDataMainOfPokemon,
  searchByName,
  getTypes,
  uniqueTypes,
  filterForType,
  calculateQuantityByType,
};
 
 
