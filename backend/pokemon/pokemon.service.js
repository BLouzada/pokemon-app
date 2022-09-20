const axios = require('axios')
const PokemonTypeColours = require('./pokemon.type.colours.enum')
module.exports = () => {
  const axiosClient = axios.create({
    baseURL: 'https://pokeapi.co/'
  })
  async function get () {
    const { data } = await axiosClient.get('/api/v2/pokemon/')
    return data
  }

  async function getCountByType () {
    const allTypesResponse  = await axiosClient.get('/api/v2/type/')
    const promises = allTypesResponse.data.results.map(async type => {
      const typeResponse = await axios.get(type.url)      
      return{
        typeName: type.name,
        pokemonCount: typeResponse.data.pokemon.length,
        typeColor: PokemonTypeColours[type.name] || '#777'
      }
    })
    return Promise.all(promises)
  }
  

  return { 
    get,
    getCountByType
  }
}