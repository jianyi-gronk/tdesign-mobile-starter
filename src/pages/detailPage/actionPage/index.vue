<template>
  <div class="actionPage">
    <div class="down-container">
      <div class="down" @click.stop="handleHidden">
        <t-icon name="chevron-down" size="25px" class="down-icon" />
      </div>
    </div>
    <transition name="down">
      <div class="indexOne" ref="indexOne">
        <div class="content">
          <div class="title-avatars">
            <div class="title">2021 SICC服务设计创新大会</div>
            <div class="avatars">
              <img
                v-for="item in avatars"
                :key="item.id"
                :src="getImagePath(item.name)"
                alt=""
                :class="{ moveLeft: item.id > 1 }"
              />
              <div class="circle">99+</div>
              <div class="peoples">236人感兴趣</div>
            </div>
          </div>
          <div class="time-place">
            <div class="time">
              <t-icon name="time" class="time-place-Icon" size="20px" />
              <span>时间：2021年3月16日</span>
            </div>
            <div class="place">
              <t-icon name="location" class="time-place-Icon" size="20px" />
              <span>地点：深圳市腾讯滨海大厦</span>
              <t-button size="large" theme="light" class="navigator"
                >导航</t-button
              >
            </div>
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
interface Avatar {
  name: string;
  id: number;
}
const avatars: Array<Avatar> = [
  { name: 'Nick', id: 1 },
  { name: 'Jacky', id: 2 },
  { name: 'Eric', id: 3 },
  { name: 'Johnson', id: 4 },
  { name: 'Allen', id: 5 },
];
function getImagePath(imageName: string) {
  // 使用 new URL 动态引入图片
  return new URL(`../../../assets/avatars/${imageName}.png`, import.meta.url)
    .href;
}
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
.down-container {
  position: absolute;
  left: 0;
  width: 375px;
  height: 44px;
  opacity: 1;
}
.down {
  position: absolute;
  display: flex;
  justify-content: center;
  color: white;
  top: -32px;
  left: 0;
  z-index: -1;
  width: 375px;
  height: 44px;
  opacity: 1;
  .down-icon {
    color: #fff;
  }
}
.actionPage {
  position: relative;
  width: 375px;
  height: 546px;
  border-radius: 12px 12px 0 0;
  opacity: 1;
  background: #ffffffff;
  margin-top: -12px;
  .title-avatars {
    width: 343px;
    height: 88px;
    opacity: 1;
    border-bottom: 0.5px solid #e7e7e7ff;
    margin-bottom: 16px;
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
    .avatars {
      display: flex;
      width: 210px;
      height: 32px;
      margin-top: 12px;
      margin-bottom: 16px;
      img {
        height: 32px;
        width: 32px;
      }
      .circle {
        position: relative;
        display: inline-block;
        width: 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 50%;
        font-size: 11.2px;
        padding-left: 4px;
        font-weight: 600;
        margin-left: -12px;
        color: #0b5dca;
        z-index: 3;
        background-color: #d9e2fe;
      }
      .peoples {
        width: 70px;
        height: 20px;
        display: inline-block;
        color: #848484;
        line-height: 20px;
        font-size: 12px;
        font-weight: 400;
        margin: 6px 0 0 8px;
      }
    }
  }
  .content {
    padding: 24px 16px;
  }
  .time-place {
    width: 343px;
    height: 80px;
    opacity: 1;
    border-bottom: 0.5px solid #e7e7e7ff;
    padding: 3px 0;
    .time {
      display: flex;
      align-items: center;
      width: 343px;
      height: 28px;
      span {
        margin-left: 5.25px;
      }
    }
    .place {
      display: flex;
      align-items: center;
      width: 343px;
      height: 28px;
      span {
        margin-left: 5.25px;
      }
      .navigator {
        width: 44px;
        height: 28px;
        padding: 3px 8px;
      }
    }
    .time-place-Icon {
      display: inline-block;
      color: #0052d9;
      width: 20px;
      height: 20px;
    }
    span {
      display: inline-block;
      width: 319px;
      height: 22px;
      line-height: 22px;
      opacity: 1;
      color: #000000e6;
      font-size: 14px;
      font-weight: 400;
      font-family: 'PingFang SC';
      text-align: left;
    }
  }
}
.moveLeft {
  margin-left: -12px;
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
