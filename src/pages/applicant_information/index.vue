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
      <div class="input_item">
        <t-input label="姓名 *" v-model="personalInfo.name"
        placeholder="请输入您的姓名" required: true />
      </div>
      <!-- 选择生日 -->
      <SelectBirthday @confirmBirthday="addBirthday"></SelectBirthday>
      <!-- 输入手机号 -->
      <div class="input_item">
        <t-input
          label="手机号 *"
          placeholder="请输入您的手机号"
          v-model="personalInfo.phone"
        ></t-input>
      </div>
      <!-- 输入身份证 -->
      <div class="input_item">
        <t-input
          label="身份证 *"
          placeholder="请输入您的身份证"
          v-model="personalInfo.idCard"
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
import { reactive } from 'vue';

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
  console.log(personalInfo);
};
</script>

<style lang="less" scoped>
.all {
  .header {
    height: 1.28rem;
  }
  .contain {
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
      //   --td-cell-vertical-padding: 0.4267rem 0;
    }
    .input_item {
      --td-input-vertical-padding: 0.4267rem 0.4267rem;
      //   --td-spacer-2: 1.3067rem;
      /deep/ .t-input__wrap--prefix {
        width: 2.16rem;
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
