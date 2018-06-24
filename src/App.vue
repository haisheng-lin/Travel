<template>
  <div id="app">
    <!-- vue自带的keep-alive标签，可以把路由上的内容放进内存中而不用重新渲染组件 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
</style>
