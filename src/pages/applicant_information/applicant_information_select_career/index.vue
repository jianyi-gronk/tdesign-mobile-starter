<template>
  <div class="career input_item">
    <t-input
      label="职业"
      placeholder="请输入您的职业"
      :value="careerState.career"
      @click="careerState.show = true"
    >
      <template #suffixIcon>
        <ChevronRightIcon />
      </template>
      <template #suffix>
        <t-popup v-model="careerState.show" placement="bottom">
          <t-picker
            title="选择职业"
            class="selectorHeaderFontsize"
            v-model="careerState.career"
            :columns="careerOptions"
            @confirm="onConfirmCareer"
            @cancel="careerState.show = false"
            @pick="onPickCareer"
          />
        </t-popup>
      </template>
    </t-input>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from 'tdesign-icons-vue-next';
import { reactive } from 'vue';

//选择职业
const careerOptions = [
  [
    {
      label: '学生',
      value: '学生'
    },
    {
      label: '计算机从业者',
      value: '计算机从业者'
    },
    {
      label: '设计师/艺术从业者',
      value: '设计师/艺术从业者'
    },
    {
      label: '医务人员',
      value: '医务人员'
    },
    {
      label: '自由职业者',
      value: '自由职业者'
    }
  ]
];

const careerState = reactive({
  show: false,
  career: []
});

const emit = defineEmits<{ (event: 'confirmCareer', value: string) }>();

const onConfirmCareer = (val: string) => {
  careerState.show = false;
  emit('confirmCareer', val);
};

const onPickCareer = (value: any, context: any) => {
  console.log('pick value', value);
  console.log('context', context);
};
</script>

<style scoped>
.selectorHeaderFontsize {
  font-size: 0.4267rem;
  --td-picker-button-font-size: 0.3733rem;
}
</style>
