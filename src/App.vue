<template>
  <head-line :navigations="navigations"></head-line>
  <visual :visuals="visuals"></visual>
  <vision :visions="visions"></vision>
  <Educationprogram :educationprograms="educationprograms"></Educationprogram>
  <Graph :miscellaneous="miscellaneous"></Graph>
  <New v-bind="noticesBundle"></New>
  <Recruit v-bind="recruitsBundle"></Recruit>
  <Advertisement></Advertisement>
  <Support :supports="supports"></Support>
  <Newsletter></Newsletter>
  <Footer></Footer>
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

import recruitData from './data/07recruit.js';
import resultData from './data/08result.js';

import supportData from './data/09support.js';

import miscellaneousData from './data/99miscellaneous.js';

// components
import HeadLine from './components/header.vue';
import Visual from './components/visual.vue';
import Vision from './components/vision.vue';
import Educationprogram from './components/educationprogram.vue';
import Graph from './components/graph.vue';
import New from './components/news.vue';
import Recruit from './components/recruit.vue';
import Advertisement from './components/advertisement.vue';
import Support from './components/support.vue';
import Newsletter from './components/newsletter.vue';
import Footer from './components/footer.vue';

export default {
  components: {
    HeadLine,
    Visual,
    Vision,
    Educationprogram,
    Graph,
    New,
    Recruit,
    Advertisement,
    Support,
    Newsletter,
    Footer,
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

      recruitsBundle: {
        recruits: recruitData,
        results: resultData,
      },

      supports: supportData,

      miscellaneous: miscellaneousData,
    };
  },
}
</script>

<style lang="scss">
  ul, ol, li {list-style: none;}

  body {
    // font-family: 'NanumSquareNeoLight';
    font-family: 'NanumSquareNeo';
    // font-family: 'NanumSquareNeoBold';
    // font-family: 'NanumSquareNeoExtraBold';
    // font-family: 'NanumSquareNeoHeavy';
  }
</style>