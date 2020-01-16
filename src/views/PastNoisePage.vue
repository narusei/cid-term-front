<template>
  <c-past-noise-page
    @search="onSearch($event)"
    :loading="loading"
    :chartData="chartData"
    :options="options"
  ></c-past-noise-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import Chart from "chart.js";
import CPastNoisePage from "@/components/past-noise/CPastNoisePage";
@Component({
  components: {
    CPastNoisePage
  }
})
export default class PastNoisePage extends Vue {
  // 1.@Prop
  // 2.property
  loading: boolean = false;
  chartData: Chart.ChartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    datasets: [
      {
        lineTension: 0,
        label: "の騒音グラフ",
        backgroundColor: "#f87979",
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      }
    ]
  };
  options: Chart.ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  // 3.getter
  // 4.@Watch
  // 5.method
  onSearch(param: any) {}
}
</script>
<style lang="scss" scoped></style>
