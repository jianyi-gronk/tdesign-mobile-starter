<template>
  <div class="purchase">
    <!-- 点击立即购买后，请跳转到/purchaseResult 看你没写完我就不在你这乱改了 -->
    <div class="collect">
      <t-icon name="heart" size="18px" />
      <span class="collect_text">收藏</span>
    </div>
    <div class="share">
      <t-icon name="share" size="18px" />
      <span class="share_text">分享</span>
    </div>
    <t-button size="large" theme="primary" @click="hanleclick"
      >立即购买 ￥88-￥228</t-button
    >
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
function hanleclick() {
  router.push('/orderConfirm');
}
</script>

<style scoped lang="less">
.purchase {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 375px;
  height: 80px;
  opacity: 1;
  background: rgb(255, 255, 255);
  z-index: 3;
}
.collect,
.share {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50px;
  height: 48px;
  font-size: 12px;
}
</style>
