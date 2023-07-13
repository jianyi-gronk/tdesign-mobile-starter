<template>
  <div class="birthday input_item">
    <t-input
      label="生日 *"
      placeholder="请输入您的生日"
      :value="pickerBirthdayValueText"
      @click="visibleBirthday = true"
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
const today = new Date();
const onChangeBirthday = (value: string) => {
  console.log('change: ', value);
};

const onPickBirthday = (value: string) => {
  console.log('pick: ', value);
};

const onCancelBirthday = () => {
  console.log('cancel');
  visibleBirthday.value = false;
};

const onConfirmBirthday = (value: string) => {
  console.log('confirm: ', value);
  pickerBirthdayValue.value = value;
  pickerBirthdayValueText.value = value;
  visibleBirthday.value = false;
};
</script>

<style scoped>
.selectorHeaderFontsize {
  font-size: 0.4267rem;
  --td-picker-button-font-size: 0.3733rem;
}
</style>
