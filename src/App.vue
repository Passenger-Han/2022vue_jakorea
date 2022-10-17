<template>
  <head-line :navigations="navigations"></head-line>
  <visual :visuals="visuals"></visual>
  <vision :visions="visions"></vision>
</template>

<script>
// data
import navigationData from './data/00navigation.js';
import visualData from './data/01mainSlide.js';
import visionData from './data/02iconBanner.js';

// components
import HeadLine from './components/header.vue';
import Visual from './components/visual.vue';
import Vision from './components/vision.vue';

export default {
  components: {
    HeadLine,
    Visual,
    Vision,
  },

  data(){
    return {
      navigations: navigationData,
      visuals: visualData,
      visions: visionData,
    };
  },
}
</script>

<style lang="scss">
  body {
    // font-family: 'NanumSquareNeoLight';
    font-family: 'NanumSquareNeo';
    // font-family: 'NanumSquareNeoBold';
    // font-family: 'NanumSquareNeoExtraBold';
    // font-family: 'NanumSquareNeoHeavy';
  }
</style>