<template>
  <!-- 选择生日 -->
  <div class="birthday input_item myRequired">
    <t-input
      label="生日 "
      placeholder="请输入您的生日"
      :value="pickerBirthdayValueText"
      @click="visibleBirthday = true"
      readonly
    >
      <template #suffixIcon>
        <CalendarIcon />
      </template>
      <template #suffix>
        <t-popup v-model="visibleBirthday" placement="bottom">
          <t-date-time-picker
            class="selectorHeaderFontsize"
            :value="pickerBirthdayValue"
            :mode="['date']"
            title="选择生日"
            start="1900-1-1"
            :end="today"
            format="YYYY-MM-DD"
            @change="onChangeBirthday"
            @pick="onPickBirthday"
            @confirm="onConfirmBirthday"
            @cancel="onCancelBirthday"
          />
        </t-popup>
      </template>
    </t-input>
  </div>
</template>

<script setup lang="ts">
import { CalendarIcon } from 'tdesign-icons-vue-next';
import { ref } from 'vue';

//选择生日
const visibleBirthday = ref(false);
const pickerBirthdayValue = ref('2000-1-1');
const pickerBirthdayValueText = ref('');
const today = new Date().getTime();

const onChangeBirthday = (value: string) => {
  console.log('change: ', value);
};

const onPickBirthday = (value: string) => {
  console.log('pick: ', value);
};

//取消选择
const onCancelBirthday = () => {
  console.log('cancel');
  visibleBirthday.value = false;
};

//向父组件传值
const emit = defineEmits<{
  (event: 'confirmBirthday', value: string): void;
}>();

const onConfirmBirthday = (value: string) => {
  pickerBirthdayValue.value = value;
  pickerBirthdayValueText.value = value;
  visibleBirthday.value = false;
  emit('confirmBirthday', value);
};

// 未选择生日，打开生日选择器
const setVisibleBirthday = (value: boolean) => {
  visibleBirthday.value = value;
};

defineExpose({
  setVisibleBirthday
});
</script>

<style scoped>
.selectorHeaderFontsize {
  font-size: 0.4267rem;
  --td-picker-button-font-size: 0.3733rem;
}
</style>
