<template>
  <div class="card">
    <div class="card_img">
      <img :src="item.img" alt="" />
    </div>
    <div class="describe">
      <div class="dec_top">
        <div class="dec_title">{{ item.title }}</div>
        <div class="date">{{ item.date }}</div>
      </div>
      <div class="dec_buttom">
        <div :class="item.status === '已完成' ? 'isFinished' : 'dec_status'">
          {{ item.status }}
        </div>
        <div v-if="item.status === '已完成'" class="comment">
          {{ item.comment }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  item: {
    title: string;
    date: string;
    status: string;
    comment: string;
    img: string;
  };
}>();
</script>

<style scoped lang="less">
.card {
  display: flex;
  margin: 15px;
  width: 311px;
  height: 120px;
  border-radius: 9px;
  opacity: 1;
  background: #ffffffff;
  box-shadow: 0 6px 30px 5px #0000000d, 0 16px 24px 2px #0000000a,
    0 8px 10px -5px #00000014;
  .card_img {
    width: 120px;
    height: 120px;
    opacity: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .describe {
    display: flex;
    margin-left: 18px;
    flex-direction: column;
    justify-content: space-around;
    width: 191px;
    height: 120px;
    opacity: 1;
    .dec_top {
      .dec_title {
        width: 159px;
        height: 22px;
        opacity: 1;
        color: #000000e6;
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        line-height: 22px;
      }
      .date {
        width: 159px;
        height: 20px;
        opacity: 1;
        color: #00000099;
        font-size: 12px;
        font-weight: 400;
        margin-top: 5px;
        text-align: left;
        line-height: 20px;
      }
    }
    .dec_buttom {
      display: flex;
      justify-content: space-between;
      width: 159px;
      height: 22px;
      opacity: 1;
      font-weight: 600;
      font-size: 14px;
      text-align: left;
      line-height: 22px;
      .dec_status {
        color: #2ba471ff;
      }
      .comment {
        color: #0052d9;
        font-weight: 400;
      }
    }
  }
}
.isFinished {
  width: 117px;
  height: 22px;
  opacity: 1;
  color: #00000066;
  font-size: 14px;
  font-weight: 600;
  font-family: 'PingFang SC';
  text-align: left;
  line-height: 22px;
}
</style>
