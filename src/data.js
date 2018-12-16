// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.pokemon = {
 //Obtener Data principal de Pokemon
 getDataMainOfPokemon: function(arr){
 	const newArr = [];
 	arr.forEach(function(element){
 		newArr.push({name : element.name, img: element.img, type: element.type, height: element.height, weight: element.weight, weaknesses: element.weaknesses});
 	});
 	return newArr;
 },
};


// const example = () => {
//   return 'example';
// };
//
// window.example = example;

// function mostrarData(){
//   let arrPokemon= POKEMON.pokemon;
//   for(let i=0; i<arrPokemon.length;i++){
//     return arrPokemon[i].name;
// }
// }