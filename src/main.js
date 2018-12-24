// Almacenando en dataMainPokemon la data a utilizar en la HU01
const dataMainPokemon = pokemon.getDataMainOfPokemon(POKEMON.pokemon);
// Dando id a la const donde se pintaran los pokemones
const divPokemon = document.getElementById('list-pokemon');

const selectTypes = document.getElementById('paint-types');

// const pokemonName = document.getElementById('pokemon-name').value;
const btnSearch = document.getElementById('btn-search');
const btnSearchAdv = document.getElementById('btn-search-adv');

btnSearch.addEventListener('click', () => {
  const pokemonName = document.getElementById('pokemon-name').value;
  if (pokemonName === '') {
    document.getElementById('warning').innerHTML = 'Ingrese el nombre del pokémon que desea buscar';
  } else {
    const buscado = pokemon.searchByName(dataMainPokemon, pokemonName);
    document.getElementById('warning').innerHTML = '';
    paintPokemones(buscado);
  }
});

btnSearchAdv.addEventListener('click', () => {
  const types = document.getElementById('types');
  types.classList.remove('unseen');
  types.classList.remove('show');
});

// Pintando pokemones en HTML(Historia de usuario #01)
const paintPokemones = (arr) => {
  let listOfPokemones = '';
  // Recorrer el dataMain con forEach
  arr.forEach((pokemones) => {
  // Almacenando en una const lo que se implementará al HTML
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
    // Concatenando info
    listOfPokemones += card;
  });
  // Pintando en el html
  divPokemon.innerHTML = listOfPokemones;
};

paintPokemones(dataMainPokemon);

const paintTypesInSelect = (arr) => {
  let typesOfPokemon = '';
  const types = pokemon.uniqueTypes(arr);
  for (let i = 0; i < types.length; i++) {
    const select = `<option value="${types[i]}">${types[i]}</option>`;
    typesOfPokemon += select;
  }
  selectTypes.innerHTML = typesOfPokemon;
};

paintTypesInSelect(dataMainPokemon);