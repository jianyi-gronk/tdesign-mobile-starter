<template>
  <div class="activityHeader">
    <div class="activityName">2021 SICC服务设计创新大会</div>
    <Avator />
    <div class="time-place">
      <div class="time">时间：2021年3月16日</div>
      <div class="place">地点：深圳市腾讯滨海大厦</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avator from './Avator.vue';
</script>

<style scoped lang="less">
.activityHeader {
  width: 343px;
  height: 88px;
  opacity: 1;
  border-bottom: 0.5px solid #e7e7e7ff;
  margin: 24px 16px 16px 16px;
}
.time-place {
  width: 343px;
  height: 80px;
  opacity: 1;
  border-bottom: 0.5px solid #e7e7e7ff;
}
.time {
  width: 319px;
  height: 22px;
  opacity: 1;
  color: #000000e6;
  font-size: 14px;
  font-weight: 400;
  font-family: 'PingFang SC';
  text-align: left;
  line-height: 22px;
}
.place {
  width: 259px;
  height: 22px;
  opacity: 1;
  color: #000000e6;
  font-size: 14px;
  font-weight: 400;
  font-family: 'PingFang SC';
  text-align: left;
  line-height: 22px;
}
.activityName {
  width: 343px;
  height: 28px;
  opacity: 1;
  color: #000000e6;
  font-size: 20px;
  font-weight: 600;
  font-family: 'PingFang SC';
  text-align: left;
  line-height: 28px;
}
</style>
