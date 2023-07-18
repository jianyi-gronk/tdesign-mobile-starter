<template>
  <div class="location">
    <t-navbar :fixed="false">
      <template #left>
        <t-icon name="location" size="0.64rem" class="iconlocation"></t-icon>
        <span class="custom-title">深圳市</span>
      </template>
      <template #right>
        <t-icon name="ellipsis" size="0.64rem" />
        <t-icon name="home" size="0.64rem" />
      </template>
    </t-navbar>
  </div>
</template>

<script setup lang="ts">
import { Icon as TIcon } from 'tdesign-icons-vue-next';
</script>
<style scoped lang="less">
.location {
  width: 10rem;
  height: 0.5333rem;
  .t-navbar {
    width: 10rem;
    height: 0.5333rem;
    padding: 0px 10px;
  }

  .custom-title {
    margin-left: 0.16rem;
    font-size: 0.5333rem;
    color: #121212;
  }
  .t-icon-location {
    margin-left: -0.2133rem;
  }
  .t-icon-ellipsis {
    margin-right: 8px;
  }
  .t-icon-home {
    margin-right: 10px;
  }
}
</style>
