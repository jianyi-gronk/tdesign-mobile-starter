<template>
  <div class="detailPage">
    <Navigator />
    <div class="banner">
      <img src="../../assets/fwsjcxdh.png" alt="" />
      <!-- <div class="down" @click="handleHidden">
        <t-icon name="chevron-down" size="25px" class="down-icon" />
      </div> -->
    </div>
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
  overflow: hidden;
  z-index: 1;
  .banner {
    position: relative;
    width: 375px;
    height: 160px;
    opacity: 1;
    z-index: -2;
    img {
      width: 375px;
      height: 160px;
    }
    //   .down::before {
    //     content: '';
    //     display: block;
    //     width: 10px;
    //     height: 3px;
    //     background-color: white;
    //     color: #fff;
    //     position: absolute;
    //     z-index: 3;
    //     left: 50%;
    //     bottom: 20px;
    //     transform: translateX(-7px) rotate(45deg);
    //   }
    //   .down::after {
    //     content: '';
    //     display: block;
    //     width: 10px;
    //     height: 3px;
    //     background-color: white;
    //     color: #fff;
    //     position: absolute;
    //     z-index: 3;
    //     left: 50%;
    //     bottom: 20px;
    //     transform: rotate(-45deg);
    //   }
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
