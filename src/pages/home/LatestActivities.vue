<template>
  <div>
    <!-- <div class="other-content" v-for="i in 10" :key="i"></div> -->
    <div class="container" style="width: 375px" @click="handleClick">
      <div class="other-content">
        <t-image
          :src="imageUrl"
          style="width: 120px; height: 120px"
          class="rounded-image"
        ></t-image>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Image from '/src/assets/Image3.png';
import { useRouter } from 'vue-router';
const imageUrl = ref(Image);
//内容跳转
const router = useRouter();
const handleClick = () => {
  router.push('/detail_page');
};
</script>
<style scoped>
.rounded-image {
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
}
.container {
  padding-top: 20px;
  width: 100%;
  /* padding-top: 20px; */
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

.sticky_ {
  position: -webkit-sticky;
  position: sticky;
  top: 194px;
  /* height: 48px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* padding-left: 16px; */
  width: 100%;
}
</style>
