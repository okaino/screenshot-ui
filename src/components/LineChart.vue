<template>
  <div class="chart-toolbar" v-if="isToolBar">
      <button @click="zoomIn">➕</button>
      <button @click="zoomOut">➖ </button>
      <button @click="resetZoom">🔍</button>
      <button @click="saveAsImage">✋🏻</button>
      <button @click="toggleView">🏠</button>
      <button @click="toggleView">📋</button>
    </div>
  <div class="chart-responsive-container" :style="chartStyle">
    <Line
      :data="computedChartData"
      :options="mergedChartOptions"
      style="width:100%;height:100%;"
      ref="chartRef"
    />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom'

Chart.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, zoomPlugin)


export default {
  name: 'LineChart',
  components: { Line },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: true
    },
    chartStyle: {
      type: [Object, String],
      default: () => ({})
    },
    title:{
      type: String,
      required: false,
    },
    isToolBar: {
      type: Boolean,
      default: true
    },
    legend: {
      type: Boolean,
      default: false
    },
    yAxisData: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      chartRef: null,
      isListView: false
    }
  },
  computed: {
    mergedChartOptions() {
      const options = JSON.parse(JSON.stringify(this.chartOptions))
      if (this.title) {
        options.plugins = options.plugins || {}
        options.plugins.title = options.plugins.title || {}
        options.plugins.title.display = true
        options.plugins.title.text = this.title
      }
      if(this.legend){
        options.plugins.legend = options.plugins.legend || {}
        options.plugins.legend.display = true
      } else {
        options.plugins.legend = false
      }
      
      options.plugins.zoom = {
        pan: { enabled: true, mode: 'xy' },
        zoom: { pinch: { enabled: true }, wheel: { enabled: true }, mode: 'xy' }
      }

      return options
    },
    computedChartData() {
      // Use yAxisData if provided, otherwise use chartData as-is
      if (this.yAxisData && this.chartData && this.chartData.datasets && this.chartData.datasets.length > 0) {
        const newData = JSON.parse(JSON.stringify(this.chartData))
        newData.datasets[0].data = this.yAxisData
        return newData
      }
      return this.chartData
    }
  },
  methods: {
    zoomIn() {
      if (this.chartRef && this.chartRef.chart) {
        this.chartRef.chart.zoom(1.1)
      }
    },
    zoomOut() {
      if (this.chartRef && this.chartRef.chart) {
        this.chartRef.chart.zoom(0.9)
      }
    },
    resetZoom() {
      if (this.chartRef && this.chartRef.chart) {
        this.chartRef.chart.resetZoom()
      }
    },
    saveAsImage() {
      if (this.chartRef && this.chartRef.chart) {
        const link = document.createElement('a')
        link.download = 'chart.png'
        link.href = this.chartRef.chart.toBase64Image()
        link.click()
      }
    },
    toggleView() {
      this.isListView = !this.isListView
    }
  }
}
</script>

<style scoped>
.chart-toolbar button{
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: 0px solid #ccc;
}
.chart-toolbar {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin-bottom: 10px;
}

.chart-responsive-container {
  width: 100%;
  height: 50px;
  min-height: 50px;
  max-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-view {
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 5px;
}
</style>

