<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="swiper of swiperList" :key="swiper.id">
        <img class="swiper-img" :src="swiper.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg',
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg',
      }],
    }
  },
};
</script>

// 这里有个坑：.swiper-pagination-bullet-active 不能直接写在 .wrapper 下面，因为 style 有 scoped 限制，所以这样做的话
// .swiper-pagination-bullet-active 应该是修饰 Swiper 这个组件，但是看 template 就知道它修饰的是 vue-awesome-swiper 这个
// 解决办法就是穿透：>>>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    background: #eee
    .swiper-img
      width: 100%
</style>