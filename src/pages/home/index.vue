<template>
  <div>
    <div
      class="header"
      style="
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 16px;
        margin-top: 60px;
      "
    >
      <div style="display: flex; align-items: center">
        <icon-font name="location" size="20px" />
        <span style="font-size: 14px; margin-left: 4px">深圳市</span>
      </div>
      <div class="example-search">
        <t-search
          v-model="value"
          :clearable="true"
          shape="round"
          placeholder="搜索活动"
          @change="onChange"
        ></t-search>
      </div>
    </div>
    <!-- <div class="search-box">
      <input type="text" placeholder="搜索...">
    </div> -->
    <div class="热门推荐" style="font-size: 20px; margin-left: 16px; margin-top: 166px;">热门推荐</div>
    <div class="container">
      <div class="placeholder"></div>
      <div class="sticky">
        <div class="sticky-content">全部活动</div>
      </div>
      <div class="sticky_">
        <div class="demo-tab-bar" style="width: 250px">
          <t-tabs default-value="first">
            <t-tab-panel value="first">
              <template #label>
                <div class="label-content">
                  <!-- <icon-font name="app" size="large" /> -->
                  <span>最新活动</span>
                </div>
              </template>
            </t-tab-panel>
            <t-tab-panel value="second">
              <template #label>
                <div class="label-content">
                  <!-- <icon-font name="app" size="large" /> -->
                  <span>高分活动</span>
                </div>
              </template>
            </t-tab-panel>
          </t-tabs>
        </div>
        <!-- <div class="filter">
          <div class="filter_">
            <icon-font name="filter" size="large" />
            <span style="font-size: 0.3733rem">筛选</span>
          </div>
        </div> -->
      </div>
      <div class="other-content" v-for="i in 50" :key="i"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconFont } from 'tdesign-icons-vue-next';
import { ref } from 'vue';

const onChange = (val: string) => {
  console.log('change: ', val);
};

.热门推荐 {
  width: 80px;
  height: 28px;
  opacity: 1;
  color: #000000e6;
  font-size: 20px;
  font-weight: 600;
  font-family: "PingFang SC";
  text-align: left;
  line-height: 28px;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.example-search {
  width: 343px;
  background-color: #fff;
  padding: 21px 0px;
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

.search-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #f8f8f8;
  padding: 5px;
  box-sizing: border-box;
  z-index: 1000;
}

.search-box input {
  width: 100%;
  height: 40px;
  padding: 0 10px;
  box-sizing: border-box;
}

.container {
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.placeholder {
  height: 134px;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 166px;
  height: 28px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* padding-left: 16px; */
  width: 100%;
}

.sticky_ {
  position: -webkit-sticky;
  position: sticky;
  top: 194px;
  // height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* padding-left: 16px; */
  width: 100%;
}

.sticky-content {
  padding-left: 16px;
  box-sizing: border-box;
  height: 28px;
  opacity: 1;
  color: #000000e6;
  font-size: 20px;
  font-weight: 600;
  font-family: 'PingFang SC';
  text-align: left;
  line-height: 28px;
}

.other-content {
  width: 343px;
  height: 120px;
  border-radius: 9px;
  opacity: 1;
  background: #fff;
  box-shadow: 0 6px 30px 5px #0000000d, 0 16px 24px 2px #0000000a,
    0 8px 10px -5px #00000014;
  margin-bottom: 20px;
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
</style>
