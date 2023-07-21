<template>
  <div class="t-demo-iconfont">
    <div class="t-demo-row">
      <icon name="loading" style="color: #999999" />
      <icon name="close" @click="onIconClose" />
      <icon name="check-circle-filled" />
    </div>
    <br />
    <div class="t-demo-row">
      <icon name="check-circle-filled" size="small" />
      <icon name="check-circle-filled" />
      <icon name="check-circle-filled" size="medium" />
      <icon name="check-circle-filled" size="large" />
      <icon name="check-circle-filled" size="25px" />
      <icon name="check-circle-filled" size="2em" />
    </div>
    <br />
    <div class="t-demo-row">
      <icon name="check-circle-filled" style="color: red" />
      <icon name="check-circle-filled" style="color: green" />
      <icon name="check-circle-filled" style="color: orange" />
    </div>
  </div>
  <UserClearIcon />
  <t-icon name="add" />
  <t-icon name="location" style="color: red; width: 200px" size="25px" />
  <TimeIcon
    style="display: block; color: red; width: 200px; height: 50px"
    size="25px"
  />
</template>

<script setup lang="ts">
import { Icon } from 'tdesign-icons-vue-next';

const onIconClose = () => {
  console.log('icon was clicked.');
};
</script>

<style lang="less">
.t-demo-iconfont {
  .t-icon {
    margin-right: 24px;
  }
}
</style>
