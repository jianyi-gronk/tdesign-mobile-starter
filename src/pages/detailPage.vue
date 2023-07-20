<template>
  <div class="detailpage">
    <Navigator />
    <Banner />
    <activityContent />
  </div>
</template>

<script setup lang="ts">
import Banner from './Banner.vue';
import Navigator from './Navigator.vue';
import activityContent from './activityContent/index.vue';
</script>

<style scoped lang="less">
.detailpage {
  background-color: #000;
}
.row {
  display: flex;
  padding: 0 16px;
}

.row + .row {
  margin-top: 16px;
}

.t-button + .t-button {
  margin-left: 16px;
}
</style>
