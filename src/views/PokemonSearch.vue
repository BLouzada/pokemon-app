<template>
  <div class="home">
    <p>
      Busca de pokemons
    </p>
    <div>você selecionou: {{ selectedPokemon }}</div>`
    <el-autocomplete 
      v-model="state" 
      :fetch-suggestions="querySearchAsync"
      value-key="name" 
      placeholder="Please input"
      @select="handleSelect" 
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Pokemon, getPokemons } from '../components/pokemon.api'

const state = ref('')
const selectedPokemon = ref('')

const pokemons = ref<Pokemon[]>([])

const loadAll = async () => {
  const response = await getPokemons()
  return response.data
}

const querySearchAsync = async (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? pokemons.value.filter(createFilter(queryString))
    : pokemons.value
  cb(results)
}

const createFilter = (queryString: string) => {
  return (pokemon: Pokemon) => {
    return (
      pokemon.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const handleSelect = (item: Pokemon) => {
  selectedPokemon.value = item.name
}

onMounted(async () => {
  pokemons.value = await loadAll()
})
</script>
