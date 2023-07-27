<template>
  <div class="detailPage">
    <Navigator />
    <div class="banner">
      <img src="../../assets/fwsjcxdh.png" alt="" />
    </div>
    <actionPage />
  </div>
  <div class="purchase">
    <Purchase />
  </div>
</template>

<script setup lang="ts">
import Navigator from './Navigator.vue';
import actionPage from './actionPage/index.vue';
import Purchase from './Purchase.vue';
</script>

<style scoped lang="less">
.detailPage {
  position: relative;
  z-index: 1;
  .banner {
    position: relative;
    background: #000;
    width: 375px;
    height: 160px;
    opacity: 1;
    z-index: -2;
    img {
      width: 375px;
      height: 160px;
    }
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
</style>
