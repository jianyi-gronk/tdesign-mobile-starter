<template>
  <div class="comment">
    <div class="rate">
      <span>活动评价</span>
      <t-rate
        v-model="value"
        show-text
        variant="filled"
        gap="11.46"
        size="17"
      />
    </div>
    <div class="commentlist">
      <img
        src="../../../assets/avatars/Nick.png"
        alt=""
        style="width: 40px; height: 40px"
      />
      <div class="comment-content">
        <div class="name">小小轩</div>
        <div class="content">
          我已经是第三次参加SICC大会了，作为一名服务体验设计行业的从业者，每次参与都受益匪浅...
        </div>
      </div>
    </div>
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
  margin-top: 16px;
  .rate {
    display: flex;
    justify-content: space-around;
    width: 343px;
    height: 24px;
    margin-bottom: 12px;
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 343px;
    height: 90px;
    opacity: 1;
    border: 0 solid #e7e7e7ff;
    border-radius: 7px;
    background-color: #f3f3f3;
    margin-right: 0;
    .comment-content {
      width: 259px;
      height: 66px;
      .name {
        width: 259px;
        height: 22px;
        line-height: 22px;
        font-size: var(--td-rate-text-font-size);
        margin-bottom: 4px;
      }
      .content {
        width: 259px;
        height: 40px;
        opacity: 1;
        color: #00000099;
        font-size: 12px;
        font-weight: 400;
        font-family: 'PingFang SC';
        text-align: left;
        line-height: 20px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
    }
  }
}
.t-rate__text {
  font-size: var(--td-rate-text-font-size);
}
</style>
