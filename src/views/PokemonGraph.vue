<template>
  <div class="home">
    <p>
      Gráficos de pokemons
      <Suspense>
        <PokemonByTypeCount/>
        <template #fallback>
          Carregando dados...
        </template>
      </Suspense>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PokemonByTypeCount from '@/components/PokemonByTypeCount.vue';
export default defineComponent({
  name: 'PokemonGraph',
  components: {
    PokemonByTypeCount
  },
});
</script>
