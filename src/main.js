// Usando fetch para llamar a la data
const url = 'https://claudiamalasquezaq.github.io/PokePedia/src/data/pokemon/pokemon.json';
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const dataPokemon = data.pokemon;
    contentFunction(dataPokemon);
  })
  .catch((error) => {
    return ('Los datos no están disponibles por el momento' + error.message);
  });

const contentFunction = (dataMainPokemon) => {
  // Dando id a la const donde se pintaran los pokemones
  const divPokemon = document.getElementById('list-pokemon');

  // Pintando pokemones en HTML(Historia de usuario #01)
  const paintPokemons = (arr) => {
    let listOfPokemons = '';
    // Recorrer el dataMain con forEach
    arr.forEach((pokemon) => {
    // Almacenando en una const lo que se implementará al HTML
      const card = `
        <div class="card-link col-lg-3 col-md-3 col-sm-10 col-xs-10">
          <article class="blog-card">
            <div class="center-items">
              <img class="pokemon-image" src="${ pokemon.img }" />
            </div>
            <div class="article-details">
              <h3 class="pokemon-name">${ pokemon.name }</h3>
              <p class="pokemon-type">Type: ${ pokemon.type }</p>
              <p class="pokemon-height">Height: ${ pokemon.height }</p>
              <p class="pokemon-weight">Weight: ${ pokemon.weight }</p>
              <p class="pokemon-weaknesses">Weaknesses: ${ pokemon.weaknesses }</p>
            </div>
          </article>
        </div>
      `;
      // Concatenando info
      listOfPokemons += card;
    });
    // Pintando en el html
    divPokemon.innerHTML = listOfPokemons;
  };

  paintPokemons(dataMainPokemon);

  // Botón de búsqueda H02
  const btnSearch = document.getElementById('btn-search');

  // Agregando evento al botón de búsqueda H02: Buscar por nombre
  btnSearch.addEventListener('click', () => {
    document.getElementById('types').style.display = 'none';
    document.getElementById('btn-return').style.display = 'block';
    const pokemonName = document.getElementById('pokemon-name').value;
    if (pokemonName === '') {
      document.getElementById('warning').innerHTML = 'Enter the name of the Pokémon you want to search';
    } else {
      const searched = pokemon.searchByName(dataMainPokemon, pokemonName);
      document.getElementById('warning').innerHTML = '';
      paintPokemons(searched);
    }
  });

  // Botón de búsqueda H03
  const btnSearchAdv = document.getElementById('btn-search-adv');

  // Agregando evento al botón de búsqueda avanzada H03: Para que se muestre el select de tipos
  btnSearchAdv.addEventListener('click', () => {
    document.getElementById('select-order').style.display = 'none';
    btnAddData.style.display = 'none';
    const types = document.getElementById('types');
    types.classList.remove('unseen');
    types.classList.remove('show');
    btnSearchAdv.innerHTML = 'Double click to return';
  });

  btnSearchAdv.addEventListener('dblclick', () => {
    document.getElementById('types').style.display = 'none';
    document.getElementById('select-order').style.display = 'inline-block';
    location.reload();
  });

  // Guardando el id del select
  const selectTypes = document.getElementById('paint-types');

  // Pintando los tipos en el select
  const paintTypesInSelect = (arr) => {
    let typesOfPokemon = '';
    const types = pokemon.getUniqueTypes(arr);
    for (let i = 0; i < types.length; i++) {
      const select = `
      <option value="${types[i]}">${types[i]}</option>
      `;
      typesOfPokemon += select;
    }
    selectTypes.innerHTML = typesOfPokemon;
  };

  paintTypesInSelect(dataMainPokemon);

  // Botón para actualizar
  const btnReturn = document.getElementById('btn-return');

  btnReturn.addEventListener('click', () => {
    location.reload();
  });

  // Constantes para los promedios y botón
  const resultFound = document.getElementById('result-found');
  const avgWeight = document.getElementById('avg-weight');
  const avgHeight = document.getElementById('avg-height');

  // Botón para que se muestre cuantos se encontraron, promedio de peso y talla H4
  selectTypes.addEventListener('change', () => {
    document.getElementById('btn-return').style.display = 'block';
    const paintTypes = document.getElementById('paint-types').value;
    const filter = pokemon.filterForType(dataMainPokemon, paintTypes);
    paintPokemons(filter);
    resultFound.innerHTML = pokemon.calculateQuantityByType(dataMainPokemon, paintTypes) + ' result found';
    avgWeight.innerHTML = 'Average weight: ' + pokemon.getAverage(dataMainPokemon, paintTypes, 'weight') + ' kg';
    avgHeight.innerHTML = 'Average height: ' + pokemon.getAverage(dataMainPokemon, paintTypes, 'height') + ' m';
  });

  // Select para ordenar H05
  const selectOrder = document.getElementById('select-order');

  selectOrder.addEventListener('change', () => {
    const valueSelect = document.getElementById('select-order').value;
    const ordered = pokemon.order(dataMainPokemon, valueSelect);
    paintPokemons(ordered);
  });


  // Botón para ver el gráfico de Google Charts
  const btnAddData = document.getElementById('btn-add-data');

  btnAddData.addEventListener('click', () => {
    divPokemon.style.display = 'none';
    selectOrder.style.display = 'none';
    document.getElementById('div-search').style.display = 'none';
    btnSearchAdv.style.display = 'none';
    btnAddData.innerHTML = 'Double click to return';
    // Cargando la API de visualización el paquete corechart
    google.charts.load('current', {packages: ['corechart', 'bar']});
    // Estableciendo una devolución de llamada para que se ejecute
    // cuando se cargue la API de visualización de Google
    google.charts.setOnLoadCallback(() => {
    // Creando la tabla de datos
      const quantityTypes = pokemon.getQuantityTypes(dataMainPokemon);
      const data = google.visualization.arrayToDataTable([
        ['Type', 'Quantity', { role: 'style' } ],
        ['Bug', quantityTypes.Bug, '#12C03C'],
        ['Dragon', quantityTypes.Dragon, '#E37010'],
        ['Electric', quantityTypes.Electric, '#F1E309'],
        ['Fighting', quantityTypes.Fighting, '#C8170F'],
        ['Fire', quantityTypes.Fire, '#C25813'],
        ['Flying', quantityTypes.Flying, '#24D8D0'],
        ['Ghost', quantityTypes.Ghost, '#8AA1A0'],
        ['Grass', quantityTypes.Grass, '#11E624'],
        ['Ground', quantityTypes.Ground, '#8F7211'],
        ['Ice', quantityTypes.Ice, '#1EBF9F'],
        ['Normal', quantityTypes.Normal, '#808D8B'],
        ['Poison', quantityTypes.Poison, '#B650DA'],
        ['Psychic', quantityTypes.Psychic, '#E7117F'],
        ['Rock', quantityTypes.Rock, '#7D7579'],
        ['Water', quantityTypes.Water, '#2ACFB9']
      ]);
    
      // Estableciendo opciones de gráfico
      const options = {
        title: 'Quantity Types of Pokemons',
        fontSize: 18,
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Types',
          minValue: 0,
          textStyle: {
            bold: true,
            fontSize: 12,
            color: '#4d4d4d'
          },
          titleTextStyle: {
            bold: true,
            fontSize: 18,
            color: '#4d4d4d'
          }
        },
        vAxis: {
          title: 'Total Pokemons',
          textStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
          },
          titleTextStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
          }
        }
      };
      // Dibujar el gráfico, pasando las opciones
      const chart = new google.visualization.ColumnChart(document.getElementById('div-chart'));
      chart.draw(data, options);
    });
  });

  btnAddData.addEventListener('dblclick', () => {
    location.reload();
  });
};
