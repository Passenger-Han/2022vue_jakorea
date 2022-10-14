<template>
  <head-line :navigations="navigations"></head-line>
  <visual :visuals="visuals"></visual>
</template>

<script>
// data
import navigationData from './data/00navigation.js';
import visualData from './data/01mainSlide.js';

// components
import HeadLine from './components/header.vue';
import Visual from './components/visual.vue';

export default {
  components: {
    HeadLine,
    Visual,
  },

  data(){
    return {
      navigations: navigationData,
      visuals: visualData,
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