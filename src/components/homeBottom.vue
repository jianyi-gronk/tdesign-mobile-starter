<template>
  <div>
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

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
//标签栏
const tabValue = ref('label_1');
const tabList = ref([
  { value: 'label_1', label: '首页', icon: 'home', path: '/' },
  { value: 'label_2', label: '我的', icon: 'user', path: '/admin' }
]);
//标签栏跳转
const router = useRouter();
const handleTabClick = (value: string) => {
  if (value === 'label_1') {
    router.push('/');
    //console.log('1')
  } else if (value === 'label_2') {
    router.push('/admin');
    //console.log('2')
  }
};
</script>

<style scoped></style>
