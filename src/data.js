// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


window.pokemon = {
 //Obtener Data principal de Pokemon
 getDataMainOfPokemon: function(arr){
 	const newArr = [];
 	for(let i = 0; i < arr.length; i++){
 		newArr.push({name : arr[i].name, img: arr[i].img, type: arr[i].type, height: arr[i].height, weight: arr[i].weight, weaknesses: arr[i].weaknesses});
 	}
 	return newArr;
 }
};