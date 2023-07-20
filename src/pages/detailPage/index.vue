<template>
  <div class="detailPage">
    <Navigator />
    <div class="banner"></div>
    <actionPage />
    <div class="purchase">
      <Purchase />
    </div>
  </div>
  <div class="bottom"></div>
</template>

<script setup lang="ts">
import Navigator from './Navigator.vue';
import actionPage from './actionPage/index.vue';
import Purchase from './Purchase.vue';
</script>

<style scoped lang="less">
.detailPage {
  position: relative;
  background-color: #000;
  // z-index: -5;
  overflow: hidden;
  .banner {
    width: 375px;
    height: 160px;
    opacity: 1;
    background-color: pink;
  }
  .purchase {
    position: absolute;
    width: 375px;
    height: 80px;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
.bottom {
  width: 375px;
  height: 24px;
  background-color: aqua;
}
</style>
