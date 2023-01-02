const pokeAPI = {}

function convertPokeApiDetailPokemon(pokeDetail) {
  
  const pokemon = new Pokemon()
  pokemon.name = pokeDetail.name
  pokemon.number = pokeDetail.order
  
  
  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types
    
  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon
}

pokeAPI.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
   .then((response) => response.json())  
   .then(convertPokeApiDetailPokemon)
   
}
pokeAPI.getPokemons = (offset, limit) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map((pokeAPI.getPokemonDetail)))
    .then((detailRequests) => Promise.all(detailRequests))
                     
}



/* 
Como fazer uma Requisição 

* Sendo um link só:

1- capture o seu link = fetch(url)
2- Crie um .then() e transforme ele em json()
3- Crie outro .then e capture aquilo que você quer

* Sendo mais de um link:

1- Se você já tiver os links previamente, pode utilizar um 
Promise.all([]) e adicione fetch(url) na medida de quantidade de
links que você tiver 








*/