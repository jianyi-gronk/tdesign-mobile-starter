<template>
  <t-navbar title="详情" :fixed="false" left-arrow>
    <template #right>
      <t-icon name="ellipsis" size="24px" />
    </template>
  </t-navbar>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.t-navbar {
  --td-navbar-bg-color: #000;
  --td-navbar-color: #fff;
  width: 375px;
  height: 48px;
  opacity: 1;
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
