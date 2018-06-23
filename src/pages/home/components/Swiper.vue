<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
      },
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    },
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
