<template>
  <div
    class="container"
    style="width: 375px; display: flex"
    @click="handleClick"
  >
    <div class="other-content" style="display: flex; align-items: flex-start">
      <div>
        <t-image
          :src="imageUrl"
          style="width: 120px; height: 120px"
          class="rounded-image"
        ></t-image>
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          margin-left: 16px;
          align-items: start;
        "
      >
        <div class="sicc" style="margin-top: 16px">
          2021 SICC服务设计创新大会
        </div>
        <div class="rate-demo-cell rate-demo-cell--space">
          <!-- <div class="rate-demo-cell__label">带描述评分</div> -->
          <t-rate
            v-model="value3"
            show-text
            variant="filled"
            size="20px"
            allowHalf
            gap="6.4"
            disabled="true"
          />
        </div>
        <div style="margin-top: 20px">免费活动</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Image from '/src/assets/Image2.png';
import { useRouter } from 'vue-router';
//import router from '../../router';
const imageUrl = ref(Image);
const value3 = ref(4.5);
//内容跳转
const router = useRouter();
const handleClick = () => {
  router.push('/eventDetails');
};
</script>
<style scoped>
.summary {
  margin-top: 8px;
  font-size: 14px;
  white-space: pre-line;
  color: rgba(0, 0, 0, 0.6);
  line-height: 22px;
}
.rate-demo-cell {
  --td-rate-text-font-size: 12px;
  --td-rate-icon-scale: 1;
  background-color: #fff;
  padding: 0px 0px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  &__label {
    font-size: 16px;
    margin-right: 16px;
    min-width: 80px;
  }

  &--space {
    margin-bottom: 16px;
  }
}
.sicc {
  width: 181px;
  height: 22px;
  opacity: 1;
  color: #000000e6;
  font-size: 14px;
  font-weight: 400;
  font-family: 'PingFang SC';
  text-align: left;
  line-height: 22px;
}
.rounded-image {
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
}
.container {
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.other-content {
  /* z-index: 1000; */
  width: 343px;
  height: 120px;
  border-radius: 9px;
  opacity: 1;
  background: #fff;
  box-shadow: 0 6px 30px 5px #0000000d, 0 16px 24px 2px #0000000a,
    0 8px 10px -5px #00000014;
  margin-bottom: 20px;
}
</style>
