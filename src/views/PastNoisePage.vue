<template>
  <c-past-noise-page
    :loading="loading"
    :chartData="chartData"
    :options="options"
  ></c-past-noise-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import Chart from "chart.js";
import CPastNoisePage from "@/components/past-noise/CPastNoisePage";
import pastNoiseApi from "@/api/past-noise";
import { NoiseItem } from "@/models/NoiseItem";
import { format } from "date-fns";
@Component({
  components: {
    CPastNoisePage
  }
})
export default class PastNoisePage extends Vue {
  // 1.@Prop
  // 2.property
  loading: boolean = false;
  noiseList: NoiseItem[] = [];
  // 3.getter
  get chartData(): Chart.ChartData {
    return {
      labels: [
        format(new Date(this.noiseList[0].datetime), "MM/dd hh:mm"),
        format(new Date(this.noiseList[1].datetime), "MM/dd hh:mm"),
        format(new Date(this.noiseList[2].datetime), "MM/dd hh:mm"),
        format(new Date(this.noiseList[3].datetime), "MM/dd hh:mm"),
        format(new Date(this.noiseList[4].datetime), "MM/dd hh:mm"),
        format(new Date(this.noiseList[5].datetime), "MM/dd hh:mm"),
        format(new Date(this.noiseList[6].datetime), "MM/dd hh:mm"),
        format(new Date(this.noiseList[7].datetime), "MM/dd hh:mm"),
        format(new Date(this.noiseList[8].datetime), "MM/dd hh:mm"),
        format(new Date(this.noiseList[9].datetime), "MM/dd hh:mm")
      ],
      datasets: [
        {
          lineTension: 0,
          label: "騒音グラフ",
          backgroundColor: "#f87979",
          data: [
            this.noiseList[0].noiselevel,
            this.noiseList[1].noiselevel,
            this.noiseList[2].noiselevel,
            this.noiseList[3].noiselevel,
            this.noiseList[4].noiselevel,
            this.noiseList[5].noiselevel,
            this.noiseList[6].noiselevel,
            this.noiseList[7].noiselevel,
            this.noiseList[8].noiselevel,
            this.noiseList[9].noiselevel
          ]
        }
      ]
    };
  }

  get options(): Chart.ChartOptions {
    return {
      responsive: true,
      maintainAspectRatio: false
    };
  }
  // 4.@Watch
  // 5.method
  async created() {
    try {
      this.loading = true;
      await pastNoiseApi.getPastNoiseList().then(response => {
        this.noiseList = response.data;
      });
    } finally {
      this.loading = false;
    }
  }
}
</script>
<style lang="scss" scoped></style>
