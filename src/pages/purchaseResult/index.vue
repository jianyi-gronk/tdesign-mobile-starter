<template>
  <div class="container">
    <t-navbar title="标题文字" :fixed="false" left-arrow />
    <div class="main">
      <icon name="check-circle" size="70px" />
      <div class="success">购买成功</div>
      <div class="card">
        <img src="src\assets\images\picture\fwsjcxdh.png" alt="" class="pic" />
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
        <img src="src\assets\images\avatar\cyx.png" alt="" class="avatar" />
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
        @click="visible = true"
      >
        <icon name="share" size="20px" />分享给朋友
      </t-button>
      <t-button class="check-btn" size="large" theme="primary">去查看</t-button>
    </div>

    <t-popup v-model="visible" placement="bottom" style="height: 278px">
      <div class="share_window">
        <div class="text">分享给朋友</div>
        <t-grid :column="0" class="grid-demo">
          <t-grid-item
            v-for="item in shareList.friends"
            :key="item"
            :text="item.name"
            :image="item.imgUrl"
          />
        </t-grid>
        <div class="text">分享到社媒</div>
        <t-grid :column="0" class="grid-demo">
          <t-grid-item
            v-for="item in shareList.media"
            :key="item"
            :text="item.name"
            :image="item.imgUrl"
          />
        </t-grid>
      </div>
    </t-popup>
    <div class="close-btn" @click="onClose">取消</div>
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

const shareList = {
  friends: [
    {
      name: 'Allen',
      imgUrl: 'src/assets/images/avatar/small/Allen.png'
    },
    {
      name: 'Nick',
      imgUrl: 'src/assets/images/avatar/small/Nick.png'
    },
    {
      name: 'Jackey',
      imgUrl: 'src/assets/images/avatar/small/Jacky.png'
    },
    {
      name: 'Eric',
      imgUrl: 'src/assets/images/avatar/small/Eric.png'
    },
    {
      name: 'Johnson',
      imgUrl: 'src/assets/images/avatar/small/Johnson.png'
    }
  ],
  media: [
    {
      name: 'WeChat',
      imgUrl: 'src/assets/images/icon/weixin.png'
    },
    {
      name: 'QQ',
      imgUrl: 'src/assets/images/icon/QQ.png'
    },
    {
      name: 'Doc',
      imgUrl: 'src/assets/images/icon/Doc.png'
    },
    {
      name: 'Map',
      imgUrl: 'src/assets/images/icon/Map.png'
    },
    {
      name: 'QQ Music',
      imgUrl: 'src/assets/images/icon/QQMusic.png'
    }
  ]
};

const visible = ref(false);

const onClose = () => {
  console.log('s');
};
</script>

<style lang="less" scoped>
.container {
  --td-navbar-bg-color: #f5f6f7ff;
  background: #f5f6f7ff;
  height: 100vh;
  width: 100vw;
  color: #000000e6;
  font-family: 'PingFang SC';

  .main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding-top: 60px;

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
    margin: 0 16px;
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
.share_window {
  margin-left: 16px;
  margin-top: 16px;
  --td-grid-item-description-font-size: 12px;
  .text {
    color: #00000066;
    font-size: 14px;
    font-weight: 400;
  }
}
.close-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px;
  color: #000000e6;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 48px;
  border-top: 0.5px solid #e7e7e7ff;
  z-index: 1500000;
}
</style>
