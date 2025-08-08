<template>
  <div class="dashboard">
    <div class="head-info">
      <div class="user-card">
        <h4>Inventory</h4>
        <div style="display: flex; justify-content: flex-start; flex-direction: column; align-items: flex-start;">
          <h4>Name: Basong</h4>
          <h4>Serial No:</h4>
        </div>
        <div style="display: flex; justify-content: flex-start; flex-direction: column; align-items: flex-start;">
          <div class="connected-light">
            <h6>CONNECTED</h6>
          </div>
          <h4>11121223234</h4>
        </div>
      </div>

      <div class="user-card">
        <h4>Management</h4>
        <button class="management-button-open">
          <span style=" color: black;">Open</span>
        </button>
      </div>
      <div class="user-card" style="">
        <div class="switches" v-for="i in 4" :key="i">
          <h4>Acceleration</h4>
          <SwitchToogle v-model="switchValue[i - 1]" />
        </div>
        <button
          style="display: flex; background-color: transparent; justify-content: center; align-items: center; width: 40px; color: black;">
          <span>👤</span>
        </button>
      </div>
    </div>
    <br>
    <div class="dynamic-line">
      <PageTabs @tab-change="tabChanger"/>
      <div class="hardware-progress">
        <div class="progress" v-for="(value, index) in graphTitle" :key="index">
          <h4>{{ index }}</h4>
          <LineChart :chartData="graphTitle[index].chartData" :chartOptions="chartOptions" :chartStyle="cpuChartStyle"
            :isToolBar="false" />
        </div>
      </div>
    </div>
    <br>
    <div v-if="currentTab === 'Home'" >
    <div class="dynamic-line">
      <TrafficCard :trafficData="trafficData" />

    </div>
    <div class="chart-container">
      <LineChart :chartData="trafficChartData" :chartOptions="chartOptionsYAxis" :chartStyle="trafficChartStyle"
        :title="'Total Download'" :legend="true" />
      <LineChart :chartData="trafficChartData" :chartOptions="chartOptionsYAxis" :chartStyle="trafficChartStyle"
        :title="'Total Upload'" :legend="true" />
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SwitchToogle from '../components/SwitchToogle.vue';
import LineChart from '../components/LineChart.vue';
import PageTabs from '../components/PageTabs.vue';
import TrafficCard from '../components/TrafficCard.vue';
const currentTab = ref('Home');
const switchValue = ref([false, false, false, false]);
const trafficData = {
  0: {
    title: 'Total Traffic',
    up: '6 Kbps',
    down: '4.2 Kbps'
  },
  1: {
    title: 'TCP Traffic',
    up: '6 Kbps',
    down: '4.2 Kbps'
  },
  2: {
    title: 'UDP Traffic',
    up: '6 Kbps',
    down: '4.2 Kbps'
  },
  3: {
    title: 'RTT Traffic',
    up: '6 Kbps',
    down: '4.2 Kbps'
  }
}
const graphTitle = {
  'CPU (%)': {
    'chartData': {
      labels: ['0', '25', '50', '100'],
      datasets: [
        {
          label: 'CPU Usage',
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(54,162,235,1)',
          pointBackgroundColor: 'rgba(75,192,192,1)',
          pointBorderColor: '#fff',
          data: [50, 50, 50, 50],
          fill: true,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 0
        }
      ]
    }
  },
  'Memory (%)': {
    'chartData': {
      labels: ['0', '25', '50', '100'],
      datasets: [
        {
          label: 'Memory Usage',
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(54,162,235,1)',
          pointBackgroundColor: 'rgba(75,192,192,1)',
          pointBorderColor: '#fff',
          data: [50, 50, 50, 50],
          fill: true,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 0
        }
      ]
    }
  },
  'Disk (%)': {
    'chartData': {
      labels: ['0', '25', '50', '100'],
      datasets: [
        {
          label: 'Disk Usage',
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(54,162,235,1)',
          pointBackgroundColor: 'rgba(75,192,192,1)',
          pointBorderColor: '#fff',
          data: [50, 50, 50, 50],
          fill: true,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 0
        }
      ]
    }
  }
}

const cpuChartStyle = { height: '60px', background: '#f8f8ff' };
const trafficChartStyle = { height: '800px', background: '#f0f8ff' };

const trafficChartData = {
  labels: ['0', '25', '50', '100'],
  datasets: [
    {
      label: 'Traffic',
      backgroundColor: 'rgba(54,162,235,0.2)',
      borderColor: 'rgba(54,162,235,1)',
      pointBackgroundColor: 'rgba(54,162,235,1)',
      pointBorderColor: '#fff',
      data: [40, 40, 40, 40],
      fill: true,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 0
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: ''
    }
  },
  scales: {
    y: {
      display: false
    }
  }
};
const chartOptionsYAxis = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: ''
    }
  },
  scales: {
    y: {
      display: true
    }
  }
};
function tabChanger(tab) {
  currentTab.value = tab
  console.log('Tab changed to:', tab)
}

</script>

<style scoped>

.progress {
  display: flex;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #c5c5c5;
  justify-content: center;
}

.hardware-progress {
  display: flex;
  width: 50%;
  border: 1px solid #ddd;
}



.management-button-open {
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #002fff;
  color: #002fff;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin-left: 10px;
  cursor: pointer;
}

.switches {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  white-space: nowrap;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  background-color: rgb(157, 255, 157);
  border: 1px solid #c5c5c5;
  border-radius: 5px;
}

.connected-light {
  height: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  margin-left: 15px;
}

.connected-light h6 {
  color: white;
  font-size: 12px;
  margin: 0;
}

.dynamic-line {
  color: black;
  display: flex;
  width: 100%;
  white-space: nowrap;
  justify-content: flex-start;
  background-color: #f5f5f5;
}

.user-card {
  display: flex;
  border-radius: 5px;
  background-color: #dcdcdc;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  width: 100%;
  padding-bottom: 5px;
  padding-right: 5px;
  border: 1px solid #c5c5c5;
  text-align: justify;
  white-space: nowrap;
}

.user-card h4 {
  margin: 0;
  padding-left: 15px;
  color: black;
}

.head-info {
  width: 100%;
  color: black;
  display: flex;
  justify-content: flex-start;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.dashboard {
  height: 100%;
}
</style>
