<template>
  <div class="navgator">
    <t-navbar title="标题居中" :fixed="false" left-arrow class="custom-navbar">
      <template #right>
        <t-icon name="ellipsis" size="18px" />
      </template>
    </t-navbar>
  </div>
</template>

<script lang="ts" setup>
import { Icon as TIcon } from 'tdesign-icons-vue-next';
</script>

<style lang="less" scoped>
.custom-navbar {
  --td-navbar-bg-color: #000000;
  --td-navbar-color: #fff;
}
.t-navbar {
  width: 375px;
  height: 48px;
  opacity: 1;
  top: 0;
}

.custom-title {
  margin-left: 12px;
  font-size: 18px;
  font-weight: 600;
}

.t-icon-home {
  margin-right: 8px;
}
</style>
