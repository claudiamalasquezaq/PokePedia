const dataMainPokemon = pokemon.getDataMainOfPokemon(POKEMON.pokemon)
const divPokemon = document.getElementById('list-pokemon');

const paintPokemones = (arr) => {
for(let i = 0; i < arr.length; i++){
divPokemon.innerHTML += `
      <div class="card-link">
        <article class="blog-card">
          <img class="pokemon-image" src="${ arr[i].img }" />
          <div class="article-details">
            <h3 class="pokemon-name">${ arr[i].name }</h3>
            <p class="pokemon-type">Type: ${ arr[i].type }</p>
            <p class="pokemon-height">Height: ${ arr[i].height }</p>
            <p class="pokemon-weight">Weight: ${ arr[i].weight }</p>
            <p class="pokemon-weaknesses">Weaknesses: ${ arr[i].weaknesses }</p>
          </div>
        </article>
      </div>
    `}
}

paintPokemones(dataMainPokemon);