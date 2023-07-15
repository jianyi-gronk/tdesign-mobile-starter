<template>
  <div class="container">
    <div class="navBar">
      <div>我的</div>
    </div>
    <div class="content">
      <div class="user_info">
        <t-avatar
          size="large"
          class="avatar-example"
          :image="user_info.img"
        ></t-avatar>
        <div class="right">
          <div class="user_name">{{ user_info.userName }}</div>

          <div class="user_title">
            <div class="age">{{ user_info.age }}岁</div>
            <div class="position">{{ user_info.position }}</div>
          </div>
        </div>
        <div class="edit_info">
          <EditIcon size="large" class="edit_icon" />
        </div>
      </div>
      <!-- <t-badge dot :offset="[10, -50]" class="badge-item" /> -->
      <t-tabs :default-value="currentValue" @change="onChange" class="tab">
        <t-tab-panel value="0" :label="wait.label" class="card_content">
          <div v-for="(item, index) in wait.data" :key="index">
            <Mycard :item="item" />
          </div>
        </t-tab-panel>
        <t-tab-panel value="1" :label="finished.label" class="card_content">
          <div v-for="(item, index) in finished.data" :key="index">
            <Mycard :item="item" />
          </div>
        </t-tab-panel>
        <t-tab-panel value="2" :label="activities.label" class="card_content">
          <div v-for="(item, index) in activities.data" :key="index">
            <Mycard :item="item" />
          </div>
        </t-tab-panel>
      </t-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EditIcon } from 'tdesign-icons-vue-next';
import { reactive, ref } from 'vue';
import Mycard from '../../components/MyCard.vue';
const currentValue = ref('0');
const user_info = reactive({
  userName: '蔡丽轩',
  age: 29,
  position: '设计/艺术从业者',
  img: 'https://tdesign.gtimg.com/mobile/demos/avatar_1.png',
});
// let decribes = [
//   {
//     title: '2021 SICC服务设计创....',
//     date: '2021年3月16日',
//     status: '待参加',
//     comment: '去评价',
//   },
//   {
//     title: '2023 SICC服务设计创....',
//     date: '2023年3月16日',
//     status: '已完成',
//     comment: '去评价',
//   },
//   {
//     title: '2022 SICC服务设计创....',
//     date: '2022年3月16日',
//     status: '待参加',
//     comment: '去评价',
//   },
// ];

// const list = [
//   {
//     value: '0',
//     label: '待参加',
//     panel: decribes,
//   },
//   {
//     value: '1',
//     label: '已完成',
//     panel: decribes,
//   },
//   {
//     value: '2',
//     label: '全部活动',
//     panel: decribes,
//   },
// ];

let wait = {
  label: '待参加',
  data: [
    {
      title: '2021 SICC服务设计创....',
      date: '2021年3月16日',
      status: '待参加',
      comment: '去评价',
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar_1.png',
    },
    {
      title: '2021 SICC服务设计创....',
      date: '2021年3月16日',
      status: '待参加',
      comment: '去评价',
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar_1.png',
    },
    {
      title: '2021 SICC服务设计创....',
      date: '2021年3月16日',
      status: '待参加',
      comment: '去评价',
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar_1.png',
    },
  ],
};

let finished = {
  label: '已完成',
  data: [
    {
      title: '2021 SICC服务设计创....',
      date: '2021年3月16日',
      status: '已完成',
      comment: '去评价',
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar_1.png',
    },
  ],
};

const activities = {
  label: '全部活动',
  data: [
    {
      title: '2021 SICC服务设计创....',
      date: '2021年3月16日',
      status: '待参加',
      comment: '去评价',
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar_1.png',
    },
    {
      title: '2021 SICC服务设计创....',
      date: '2021年3月16日',
      status: '已完成',
      comment: '去评价',
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar_1.png',
    },
  ],
};
const onChange = (value: string) => {
  currentValue.value = value;
  console.log(`change to ${value}`);
};
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  width: 100vw;
  background-color: #f5f6f7ff;
  font-family: 'PingFang SC';
}
.navBar {
  width: 375px;
  height: 48px;
  opacity: 1;
  font-size: 16px;
  div {
    margin: 0 auto;
    text-align: center;
    line-height: 48px;
    font-weight: bold;
  }
}
.content {
  margin: 0 15px;
}
.user_info {
  width: 343px;
  height: 96px;
  border-radius: 12px;
  opacity: 1;
  background: #ffffffff;
  font-size: 12px;
  border-radius: 12px;
  display: flex;
  .avatar-example {
    margin: 15px;
  }
  .right {
    margin: 20px 5px;
    .user_name {
      font-size: 16px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
    }
    .user_title {
      display: flex;
      font-size: 12px;
      margin-top: 9px;
      color: #000000e6;
      .age {
        width: 43px;
        height: 24px;
        border-radius: 3px;
        opacity: 1;
        background: #f3f3f3ff;
        text-align: center;
        line-height: 24px;
        margin-right: 10px;
      }
      .position {
        width: 106px;
        height: 24px;
        border-radius: 3px;
        opacity: 1;
        background: #f3f3f3ff;
        text-align: center;
        line-height: 24px;
      }
    }
  }

  .edit_icon {
    margin-left: 40px;
    margin-top: 30px;
  }
}

.tab {
  margin-top: 15px;
  width: 343px;
  height: 582px;
  border-radius: 12px;
  opacity: 1;
  background: #f5f6f7ff;
}
.card_content {
  width: 343px;
  height: 582px;
  border-radius: 12px;
  opacity: 1;
}
</style>
