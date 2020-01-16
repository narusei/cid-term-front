<template>
  <c-noise-checker-page :noiseLevel="noiseLevel"></c-noise-checker-page>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import CNoiseCheckerPage from "@/components/noise-checker/CNoiseCheckerPage";
@Component({
  components: {
    CNoiseCheckerPage
  }
})
export default class NoiseCheckerPage extends Vue {
  // 1.@Prop
  // 2.property
  noiseLevel: any = 0;
  uri: string = "ws://localhost:1880/ws/noise-level";
  webSocket?: WebSocket;
  // 3.getter
  // 4.@Watch
  // 5.method
  mounted() {
    if (!this.webSocket) {
      this.webSocket = new WebSocket(this.uri);
      this.webSocket.onmessage = ev => {
        this.noiseLevel = Number(ev.data);
      };
    }
  }
}
</script>
<style lang="scss" scoped></style>
