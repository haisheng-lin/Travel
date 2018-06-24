<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- 这里的store是在main.js里面传进去的 -->
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe65e;</span>
      </div>
    </router-link>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']), // vuex提供的mapState可以映射它state里面的变量到computed里面
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #ffffff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #ffffff
      border-radius: .1rem
      color: #cccccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #ffffff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
