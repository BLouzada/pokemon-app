
const express = require('express')
const app = express()
app.use(express.json())
const errorHandler = require('./errorHandler')
const pokemonService = require('./pokemon/pokemon.service')()

app.get('/api/pokemons', async (req, res, next) => {
  try {
    const data = await pokemonService.get()
    res.send(data).status(200)
  } catch (error) {
    next(error)
  }  
})

app.get('/api/pokemons-count-by-type', async (req, res, next) => {
  try {
    const data = await pokemonService.getCountByType()
    res.send({data}).status(200)
  } catch (error) {
    next(error)
  }  
})

app.use(errorHandler)

module.exports = () => {
  return { 
    app
  }
}