<template>
  <div class="all">
    <!-- 个人信息页面头部 -->
    <div class="header">
      <t-navbar
        title="个人信息"
        :fixed="true"
        left-arrow
        @left-click="handleReturnClick"
      />
    </div>
    <!-- 主要信息模块 -->
    <div class="contain">
      <!-- 将该个人信息设置为默认信息 -->
      <div class="default_setting">
        <t-cell title="设为默认" hover>
          <template #note>
            <t-switch
              :default-value="personalInfo.defaultState"
              @click="changeDefaultState"
            />
          </template>
        </t-cell>
      </div>
      <!-- 输入姓名 -->
      <div class="name input_item myRequired">
        <t-input
          label="姓名 "
          v-model="personalInfo.name"
          placeholder="请输入您的姓名"
          ref="nameRef"
        />
      </div>
      <!-- 选择生日 -->
      <SelectBirthday
        @confirmBirthday="addBirthday"
        ref="birthdayRef"
      ></SelectBirthday>
      <!-- 输入手机号 -->
      <div class="phone input_item myRequired">
        <t-input
          label="手机号 "
          placeholder="请输入您的手机号"
          maxlength="11"
          v-model="personalInfo.phone"
          ref="phoneRef"
        ></t-input>
      </div>
      <!-- 输入身份证 -->
      <div class="idCard input_item myRequired">
        <t-input
          label="身份证 "
          placeholder="请输入您的身份证"
          maxlength="18"
          v-model="personalInfo.idCard"
          ref="idCardRef"
        ></t-input>
      </div>
      <!-- 输入邮箱 -->
      <div class="input_item">
        <t-input
          label="邮箱"
          placeholder="请输入您的邮箱"
          v-model="personalInfo.email"
        ></t-input>
      </div>
      <!-- 选择职业 -->
      <SelectCareer @confirmCareer="addCareer"></SelectCareer>
    </div>
    <!-- 确认提交个人信息按钮 -->
    <div class="row">
      <t-button size="large" theme="primary" block @click="submitInfo"
        >确定</t-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectBirthday from './applicant_information_select_birthday/index.vue';
import SelectCareer from './applicant_information_select_career/index.vue';
import { ref, reactive } from 'vue';
import { Message } from 'tdesign-mobile-vue';

// 个人信息
const personalInfo = reactive({
  defaultState: true,
  name: '',
  birthday: '',
  phone: '',
  idCard: '',
  email: '',
  career: ''
});

// 返回按钮事件
const handleReturnClick = () => {
  console.log('返回按钮事件');
};

// 改变默认设置事件
const changeDefaultState = () => {
  personalInfo.defaultState = !personalInfo.defaultState;
};

// 保存选择生日子组件传来的值
const addBirthday = (value: any) => {
  personalInfo.birthday = value;
};

// 保存选择职业子组件传来的值
const addCareer = (value: any) => {
  personalInfo.career = value;
};

// 提交信息事件
const submitInfo = () => {
  checkIdCard();
  checkPhone();
  checkBirthday();
  checkName();
  console.log(personalInfo);
};

// 错误信息提醒
const showMessage = (
  theme: string,
  content = '这是一条普通通知信息',
  duration = 5000
) => {
  if (Message[theme]) {
    Message[theme]({
      offset: [10, 16],
      content,
      duration,
      icon: true,
      zIndex: 20000,
      context: document.querySelector('.name')
    });
  }
};

const showErrorMessage = (msg: string) => showMessage('error', msg);

// 检查姓名
const nameRef = ref<HTMLElement | null>(null);
const checkName = () => {
  if (personalInfo.name === '') {
    showErrorMessage('姓名为必填项，请输入您的姓名！');
    nameRef.value && nameRef.value.focus();
  }
};

// 检查生日
const birthdayRef = ref<InstanceType<typeof SelectBirthday>>();
const checkBirthday = () => {
  if (personalInfo.birthday === '') {
    showErrorMessage('生日为必填项，请选择您的生日！');
    // 未选择生日，打开生日选择器
    if (birthdayRef.value && personalInfo.name !== '') {
      birthdayRef.value.setVisibleBirthday(true);
    }
  }
};

// 检查手机号
const phoneRef = ref<HTMLElement | null>(null);
const checkPhone = () => {
  if (!/^1\d{10}$/.test(personalInfo.phone)) {
    if (personalInfo.phone === '') {
      showErrorMessage('手机号为必填项，请输入您的手机号！');
    } else {
      showErrorMessage('请输入正确的手机号！');
    }
    phoneRef.value && phoneRef.value.focus();
  }
};

// 检查身份证
const idCardRef = ref<HTMLElement | null>(null);
const checkIdCard = () => {
  if (!/^\d{18}$/.test(personalInfo.idCard)) {
    if (personalInfo.idCard === '') {
      showErrorMessage('身份证为必填项，请输入您的身份证！');
    } else {
      showErrorMessage('请输入正确的身份证！');
    }
    idCardRef.value && idCardRef.value.focus();
  }
};
</script>

<style lang="less" scoped>
.all {
  .header {
    height: 1.28rem;
  }
  .contain {
    margin-top: 1.28rem;
    font-size: 0.4267rem;
    color: #000000;
    font-weight: 400;
    font-family: 'PingFang SC';
    .default_setting {
      height: 1.4933rem;
      --td-cell-line-height: 1.4933rem;
      .t-cell--middle {
        padding: 0 0.4267rem;
      }
    }
    .input_item {
      --td-input-vertical-padding: 0.4267rem 0.4267rem;
      :deep(.t-input__wrap--prefix) {
        width: 2.16rem;
      }
    }
    .myRequired {
      :deep(.t-input__label)::after {
        content: '*';
        color: red;
      }
    }
  }
  .row {
    margin: 0.4267rem;
    position: fixed;
    width: 9.1467rem;
    bottom: 0;
  }
}
</style>
