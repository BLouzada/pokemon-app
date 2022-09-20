
<template>
  <el-card shadow="always" class="box-card">
    <el-row :gutter="20">
      <el-col :span="16">

        <el-descriptions class="margin-top" title="" :column="1" border>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                Nome:
              </div>
            </template>
            {{pokemon.name}}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                Peso:
              </div>
            </template>
            {{pokemon.weight}}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                Altura:
              </div>
            </template>
            {{pokemon.height}}
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
      <el-col :span="8">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" class="image" />
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getPokemonById } from '../components/pokemon.api';

export default defineComponent({
  async setup(props) {
    const response = await getPokemonById('1')
    return { pokemon: response }
  },
  name: 'PokemonCard'
})
</script>
<style>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>