const axios = require('axios')
const PokemonTypeColors = require('./pokemon.type.colors.enum')
module.exports = () => {
  const axiosClient = axios.create({
    baseURL: 'https://pokeapi.co/'
  })
  async function get (name) {
    // api não possui busca então precisei pegar todos pokemons de uma vez só
    const response = await axiosClient.get('/api/v2/pokemon/', {params: {limit: 1200}})
    return response.data.results
  }

  async function getCountByType () {
    const allTypesResponse  = await axiosClient.get('/api/v2/type/')
    const promises = allTypesResponse.data.results.map(async type => {
      const typeResponse = await axios.get(type.url)      
      return{
        typeName: type.name,
        pokemonCount: typeResponse.data.pokemon.length,
        typeColor: PokemonTypeColors[type.name] || '#777'
      }
    })
    return Promise.all(promises)
  }
  

  return { 
    get,
    getCountByType
  }
}