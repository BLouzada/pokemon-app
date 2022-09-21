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
      <el-col :span="6">
        <Suspense>
          <PokemonCard id="1"/>
          <template #fallback>
            Carregando dados...
          </template>
        </Suspense>
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

