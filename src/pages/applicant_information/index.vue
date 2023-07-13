<template>
  <div class="all">
    <div class="header">
      <t-navbar
        title="个人信息"
        :fixed="true"
        left-arrow
        @left-click="handleClick"
      />
    </div>
    <div class="contain">
      <div class="default_setting">
        <t-cell title="设为默认" hover>
          <template #note>
            <t-switch :default-value="true" />
          </template>
        </t-cell>
      </div>
      <div class="name input_item">
        <t-input label="姓名 *" placeholder="请输入您的姓名" required: true
        defaultValue="蔡宣轩" />
      </div>
      <SelectBirthday></SelectBirthday>
      <div class="phone input_item">
        <t-input
          label="手机号 *"
          placeholder="请输入您的手机号"
          defaultValue="18888888888"
        ></t-input>
      </div>
      <div class="id_card input_item">
        <t-input
          label="身份证 *"
          placeholder="请输入您的身份证"
          defaultValue=""
        ></t-input>
      </div>
      <div class="email input_item">
        <t-input
          label="邮箱"
          placeholder="请输入您的邮箱"
          defaultValue=""
        ></t-input>
      </div>
      <SelectCareer></SelectCareer>
    </div>
    <div class="row">
      <t-button size="large" theme="primary" block>确定</t-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectBirthday from './applicant_information_select_birthday/index.vue';
import SelectCareer from './applicant_information_select_career/index.vue';

//设为默认
const handleClick = () => {
  console.log('left-click');
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
