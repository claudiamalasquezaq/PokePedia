// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.pokemon = {
  // Obtener data principal de Pokemon (Historia de usuario #01)
  getDataMainOfPokemon: function(arr) {
    const newArr = [];
    arr.forEach(function(element) {
      newArr.push({name: element.name, img: element.img, type: element.type, height: element.height, weight: element.weight, weaknesses: element.weaknesses});
    });
    return newArr;
  },
};
 
 
