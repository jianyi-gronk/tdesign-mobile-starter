<template>
  <icon-font class="location" name="location" size="0.5333rem" />
  <div class="深圳市">深圳市</div>
  <div class="example-search">
    <t-search
      v-model="value"
      :clearable="true"
      shape="round"
      placeholder="搜索活动"
      @change="onChange"
    ></t-search>
  </div>
  <div class="热门推荐">热门推荐</div>
  <div class="全部活动">全部活动</div>
  <div class="demo-tab-bar">
    <t-tabs default-value="first">
      <t-tab-panel value="first">
        <template #label>
          <div class="label-content">
            <span class="最新活动">最新活动</span>
          </div>
        </template>
      </t-tab-panel>
      <t-tab-panel value="second">
        <template #label>
          <div class="label-content">
            <span class="高分活动">高分活动</span>
          </div>
        </template>
      </t-tab-panel>
    </t-tabs>
  </div>
  <div class="filter">
    <div class="filter_">
      <icon-font name="filter" size="large" />
      <span style="font-size: 0.3733rem">筛选</span>
    </div>
  </div>
  <t-tab-bar class="bottomNav" v-model="value_" theme="tag" :split="false">
    <t-tab-bar-item v-for="item in list" :key="item.value" :value="item.value">
      {{ item.label }}
      <template #icon>
        <t-icon :name="item.icon" />
      </template>
    </t-tab-bar-item>
  </t-tab-bar>
  <div class="content"></div>
  <div class="content" style="margin-top: 17.04rem"></div>
  <div class="content" style="margin-top: 20.6667rem"></div>
  <div class="content" style="margin-top: 24.2933rem"></div>
  <div class="content" style="margin-top: 27.92rem"></div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { IconFont } from 'tdesign-icons-vue-next';
import { Icon as TIcon } from 'tdesign-icons-vue-next';

const onChange = (val: string) => {
  console.log('change: ', val);
};

const value_ = ref('label_1');
const list = ref([
  { value: 'label_1', label: '首页', icon: 'home', path: '/' },
  { value: 'label_2', label: '我的', icon: 'user', path: '/user' }
]);
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  //background-color: #fff;
}
.location {
  float: left;
  margin-left: 0.4267rem;
  margin-top: 1.6rem;
  opacity: 1;
  position: fixed;
}
.深圳市 {
  float: left;
  font-size: 0.3733rem;
  margin-left: 1.1067rem;
  margin-top: 1.5733rem;
  width: 42px;
  height: 22px;
  opacity: 1;
  color: #000000e6;
  font-weight: 400;
  font-family: 'PingFang SC';
  position: fixed;
}
.example-search {
  width: 343px;
  height: 40px;
  float: left;
  background-color: #fff;
  margin-left: 0.4267rem;
  position: absolute;
  margin-top: 2.72rem;
  font-size: 0.4267rem;
  position: fixed;
}
.热门推荐 {
  position: absolute;
  margin-left: 0.4267rem;
  margin-top: 4.3467rem;
  float: left;
  width: 80px;
  height: 28px;
  opacity: 1;
  color: #000000e6;
  font-size: 20px;
  font-weight: 600;
  font-family: 'PingFang SC';
}
img {
  display: flex;
  margin: 0 0.8rem;
  width: 7.5467rem;
  height: 4.2451rem;
}
.全部活动 {
  //position: absolute;
  overflow: auto;
  position: sticky;
  top: 646px;
  margin-left: 0.4267rem;
  margin-top: 10.96rem;
  float: left;
  width: 80px;
  height: 28px;
  opacity: 1;
  color: #000000e6;
  font-size: 20px;
  font-weight: 600;
  font-family: 'PingFang SC';
}
.t-tabs {
  margin-bottom: 16px;
}

.label-content {
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 3px;
  }
}
.demo-tab-bar {
  width: 6.6667rem;
  float: left;
  position: absolute;
  margin-top: 11.7067rem;
}
.label-content_ {
  border: 0.5333rem;
  border-left: 1px solid #e7e7e7ff;
}
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.3333rem;
  height: 1.28rem;
  position: absolute;
  margin-left: 6.6667rem;
  margin-top: 11.7067rem;
  //border-left: 1px solid #e7e7e7ff;
  border-bottom: 0.5px solid #e7e7e7ff;
}
.filter_ {
  width: 3.3333rem;
  height: 0.5867rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #e7e7e7ff;
}
.content {
  float: left;
  margin-left: 0.4267rem;
  margin-top: 13.4133rem;
  position: absolute;
  width: 343px;
  height: 120px;
  border-radius: 9px;
  opacity: 1;
  background: #ffffffff;
  box-shadow: 0 6px 30px 5px #0000000d, 0 16px 24px 2px #0000000a,
    0 8px 10px -5px #00000014;
}
.bottomNav {
  margin-bottom: 0.64rem;
  //position: absolute;
  z-index: 2;
}
</style>
