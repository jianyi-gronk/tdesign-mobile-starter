<template>
  <div class="comment">
    <div class="rate">
      <span>活动评价</span>
      <div class="rate-demo-cell rate-demo-cell--space">
        <t-rate v-model="value" variant="filled" size="20" />
      </div>
    </div>
    <div class="commentlist"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(3);
</script>

<style scoped lang="less">
.comment {
  width: 343px;
  height: 142px;
  opacity: 1;
  border-bottom: 0.5px solid #e7e7e7ff;
  margin: 16px;
  background-color: pink;
  .rate {
    display: flex;
    width: 343px;
    height: 24px;
    span {
      display: block;
      width: 160px;
      height: 24px;
      opacity: 1;
      color: #000000e6;
      font-size: 16px;
      font-weight: 600;
      font-family: 'PingFang SC';
      text-align: left;
      line-height: 24px;
    }
  }
  .commentlist {
    width: 327px;
    height: 90px;
    opacity: 1;
    border: 0 solid #e7e7e7ff;
    background-color: #fff;
    margin-top: 12px;
  }
}
.rate-demo-cell {
  background-color: #fff;
  padding: 12px 16px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 175px;
  height: 22px;
  opacity: 1;

  &--space {
    margin-bottom: 16px;
  }
}
</style>
