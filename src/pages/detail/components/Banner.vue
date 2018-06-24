<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1608/4f/4fc3f5a1b838f279a3.water.jpg_600x330_c3b01408.jpg" />
      <div class="banner-info">
        <div class="banner-title">
          北京杜莎夫人蜡像馆
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span> 39
        </div>
      </div>
    </div>
    <common-gallary @close="handleGallaryClose" :imgs="imgs" v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary';

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
  },
  data() {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1803/9d/9d862d8166170089a3.img.jpg_r_800x800_c110a52d.jpg', 
        'http://img1.qunarzz.com/sight/p0/1803/f0/f0592ef10e644699a3.img.jpg_r_800x800_86dd2da6.jpg'],
      showGallary: false,
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #ffffff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
