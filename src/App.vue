<template>
  <!-- <div class="header">
    <button @click="toPagePath('/applicant_information')">报名信息页</button>
  </div> -->
  <router-view></router-view>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
// import { useRouter } from 'vue-router';
// const router = useRouter();
// const toPagePath = (url: string) => {
//   router.push({
//     path: url,
//   });
// };
</script>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
