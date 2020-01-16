<script lang="ts">
import { Vue, Component, Prop, Watch, Mixins } from "vue-property-decorator";
import Chart from "chart.js";
import { Line, mixins } from "vue-chartjs";
@Component({})
export default class LineChart extends Mixins(Line, mixins.reactiveProp) {
  // 1.@Prop
  @Prop({ default: () => ({}) })
  chartData!: Chart.ChartData;

  @Prop({ default: () => ({}) })
  options!: Chart.ChartOptions;
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
</script>
