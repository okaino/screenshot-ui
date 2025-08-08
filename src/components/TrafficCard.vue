<template>
    <div class="traffic" v-for="(value, index) in trafficData" :key="value.title">
        <h4 style="font-weight: bold; padding-left: 20px; padding-right: 20px;">{{ value.title }}</h4>
        <div style="display: flex; white-space: nowrap; padding-right: 20px;">
          <h4>{{ value.down ? 'Down:' : 'LAN:' }}</h4>
          <h4 style="color:blue"> {{ value.down ? value.down : value.LAN }}</h4>

        </div>
        <div style="display: flex; white-space: nowrap; padding-right: 20px;">
          <h4>{{ value.up ? 'Up:' : 'WAN:' }}</h4>
          <h4 style="color:#42ecf5"> {{ value.up ? value.up : value.WAN }}</h4>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    trafficData: {
      type: [Object, Array],
      required: true
    }
  }
}
</script>

<style>

.traffic {
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
}
</style>