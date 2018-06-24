<template>
  <div class="wrapper">
    <div class="info">
      <div class="rating-info">
        4.9分
      </div>
      <div class="comment-info">
        18576评论
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailRating',
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .wrapper
    margin: .2rem 0
    padding: 0 .2rem
    font-size: .32rem
    .info
      display: flex
      .rating-info
        flex: 1
        color: #FF8C00
      .comment-info
        color: #808080
</style>
