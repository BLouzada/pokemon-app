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
};


export type PokemonById = {
  id: number;
  name: string;
  weight: number;
  height: number;
  url: string;
  picture: string;
};

export type GetPokemonResponse = {
  data: Pokemon[];
};

export async function getPokemons(name?: string){
  try {
    const { data } = await axiosClient.get<GetPokemonResponse>('/api/pokemons', { params: { name } })
    return data
  } catch (error) {
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
export async function getPokemonById(pokemonId?: string){
  try {
    const { data } = await axiosClient.get<PokemonById>(`/api/pokemons/${pokemonId}`)
    return data
  } catch (error) {    
    return { name: '', url: '', weight: 0, height: 0, id: 0, picture: '' }
  }
}