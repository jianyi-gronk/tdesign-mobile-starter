<template>
  <div class="actionPage">
    <div class="indexTwo" v-show="!isShow"></div>
    <transition name="down">
      <div class="indexOne" ref="indexOne">
        <div class="content" v-show="isShow">
          <div class="down" @click="handleHidden"></div>
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
import { ref } from 'vue';
import Comment from './comment.vue';
import Introduce from './introduce.vue';
let isShow = ref(true);
const indexOne = ref();
function handleHidden() {
  console.log(indexOne);
  indexOne.value.classList.add('down-active');
  console.log(indexOne);
  isShow.value = false;
}
</script>

<style scoped lang="less">
.actionPage {
  position: relative;
  width: 375px;
  height: 546px;
  border-radius: 12px 12px 0 0;
  opacity: 1;
  //   z-index: 99;
  background: #ffffffff;
  .title-avators {
    width: 343px;
    height: 88px;
    opacity: 1;
    border-bottom: 0.5px solid #e7e7e7ff;
    margin: 24px 16px 16px 16px;
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
  .down {
    position: absolute;
    z-index: 2;
    color: white;
    top: -32px;
    width: 375px;
    height: 44px;
    opacity: 1;
  }
  .down::before {
    content: '';
    display: block;
    width: 15px;
    height: 3px;
    background-color: white;
    color: #fff;
    position: absolute;
    z-index: 3;
    left: 50%;
    bottom: 20px;
    transform: translateX(-7.5px) rotate(45deg);
  }
  .down::after {
    content: '';
    display: block;
    width: 15px;
    height: 3px;
    background-color: white;
    color: #fff;
    position: absolute;
    z-index: 3;
    left: 50%;
    bottom: 20px;
    transform: rotate(-45deg);
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
.indexTwo {
  height: 466px;
  width: 375px;
  background-color: rgb(197, 192, 255);
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
