<template>
  <section class="app-base">
    <div class="header">
      <div class="c-title">Noise_Checker</div>
      <router-link class="link-container" :to="{ name: 'PastNoisePage' }">過去の騒音記録</router-link>
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
        this.noiseLeveldetail = "図書館";
        return require("@/assets/toshokan.png");
      case 1:
        this.noiseLeveldetail = "静かなオフィス";
        return require("@/assets/coworking_space.png");
      case 2:
        this.noiseLeveldetail = "日常会話";
        return require("@/assets/kaiwa.png");
      case 3:
        this.noiseLeveldetail = "掃除機";
        return require("@/assets/soujiki.png");
      case 4:
        this.noiseLeveldetail = "地下鉄";
        return require("@/assets/train_chikatetsu.png");
      case 5:
        this.noiseLeveldetail = "大声";
        return require("@/assets/oogoe.png");
      case 6:
        this.noiseLeveldetail = "細山のいびき";
        return require("@/assets/panda_1.jpg");
      case 7:
        this.noiseLeveldetail = "聴覚に障害を及ぼすレベルの細山";
        return require("@/assets/panda_2.jpg");

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
