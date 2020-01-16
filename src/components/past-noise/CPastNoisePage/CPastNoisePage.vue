<template>
  <section class="app-base">
    <div class="header">
      <div class="c-title">Noise_Checker</div>
      <router-link class="link-container" :to="{ name: 'NoiseCheckerPage' }"
        >現在の騒音</router-link
      >
    </div>
    <div class="main-title">過去10件の騒音グラフ</div>
    <div class="pn-content">
      <template v-if="loading">
        <b-loading
          :is-full-page="true"
          :active="true"
          :can-cancel="true"
        ></b-loading>
      </template>
      <template v-else>
        <template v-if="!chartData.datasets">データがありません</template>
        <template v-else>
          <line-chart :chartData="chartData" :options="options"></line-chart>
        </template>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
import Chart from "chart.js";
import LineChart from "@/components/common/LineChart";
@Component({
  components: {
    LineChart
  }
})
export default class CPastNoisePage extends Vue {
  // 1.@Prop
  @Prop({ default: false })
  loading!: boolean;
  @Prop()
  chartData!: Chart.ChartData;
  @Prop()
  options!: Chart.ChartOptions;
  // 2.property
  startdate: Date = new Date();
  enddate: Date = new Date();
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss" scoped>
.app-base {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

.header {
  background-color: blueviolet;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .c-title {
    color: white;
    margin: 12px 0px 12px 12px;
  }

  .link-container {
    background-color: white;
    border-radius: 5px;
    margin: 12px 12px 12px 0;
    padding: 8px;
    text-decoration: none;
    color: blueviolet;
    &:hover {
      background-color: whitesmoke;
    }
  }
}

.main-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
}

.pn-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-right: 50px;
}
</style>
