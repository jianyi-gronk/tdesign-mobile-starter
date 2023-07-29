<template>
  <div class="activityContent">
    <div class="activityDetail" v-if="isShow">
      <activityInfo />
    </div>
    <div class="down" @click="isShow = false"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import activityInfo from './activityInfo.vue';
let isShow = ref(true);
</script>

<style scoped lang="less">
.down {
  position: absolute;
  top: -32px;
  width: 375px;
  height: 44px;
  opacity: 1;
}
.activityDetail {
  overflow: hidden;
  width: 375px;
  height: 546px;
}
.activityContent {
  position: relative;
  width: 375px;
  height: 546px;
  border-radius: 12px 12px 0 0;
  opacity: 1;
  background: #ffffffff;
}
</style>
