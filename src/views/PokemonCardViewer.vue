<template>

  <div class="home">
    <el-row justify="center">
      <el-col :span="24">
        <p>
          Card de pokemons
        </p>
      </el-col>
    </el-row>
    <el-row justify="center">
      <el-col :span="3">
        <el-button type="primary" :icon="ArrowLeft">Anterior</el-button>
      </el-col>
      <el-col :span="6">
        <Suspense>
          <PokemonCard />
          <template #fallback>
            Carregando dados...
          </template>
        </Suspense>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" :icon="ArrowRight">Próximo</el-button>
      </el-col>
    </el-row>
  </div>

</template>

<script lang="ts">
import {
  ArrowLeft,
  ArrowRight,
} from '@element-plus/icons-vue'
import { markRaw, defineComponent } from 'vue';
import PokemonCard from '../components/PokemonCard.vue';

export default defineComponent({
  name: 'PokemonCardViewer',
  data() {
    return {
      ArrowLeft: markRaw(ArrowLeft),
      ArrowRight: markRaw(ArrowRight)
    };
  },
  components: {
    PokemonCard
  }
});
</script>

