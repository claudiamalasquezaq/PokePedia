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
const uniqueTypes = () => {};

const getTypes = (data) => {
  let arrTypes = [];
  data.forEach(obj => {
    arrTypes = arrTypes.concat(obj.type);
  });
  const uniqueType = arrTypes.reduce((acum, ele) => {
    if (ele.type !== '' && acum.indexOf(ele.type) === -1) {
      acum.push(ele.type);
    }
    return acum;
  }, []);
  return uniqueType;
};


// const uniqueTypes = (data) => {
//   const acumType = data.reduce((acum, ele) => {
//     if (ele.type !== '' && acum.indexOf(ele.type) === -1) {
//       acum.push(ele.type);
//     }
//     return acum;
//   }, []);
//   return acumType;
// };

// const getTypes = (data) => {
//   let onlyType = [];
//   data.forEach(function(element) {
//     onlyType.push({type: element.type});
//   });
//   return onlyType;
// };

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
 
 
