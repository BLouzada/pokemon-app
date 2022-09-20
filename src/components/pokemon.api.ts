import axios from 'axios';

const axiosClient = axios.create()

export async function getPokemons(){
  try {
    const { data } = await axiosClient.get('/api/pokemons')
    return data
  } catch (error) {
    console.log("🚀 ~ file: pokemon.api.ts ~ line 12 ~ getPokemons ~ error", error)
    
  }
}