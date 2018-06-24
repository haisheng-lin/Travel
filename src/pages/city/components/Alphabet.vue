<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleClick"
      :ref="item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlpchabet',
  props: {
    cities: Object,
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    };
  },
  updated() { // 为什么在updated做这个？因为cities初始值为空对象，当从父组件获取到数据时会更新
    this.startY = this.$refs['A'][0].offsetTop;
  },
  methods: {
    handleClick(e) {
      this.$emit('change', e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        // 函数节流，因为手指滑动触发handleTouchMove的频率很高，所以可以延时16毫秒执行，如果16毫秒期间又触发函数
        // 那么之前的timer会清除掉，所以保证了节流
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79; // e.touches[0].clientY是当前手指离顶端的距离，79是header高度
          const index = Math.floor((touchY - this.startY) / 20); // 20是每个字母的高度，计算出来的index是字母下标
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
  computed: {
    letters() {
      const letters = [];
      for(let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      text-align: center
      line-height: .4rem
      color: $bgColor
</style>
