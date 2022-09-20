import axios from 'axios';

const axiosClient = axios.create()

type PokemonsCountByType = {
  typeName: string;
  typeColor: string;
  pokemonCount: number;
};

type PokemonsCountByTypeResponse = {
  data: PokemonsCountByType[];
};

export async function getPokemons(){
  try {
    const { data } = await axiosClient.get('/api/pokemons')
    return data
  } catch (error) {
    console.log("🚀 ~ file: pokemon.api.ts ~ line 12 ~ getPokemons ~ error", error)
    
  }
}

export async function getPokemonsCountByType(){
  try {
    const { data } = await axiosClient.get<PokemonsCountByTypeResponse>('/api/pokemons-count-by-type')
    return data
  } catch (error) {    
    return { data: [] }
  }
}