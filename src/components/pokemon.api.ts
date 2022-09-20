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

export type Pokemon = {
  name: string;
  url: string;
  pokemonCount: number;};

 export type GetPokemonResponse = {
  data: Pokemon[];
};

export async function getPokemons(name?: string){
  try {
    const { data } = await axiosClient.get<GetPokemonResponse>('/api/pokemons', { params: { name } })
    return data
  } catch (error) {
    console.log("🚀 ~ file: pokemon.api.ts ~ line 12 ~ getPokemons ~ error", error)
    return {data: []}
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