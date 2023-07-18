<template>
  <div class="card-contianer">
    <div class="card-picture">
      <!-- <img src="" alt="" /> -->
    </div>

    <div class="card-content">
      <div class="card-content-header">我是哦啊实打实的</div>
      <div class="card-content-rate">
        <t-rate v-model="rate" variant="filled" show-text disabled size="16" />
      </div>
      <div class="card-content-bottom">sadasfaFsasf</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const rate = ref(4);
</script>
<style scoped>
.card-contianer {
  width: 343px;
  height: 120px;
  display: flex;
  box-shadow: 0 6px 30px 5px #0000000d, 0 16px 24px 2px #0000000a,
    0 8px 10px -5px #00000014;
  opacity: 1;
  border-radius: 0.2rem;
}
.card-picture {
  width: 120px;
  height: 120px;
  background-color: red;
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.card-content {
  width: 223px;
  height: 120px;
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0 12px 16px;
}
.card-content-header {
  height: 22px;
  font-size: 14px;
  font-weight: 400;
  font-family: 'PingFang SC';
  line-height: 22px;
}
.card-content-rate {
  margin-top: -20px;
}
.card-content-bottom {
  height: 22px;
  font-size: 16px;
}

:deep(.t-rate__text--active) {
  color: #e37318;
}
:deep(.t-rate__text) {
  font-size: 12px;
}
:deep(.t-rate__icon--selected) {
  color: #e37318;
}
</style>
