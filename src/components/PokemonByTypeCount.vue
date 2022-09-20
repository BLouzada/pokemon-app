<template>
  <div>
    aqui tem um count de pokemon
  </div>
</template>

<script lang="ts">
import { getPokemonsCountByType } from './pokemon.api'
import { defineComponent, h, PropType } from 'vue'
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  Plugin
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default defineComponent({
  name: 'PieChart',
  async setup(props) {
    const response = await getPokemonsCountByType()
    const chartData = {
      labels: response.data.map(it => it.typeName),
      datasets: [
        {
          backgroundColor: response.data.map(it => it.typeColor),
          data: response.data.map(it => it.pokemonCount)
        }
      ]
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    }

    return () =>
      h(Pie, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      })
  },
  components: {},
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>
    },
    plugins: {
      type: Array as PropType<Plugin<'pie'>[]>
    }
  }
})

</script>