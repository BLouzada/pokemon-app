const axios = require('axios')
const PokemonTypeColors = require('./pokemon.type.colors.enum')
module.exports = () => {

  const axiosClient = axios.create({
    baseURL: 'https://pokeapi.co/'
  })

  async function getAll () {
    const response = await axiosClient.get('/api/v2/pokemon/', {params: {limit: 1200}})
    return response.data.results
  }

  async function getById (pokemonId) {
    const response = await axiosClient.get(`/api/v2/pokemon/${pokemonId}`)
    const pokemonResponse = {
      id: response.data.id,
      name: response.data.name,
      weight: response.data.weight,
      height: response.data.height,
      url: response.data.url,
      picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.data.id}.png`,
    }
    return pokemonResponse
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
    getAll,
    getById,
    getCountByType
  }
}