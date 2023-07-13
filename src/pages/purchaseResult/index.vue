<template>
  <div class="container">
    <div class="header">
      <icon name="chevron-left" size="25px" />
      <div class="title">购买结果</div>
    </div>
    <div class="main">
      <icon name="check-circle" size="70px" />
      <div class="success">购买成功</div>
      <div class="card">
        <div class="pic"></div>
        <div class="card-title">{{ article.name }}</div>
        <div class="des">
          <icon name="time" size="14px" /> {{ article.date }}
          <icon name="location" size="14px" /> {{ article.site }}
        </div>
      </div>
    </div>

    <div class="members">
      <div class="text">报名人员</div>
      <div class="item" v-for="member in article.members">
        <div class="avatar"></div>
        <div class="user">
          <div class="username">{{ member.username }}</div>
          <div class="des">{{ member.age }}岁 {{ member.identity }}</div>
        </div>
      </div>
    </div>

    <div class="footer-btns">
      <t-button
        class="share-btn"
        size="large"
        theme="primary"
        variant="outline"
      >
        <icon name="share" size="20px" />分享给朋友
      </t-button>
      <t-button class="check-btn" size="large" theme="primary">去查看</t-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { TDActivity, TDUser } from './types/index';
import { Icon } from 'tdesign-icons-vue-next';

const article: TDActivity = {
  uuid: '123',
  name: '2021 SICC服务设计创新大会',
  date: '2021年3月16日',
  site: '深圳市腾讯滨海大厦',
  members: [
    {
      username: '蔡宣轩',
      age: 29,
      identity: '设计师/艺术从业者'
    }
  ]
};

const index: Ref<number | string> = ref('');
</script>

<style lang="less" scoped>
.container {
  background: #f5f6f7ff;
  height: 100vh;
  width: 100vw;
  color: #000000e6;
  font-family: 'PingFang SC';

  .header {
    width: 100%;
    height: 48px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    .title {
      font-size: 18px;
      font-weight: 600;

      text-align: center;
      line-height: 48px;
      margin: 0 auto;
    }

    .t-icon {
      fill: #000000e6;
      position: fixed;
      top: 12px;
      left: 20px;
      display: block;
      justify-self: start;
    }
  }

  .main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    .t-icon {
      color: #2ba471;
    }
    .success {
      color: #000000e6;
      font-size: 20px;
      font-weight: 600;
      margin-top: 20px;
      text-align: center;
      line-height: 28px;
    }
    .card {
      width: 343px;
      height: 282px;
      margin-top: 24px;
      border-radius: 12px;
      opacity: 1;
      background: #ffffffff;
      box-shadow: 0 6px 30px 5px #0000000d, 0 16px 24px 2px #0000000a,
        0 8px 10px -5px #00000014;
      padding: 16px;

      .pic {
        width: 311px;
        height: 175px;
        border-radius: 9.06px;
        background-color: #040000;
        margin-top: 0.44px;
      }
      .card-title {
        font-weight: 600;
        font-size: 18px;
        margin: 16px 0px;
      }
      .des {
        color: #000000e6;
        font-size: 12px;
        font-weight: 400;

        .t-icon {
          color: #0052d9;
        }
      }
    }
  }

  .members {
    display: flex;
    margin: 30px auto;
    width: 327px;
    display: flex;
    flex-direction: column;
    .text {
      font-size: 16px;
      font-weight: 600;
      font-family: 'PingFang SC';
    }
    .item {
      width: 327px;
      height: 82px;
      border-radius: 9px;
      opacity: 1;
      background: #ffffffff;
      display: flex;
      justify-content: start;
      align-items: center;
      margin-top: 12px;

      .avatar {
        width: 48px;
        height: 48px;
        background-color: #fcecc2;
        border-radius: 24px;
        margin-left: 16px;
      }

      .user {
        margin-left: 12px;
        .username {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          color: #000000e6;
        }
        .des {
          margin-top: 4px;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          color: #00000099;
        }
      }
    }
  }
  .footer-btns {
    position: fixed;
    bottom: 16px;
    margin: 0 auto;
    .share-btn {
      width: 167.5px;
      height: 48px;
    }
    .check-btn {
      margin-left: 8px;
      width: 167.5px;
      height: 48px;
    }
  }
}
</style>
