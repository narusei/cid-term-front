<template>
  <section class="app-base">
    <div class="header">
      <div class="c-title">Noise_Checker</div>
      <router-link class="link-container" :to="{ name: 'PastNoisePage' }"
        >過去の騒音記録</router-link
      >
    </div>
    <div class="nc-content">
      <div>現在の騒音レベルは{{ noiseLevel + 1 }}です</div>
      <img :src="noiseImage" />
      <div>{{ noiseLeveldetail }}</div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component({
  components: {}
})
export default class CNoiseCheckerPage extends Vue {
  // 1.@Prop
  @Prop({ default: 0 })
  noiseLevel!: number;
  // 2.property
  noiseLeveldetail: string = "検知できません";
  // 3.getter
  get noiseImage() {
    switch (this.noiseLevel) {
      case 0:
        this.noiseLeveldetail = "静かな住宅街のラジオ程度の騒音";
        return require("@/assets/radio.png");
      case 1:
        this.noiseLeveldetail = "デパート内程度の騒音";
        return require("@/assets/shopping_mall_ekinaka.png");
      case 2:
        this.noiseLeveldetail = "地下鉄内程度の騒音";
        return require("@/assets/train_chikatetsu.png");

      default:
        return "No Data";
    }
  }
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

.nc-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>
