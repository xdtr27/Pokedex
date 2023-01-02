const pokemonList = document.querySelector('#pokemons');
const loadMoreButton = document.getElementById('loadMore')
let offset = 0;
let limit = 20

function convertPokemonsToHTML(pokemon) {
  return `
        <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              ${pokemon.types.map((type) => `<li class="type  ${type}">${type}</li>`).join("")}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
          </div>    
        </li>
  `
}


function loadMorePokemons(offset, limit) {
  pokeAPI.getPokemons(offset, limit)
  .then((pokemons = []) => {
    const newList = pokemons.map(convertPokemonsToHTML).join('')
    pokemonList.innerHTML = newList
  })
}
loadMorePokemons(offset, limit)

loadMoreButton.addEventListener('click', () => {
  limit += 20
  console.log(limit)
  loadMorePokemons(offset, limit)
  if (limit === 100) {
    loadMoreButton.style.display = "none"
  } 
})





/// Fetch ele irá processar uma requisição
 ///then() é um método pra processar o sucesso de uma promise
 /* método JSON para converter uma promise em JSON */
// map() é um método para pegar todos os elementos de uma array



