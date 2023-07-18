<template>
  <div class="container">
    <location></location>
    <div class="example-search">
      <t-search
        v-model="valueSearch"
        :clearable="true"
        shape="round"
        placeholder="搜索展览"
        @change="onChange"
      ></t-search>
    </div>
    <div class="calendar">
      <icon
        name="chevron-left"
        size="large"
        :class="visible ? 'icon' : 'none1'"
        style="left: 10px; top: 23%"
        @click="visible = false"
      ></icon>
      <icon
        name="close"
        size="large"
        :class="visible ? 'icon' : 'none1'"
        style="right: 10px; top: 23%"
        @click="visible = false"
      ></icon>
      <t-calendar
        v-model:visible="visible"
        :value="value"
        type="range"
        title="选择日期"
        confirmBtn="确认日期"
        @confirm="handleConfirm"
        @close="visible = false"
      ></t-calendar>
      <t-cell
        title="区间选择日期"
        arrow
        @click="visible = true"
        class="controllDate"
      ></t-cell>
    </div>
  </div>
</template>

<script setup lang="ts">
import location from './location.vue';
import { ref } from 'vue';
import { Icon } from 'tdesign-icons-vue-next';
const visible = ref(true);
const handleConfirm = (val: string) => {
  visible.value = false;
  console.log(val);
};
const today = new Date();
const tomorrow = new Date(today.getTime() + 5 * 24 * 3600 * 1000);
const value = ref([today, tomorrow]);
const onChange = (val: string) => {
  console.log('change: ', val);
};

const valueSearch = ref('');
</script>
<style scoped lang="less">
.container {
  width: 10rem;
  height: 21.6533rem;
  overflow: hidden;
}

.example-search {
  background-color: #fff;
  padding: 6px 16px;
  // margin-top: 0.5333rem;
}

.calendar {
  margin-top: 2.1333rem;

  // position: relative;
  .controllDate {
    transform: translate(20%, 100%);
    font-size: 0.5333rem;
  }
}
.icon {
  z-index: 999999;
  position: absolute;
}
.none1 {
  // display: none;
  visibility: hidden;
}
</style>
