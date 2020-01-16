<template>
  <c-noise-checker-page></c-noise-checker-page>
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
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss" scoped>
</style>