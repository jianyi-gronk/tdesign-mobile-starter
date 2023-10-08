<template>
  <div class="purchase">
    <!-- <div> -->
    <!-- 点击立即购买后，请跳转到/purchaseResult 看你没写完我就不在你这乱改了 -->
    <t-button size="large" theme="primary" @click="handlePurchase"
      >立即购买 ￥88-￥228
    </t-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const handlePurchase = () => {
  console.log(1111);
  router.push('/purchaseResult');
};
</script>

<style scoped lang="less">
.purchase {
  width: 10rem;
  height: 2.1333rem;
  opacity: 1;
  background: rgb(201, 255, 192);
}
</style>
