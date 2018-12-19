// almacenando en dataMainPokemon la data a utilizar en la HU01
const dataMainPokemon = pokemon.getDataMainOfPokemon(POKEMON.pokemon);
// dando id a la const donde se pintaran los pokemones
const divPokemon = document.getElementById('list-pokemon');

// pintando pokemones en HTML(Historia de usuario #01)
const paintPokemones = (arr) => {
  let listofPokemons = '';
  // recorrereldataMainconforEach
  arr.forEach((pokemones) => {
  // almacenandoenunaconstloqueseimplementaráalHTML
    const card = `
         <div class="card-link">
           <article class="blog-card">
            <div class="center-items">
            <img class="pokemon-image" src="${ pokemones.img }" />
          </div>
          <div class="article-details">
            <h3 class="pokemon-name">${ pokemones.name }</h3>
            <p class="pokemon-type">Type: ${ pokemones.type }</p>
            <p class="pokemon-height">Height: ${ pokemones.height }</p>
            <p class="pokemon-weight">Weight: ${ pokemones.weight }</p>
            <p class="pokemon-weaknesses">Weaknesses: ${ pokemones.weaknesses }</p>
          </div>
        </article>
      </div>
    `;
    // concatenando info
    listofPokemons += card;
  });
  // pintando en el html
  divPokemon.innerHTML = listofPokemons;
};

paintPokemones(dataMainPokemon);

// document.getElementById("1").innerHTML= mostrarData();