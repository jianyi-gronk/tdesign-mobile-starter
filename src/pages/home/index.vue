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
    <div
      class="热门推荐"
      style="font-size: 20px; margin-left: 16px; margin-top: 166px"
    >
      热门推荐
    </div>

    <!-- <div style="padding: 0 16px">
      <t-swiper
        :navigation="{ type: 'dots' }"
        :autoplay="false"
        @change="handleChange"
      >
        <t-swiper-item
          v-for="(item, index) in swiperList"
          :key="index"
          style="height: 192px"
        >
          <img :src="item" class="img" />
        </t-swiper-item>
      </t-swiper>
    </div> -->

    <div class="container">
      <div class="placeholder"></div>
      <div class="sticky">
        <div class="sticky-content">全部活动</div>
      </div>
      <div class="sticky_">
        <div class="demo-tab-bar" style="width: 250px">
          <t-tabs default-value="first" @change="switchTab">
            <t-tab-panel value="first">
              <template #label>
                <div class="label-content">
                  <span>最新活动</span>
                </div>
              </template>
              <template #default>
                <LatestActivity v-if="currentTab === 'first'" />
              </template>
            </t-tab-panel>
            <t-tab-panel value="second">
              <template #label>
                <div class="label-content">
                  <span>高分活动</span>
                </div>
              </template>
              <template #default>
                <HighScoreActivity v-if="currentTab === 'second'" />
              </template>
            </t-tab-panel>
          </t-tabs>
        </div>
        <div class="filter" @click="visible=true">
          <div class="filter_">
            <icon-font name="filter" size="large" />
            <span style="font-size: 0.3733rem">筛选</span>
            <t-popup
              v-model="visible"
              placement="bottom"
              style="padding: 10px"
              :closeBtn="true"
            >
              <div class="fil_header">全部筛选</div>
              <div class="fil_content">
                <div class="fil_item">
                  <div class="item_title">面向领域</div>
                  <div class="item_tag">
                    <t-check-tag
                      variant="light-outline"
                      size="large"
                      :content="['IT互联网', 'IT互联网']"
                      shape="round"
                      class="tag"
                    />
                    <t-check-tag
                      variant="light-outline"
                      size="large"
                      :content="['艺术设计', '艺术设计']"
                      shape="round"
                      class="tag"
                    />
                    <t-check-tag
                      variant="light-outline"
                      size="large"
                      :content="['科技', '科技']"
                      shape="round"
                      class="tag"
                    />
                    <t-check-tag
                      variant="light-outline"
                      size="large"
                      :content="['电商', '电商']"
                      shape="round"
                      class="tag"
                    />
                    <t-check-tag
                      variant="light-outline"
                      size="large"
                      :content="['教育', '教育']"
                      shape="round"
                      class="tag"
                    />
                    <t-check-tag
                      variant="light-outline"
                      size="large"
                      :content="['医疗健康', '医疗健康']"
                      shape="round"
                      class="tag"
                    />
                    <t-check-tag
                      variant="light-outline"
                      size="large"
                      :content="['心理学', '心理学']"
                      shape="round"
                      class="tag"
                    />
                    <t-check-tag
                      variant="light-outline"
                      size="large"
                      :content="['摄影', '摄影']"
                      shape="round"
                      class="tag"
                    />
                  </div>
                </div>
                <div class="fil_item">
                  <div class="item_title">活动形式</div>
                  <div class="item_tag">
                    <t-check-tag
                      variant="light-outline"
                      size="large"
                      :content="['讲座', '讲座']"
                      shape="round"
                      class="tag"
                    />
                    <t-check-tag
                      variant="light-outline"
                      size="large"
                      :content="['展览', '展览']"
                      shape="round"
                      class="tag"
                    />
                    <t-check-tag
                      variant="light-outline"
                      size="large"
                      :content="['工作坊', '工作坊']"
                      shape="round"
                      class="tag"
                    />
                  </div>
                </div>
                <div class="fil_item">
                  <div class="item_title">活动日期</div>
                  <div class="item_choose" style="font-size: 14px">
                    <t-calendar
                      v-model:visible="date_visible"
                      :value="date_value"
                      type="range"
                      @confirm="handleConfirm"
                    ></t-calendar>
                    <t-input v-model="date"></t-input>
                    <t-button
                      theme="primary"
                      variant="text"
                      @click="date_visible = true"
                      >选择日期</t-button
                    >
                  </div>
                </div>
                <div class="fil_item">
                  <div class="item_title">价格范围(元)</div>
                  <div class="item_content" style="margin-top: 10px">
                    <t-slider
                      range
                      :default-value="[30, 50]"
                      :label="true"
                      show-extreme-value
                      max="588"
                      min="0"
                    />
                  </div>
                </div>
              </div>
              <div class="fil_footer">
                <div
                  class="btn btn--cancel"
                  aria-role="button"
                  @click="onReset"
                >
                  重置
                </div>
                <div
                  class="btn btn--confirm"
                  aria-role="button"
                  @click="onComplete"
                >
                  完成
                </div>
              </div>
            </t-popup>
          </div>
        </div>
      </div>
      <div class="other-content" v-for="i in 50" :key="i"></div>
    </div>
    <t-tab-bar
      class="bottom-tab-bar"
      v-model="tabValue"
      theme="tag"
      :split="false"
    >
      <t-tab-bar-item
        v-for="item in tabList"
        :key="item.value"
        :value="item.value"
        @click="handleTabClick(item.value)"
      >
        {{ item.label }}
        <template #icon>
          <t-icon :name="item.icon" />
        </template>
      </t-tab-bar-item>
    </t-tab-bar>
  </div>
</template>

<script lang="ts" setup>
import { IconFont } from 'tdesign-icons-vue-next';
import { ref } from 'vue';


const value = ref('');

const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images';
const swiperList = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`
];
//标签栏
const tabValue = ref('label_1');
const tabList = ref([
  { value: 'label_1', label: '首页', icon: 'home', path: '/' },
  { value: 'label_2', label: '我的', icon: 'user', path: '/my' }
]);
//标签栏跳转
const router = useRouter();
const handleTabClick = (value: string) => {
  if (value === 'label_1') {
    router.push('/');
    //console.log('1')
  } else if (value === 'label_2') {
    router.push('/my');
    //console.log('2')
  }
};

//活动跳转
const currentTab = ref('first');
const switchTab = (value: string) => {
  currentTab.value = value;
};
</script>

<style lang="less" scoped>
.bottom-tab-bar {
  position: fixed;
  bottom: 24px;
  width: 100%;
}

img {
  display: block;
  width: 100%;
  height: 192px;
}


.热门推荐 {
  width: 80px;
  height: 28px;
  opacity: 1;
  color: #000000e6;
  font-size: 20px;
  font-weight: 600;
  font-family: 'PingFang SC';
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
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* padding-left: 16px; */
    width: 100%;
}

.sticky-content {

  width: 100%;
  background: #fff;
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
    /* margin-top: 11.7067rem; */
    margin-bottom: 10px;
    border-left: 1px solid #e7e7e7ff;
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
.fil_header {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
}

.fil_content {
  margin-top: 10px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  .fil_item {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .item_choose{
      display: flex;
      padding: 0 10px;
      align-items: center;
    }
    .item_title {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 15px;
    }
    .item_tag {
      width: 100%;
      margin-bottom: 10px;
      .tag {
        width: 30%;
        text-align: center;
        margin: 0 5px;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        margin-bottom: 13px;
      }
    }
    .item_content{
      margin-bottom: 15px;
    }
  }
}
.fil_footer {
  display: flex;
  justify-content: space-evenly;
}
.btn {
  font-size: 14px;
  padding: 10px;
  margin: 15px 0;
}

.btn--cancel {
  color: #0052d9;
  border-radius: 5px;
  width: 35%;
  text-align: center;
}

.btn--confirm {
  color: white;
  background-color: #0052d9;
  border-radius: 5px;
  width: 35%;
  text-align: center;
}
</style>
