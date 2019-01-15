// Obtener data principal de Pokemon (Historia de usuario #01)
const getDataMainOfPokemon = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push({name: element.name, img: element.img, type: element.type, height: element.height, weight: element.weight, weaknesses: element.weaknesses});
  });
  return newArr;
};

// Obtener pokemón por nombre (Historia de usuario #02) 
const searchByName = (arr, name) => {
  const getPokemon = arr.filter(obj => obj.name.toUpperCase() === name.toUpperCase());
  return getPokemon;
};
  
/* Obtener un array con todos los tipos de Pokémon y luego hallar los tipos únicos
para que se agreguen al select */
const getUniqueTypes = (data) => {
  let arrTypes = [];
  data.forEach(obj => {
    arrTypes = arrTypes.concat(obj.type);
  });
  const accumType = arrTypes.reduce((accum, elem) => {
    if (elem !== '' && accum.indexOf(elem) === -1) {
      accum.push(elem);
    }
    return accum;
  }, []);
  return accumType;
};

// Filtrado por tipo HU03
const filterForType = (arr, nameType) => {
  let arrFiltType = [];
  arr.filter((elem) => {
    if (elem.type.includes(nameType)) {
      arrFiltType.push(elem);
    } 
  });
  return arrFiltType;
};

// Calculando cantidad de pokemones por tipo
const calculateQuantityByType = (arr, type) => {
  const quantity = filterForType(arr, type);
  const quantityOfPokemonsByType = quantity.length;
  return quantityOfPokemonsByType;
};

// Promedios de peso y talla
const getAverage = (arr, nameType, prop) => {
  let newArr = [];
  const arrFilt = filterForType(arr, nameType);
  arrFilt.forEach((elem) => {
    newArr.push(parseFloat(elem[prop]));
  });
  const sizeArr = newArr.length;
  const total = newArr.reduce((counter, number) => {
    return counter + number;
  });
  const avg = total / sizeArr;
  return Math.round(avg * 100) / 100;
};

// Ordenando por A-Z y Z-A
const order = (data, typeOfOrder) => {
  const compareFunction = (element1, element2) => {
    if (element1.name > element2.name) {
      return 1;
    } else { 
      return -1;
    }
  };
  let ordered;
  switch (typeOfOrder) {
  case 'nameAsc':
    ordered = data.sort(compareFunction);
    break;
  case 'nameDesc':
    ordered = data.sort(compareFunction).reverse();  
    break;
  }
  return ordered;
};

const getQuantityTypes = (data) => {
  let arrTypes = [];
  data.forEach(obj => {
    arrTypes = arrTypes.concat(obj.type);
  });
  const accum = arrTypes.reduce((counter, type) => {
    counter[type] = (counter[type] || 0) + 1;
    return counter;
  }, {});
  return accum;
};

window.pokemon = {
  getDataMainOfPokemon,
  searchByName,
  getUniqueTypes,
  filterForType,
  getAverage,
  calculateQuantityByType,
  order,
  getQuantityTypes,
};