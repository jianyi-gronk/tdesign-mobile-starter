<template>
  <div class="container">
    <t-navbar title="购买结果" :fixed="false" left-arrow />
    <div class="main">
      <icon name="check-circle" size="70px" />
      <div class="success">购买成功</div>
      <div class="card">
        <img src="src\assets\images\picture\fwsjcxdh.png" alt="" class="pic" />
        <div class="card-title">{{ activity.name }}</div>
        <div class="des">
          <icon name="time" size="14px" /> {{ activity.date }}
          <icon name="location" size="14px" /> {{ activity.site }}
        </div>
      </div>
      <div class="members">
        <div class="text">报名人员</div>
        <div
          class="item"
          v-for="member in activity.members"
          :key="activity.uuid"
        >
          <img src="src\assets\images\avatar\cyx.png" alt="" class="avatar" />
          <div class="user">
            <div class="username">{{ member.username }}</div>
            <div class="des">{{ member.age }}岁 {{ member.identity }}</div>
          </div>
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
      <t-popup v-model="visible" placement="bottom" style="height: 278px">
        <div class="share_window">
          <div class="text">分享给朋友</div>
          <t-grid :column="0" class="grid-demo">
            <t-grid-item
              v-for="item in shareList.friends"
              :key="item.uid"
              :text="item.name"
              :image="item.imgUrl"
            />
          </t-grid>
          <div class="text">分享到社媒</div>
          <t-grid :column="0" class="grid-demo">
            <t-grid-item
              v-for="item in shareList.media"
              :key="item.mid"
              :text="item.name"
              :image="item.imgUrl"
            />
          </t-grid>
        </div>
        <div class="close-btn" @click="onClose">取消</div>
      </t-popup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, reactive, ref } from 'vue';
import { TDActivity } from './types/index';
import { Icon } from 'tdesign-icons-vue-next';
import { reqApplicantInfoData } from '../../api/activityInfo/applicantInfo';
import { reqActivityDetailInfo } from '../../api/activityInfo/activityDetail';

const activity: Ref<TDActivity> = ref({
  uuid: '',
  name: '',
  date: '',
  site: '',
  members: [
    {
      username: '',
      age: 0,
      identity: '',
      uid: ''
    }
  ]
});

const shareList = reactive({
  friends: [
    {
      name: '',
      imgUrl: '',
      uid: ''
    }
  ],
  media: [
    {
      name: 'WeChat',
      imgUrl: 'src/assets/images/icon/weixin.png',
      mid: '1001'
    },
    {
      name: 'QQ',
      imgUrl: 'src/assets/images/icon/QQ.png',
      mid: '1002'
    },
    {
      name: 'Doc',
      imgUrl: 'src/assets/images/icon/Doc.png',
      mid: '1003'
    },
    {
      name: 'Map',
      imgUrl: 'src/assets/images/icon/Map.png',
      mid: '1004'
    },
    {
      name: 'QQ Music',
      imgUrl: 'src/assets/images/icon/QQMusic.png',
      mid: '1005'
    }
  ]
});

const visible = ref(false);

const onClose = () => {
  visible.value = false;
};

onMounted(async () => {
  const res1 = await reqApplicantInfoData('/applicantInfo');
  shareList.friends = res1.data.info.friends;
  const res2 = await reqActivityDetailInfo();
  activity.value = res2.data.activity;
});
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
    padding-top: 1.6rem;

    .t-icon {
      color: #2ba471;
    }

    .success {
      color: #000000e6;
      font-size: 0.5333rem;
      font-weight: 600;
      margin-top: 0.5333rem;
      text-align: center;
      line-height: 0.7467rem;
    }

    .card {
      width: 9.1467rem;
      height: 7.52rem;
      margin-top: 0.64rem;
      border-radius: 0.32rem;
      opacity: 1;
      background: #ffffffff;
      box-shadow: 0 0.16rem 0.8rem 0.1333rem #0000000d,
        0 0.4267rem 0.64rem 0.0533rem #0000000a,
        0 0.2133rem 0.2667rem -0.1333rem #00000014;
      padding: 0.4267rem;

      .pic {
        width: 8.2933rem;
        height: 4.6667rem;
        border-radius: 0.2416rem;
        background-color: #040000;
        margin-top: 0.0117rem;
      }

      .card-title {
        font-weight: 600;
        font-size: 0.48rem;
        margin: 0.4267rem 0rem;
      }

      .des {
        color: #000000e6;
        font-size: 0.32rem;
        font-weight: 400;

        .t-icon {
          color: #0052d9;
        }
      }
    }
  }

  .members {
    display: flex;
    margin: 0.8rem auto;
    width: 8.72rem;
    display: flex;
    flex-direction: column;

    .text {
      font-size: 0.4267rem;
      font-weight: 600;
      font-family: 'PingFang SC';
    }

    .item {
      width: 8.72rem;
      height: 2.1867rem;
      border-radius: 0.24rem;
      opacity: 1;
      background: #ffffffff;
      display: flex;
      justify-content: start;
      align-items: center;
      margin-top: 0.32rem;

      .avatar {
        width: 1.28rem;
        height: 1.28rem;
        background-color: #fcecc2;
        border-radius: 0.64rem;
        margin-left: 0.4267rem;
      }

      .user {
        margin-left: 0.32rem;

        .username {
          font-size: 0.4267rem;
          font-weight: 400;
          line-height: 0.64rem;
          color: #000000e6;
        }

        .des {
          margin-top: 0.1067rem;
          font-size: 0.3733rem;
          font-weight: 400;
          line-height: 0.5867rem;
          color: #00000099;
        }
      }
    }
  }

  .footer-btns {
    position: fixed;
    bottom: 0.4267rem;
    left: 0.4267rem;
    margin: 0 auto;

    .share-btn {
      width: 4.4667rem;
      height: 1.28rem;
    }

    .check-btn {
      margin-left: 0.2133rem;
      width: 4.4667rem;
      height: 1.28rem;
    }
  }
}

.share_window {
  margin-left: 0.4267rem;
  margin-top: 0.4267rem;
  --td-grid-item-description-font-size: 0.32rem;

  .text {
    color: #00000066;
    font-size: 0.3733rem;
    font-weight: 400;
  }
}

.close-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.28rem;
  color: #000000e6;
  font-size: 0.4267rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.28rem;
  border-top: 0.0133rem solid #e7e7e7ff;
  z-index: 1500000;
}
</style>
