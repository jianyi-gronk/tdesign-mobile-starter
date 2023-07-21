<template>
  <div class="actionPage">
    <transition name="down">
      <div class="indexOne" ref="indexOne">
        <div class="content">
          <div class="title-avators">
            <div class="title">2021 SICC服务设计创新大会</div>
          </div>
          <div class="time-place">
            <div class="time">时间</div>
            <div class="place">地点</div>
          </div>
          <Comment />
          <Introduce />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import Comment from './comment.vue';
import Introduce from './introduce.vue';
</script>

<style scoped lang="less">
.actionPage {
  position: relative;
  width: 375px;
  height: 546px;
  border-radius: 12px 12px 0 0;
  opacity: 1;
  z-index: 2;
  background: #ffffffff;
  .title-avators {
    width: 343px;
    height: 88px;
    opacity: 1;
    border-bottom: 0.5px solid #e7e7e7ff;
    margin: -12px 16px 16px 16px;
    .title {
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
  }
  .time-place {
    width: 343px;
    height: 80px;
    opacity: 1;
    background-color: pink;
    border-bottom: 0.5px solid #e7e7e7ff;
    margin: 16px;
  }
}
//动画效果
.down-active {
  height: 100px;
  width: 375px;
  position: absolute;
  bottom: 80px;
  //   z-index: 3;
  background-color: #fff;
}
</style>
