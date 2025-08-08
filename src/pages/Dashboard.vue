<template>
  <div class="dashboard">
    <div class="head-info">
      <div class="user-card">
        <h4>Inventory</h4>
        <div style="display: flex; justify-content: flex-start; flex-direction: column; align-items: flex-start;">
          <h4>Name: {{userData.name}}</h4>
          <h4>Serial No: {{userData.serial}}</h4>
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
        <div class="switches" v-for="title in switchTitles" :key="title">
          <h4>{{ title }}</h4>
          <SwitchToogle v-model="switchValue[switchTitles.indexOf(title)]" />
        </div>
        <button
          style="display: flex; background-color: transparent; justify-content: center; align-items: center; width: 40px; color: black;">
          <span>👤</span>
        </button>
      </div>
    </div>
    <br>
    <div class="dynamic-line">
      <PageTabs @tab-change="tabChanger" />
      <div class="hardware-progress">
        <div class="progress" v-for="(value, index) in graphTitle" :key="index">
          <h4>{{ index }}</h4>
          <LineChart :chartData="graphTitle[index].chartData" :chartOptions="chartOptions" :chartStyle="cpuChartStyle"
            :isToolBar="false" />
        </div>
      </div>
    </div>
    <br>
    <div v-if="currentTab === 'Home'">
      <div class="dynamic-line">
        <TrafficCard :trafficData="trafficData" />

      </div>
      <div class="chart-container">
        <LineChart :chartData="trafficChartDataDownload" :chartOptions="chartOptionsYAxis" :chartStyle="trafficChartStyle"
          :title="'Total Download'" :legend="true" />
        <LineChart :chartData="trafficChartDataUpload" :chartOptions="chartOptionsYAxis" :chartStyle="trafficChartStyle"
          :title="'Total Upload'" :legend="true" />
      </div>
    </div>
    <div v-else-if="currentTab === 'Analysis'" style="display: flex; font-size: large; color: black;"><h2>Analysis</h2></div>
    <div v-else-if="currentTab === 'Settings'" style="display: flex; font-size: large;"><h2>Settings</h2></div>
    <div v-else-if="currentTab === 'Logs'" style="display: flex; font-size: large;"><h2>Logs</h2></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SwitchToogle from '../components/SwitchToogle.vue';
import LineChart from '../components/LineChart.vue';
import PageTabs from '../components/PageTabs.vue';
import TrafficCard from '../components/TrafficCard.vue';
import traffic from '../data/traffic.json';
const currentTab = ref('Home');
const userData = ref(traffic.user);
const switchValue = ref([false, false, false, false]);
const trafficData = ref(traffic.trafficData);
const graphTitle = ref(traffic.graphTitle);
const trafficChartData = ref(traffic.trafficChartData);
const trafficChartDataDownload = ref(traffic.trafficChartDataDownload);
const trafficChartDataUpload = ref(traffic.trafficChartDataUpload);

const switchTitles = ['Home', 'Power On Bypass', 'Power Off Bypass', 'Software Bypass'];

const cpuChartStyle = { height: '60px', background: '#f8f8ff' };
const trafficChartStyle = { height: '800px', background: '#f0f8ff' };


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
