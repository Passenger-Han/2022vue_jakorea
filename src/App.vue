<template>
  <head-line :navigations="navigations"></head-line>
  <visual :visuals="visuals"></visual>
  <vision :visions="visions"></vision>
  <Educationprogram :educationprograms="educationprograms"></Educationprogram>
  <Graph :miscellaneous="miscellaneous"></Graph>
  <New v-bind="noticesBundle"></New>
</template>

<script>
// data
import navigationData from './data/00navigation.js';
import visualData from './data/01mainSlide.js';
import visionData from './data/02iconBanner.js';
import educationprogramData from './data/03eduProgram.js';

import noticeData from './data/04notice.js';
import storyData from './data/05story.js';
import newsData from './data/06news.js';

import miscellaneousData from './data/99miscellaneous.js';

// components
import HeadLine from './components/header.vue';
import Visual from './components/visual.vue';
import Vision from './components/vision.vue';
import Educationprogram from './components/educationprogram.vue';
import Graph from './components/graph.vue';
import New from './components/news.vue';

export default {
  components: {
    HeadLine,
    Visual,
    Vision,
    Educationprogram,
    Graph,
    New,
  },

  data(){
    return {
      navigations: navigationData,
      visuals: visualData,
      visions: visionData,
      educationprograms: educationprogramData,

      // notices: noticeData,
      // stories: storyData,
      // news: newsData,
      noticesBundle: {
        notices: noticeData,
        stories: storyData,
        news: newsData,
      },

      miscellaneous: miscellaneousData,
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