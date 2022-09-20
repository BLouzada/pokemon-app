const axios = require('axios')
module.exports = () => {

  async function get () {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    return data
  }

  return { 
    get
  }
}