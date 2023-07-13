<template>
    <div class="all">
        <div class="header">
            <t-navbar title="个人信息" :fixed="true" left-arrow @left-click="handleClick" />
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
                <t-input label="姓名 *" placeholder="请输入您的姓名" required: true defaultValue="蔡宣轩" />
            </div>
            <div class="birthday input_item">
                <t-input label="生日 *" placeholder="请输入您的生日" :value="pickerBirthdayValueText"
                    @click="visibleBirthday = true">
                    <template #suffixIcon>
                        <CalendarIcon />
                    </template>
                    <template #suffix>
                        <t-popup v-model="visibleBirthday" placement="bottom">
                            <t-date-time-picker class="selectorHeaderFontsize" :value="pickerBirthdayValue" :mode="['date']"
                                title="选择生日" start="1900-1-1" :end="today" format="YYYY-MM-DD" @change="onChangeBirthday"
                                @pick="onPickBirthday" @confirm="onConfirmBirthday" @cancel="onCancelBirthday" />
                        </t-popup>
                    </template>
                </t-input>
            </div>
            <div class="phone input_item">
                <t-input label="手机号 *" placeholder="请输入您的手机号" defaultValue="18888888888"></t-input>
            </div>
            <div class="id_card input_item">
                <t-input label="身份证 *" placeholder="请输入您的身份证" defaultValue=""></t-input>
            </div>
            <div class="email input_item">
                <t-input label="邮箱" placeholder="请输入您的邮箱" defaultValue=""></t-input>
            </div>
            <div class="career input_item">
                <t-input label="职业" placeholder="请输入您的职业" :value="careerState.career" @click="careerState.show = true">
                    <template #suffixIcon>
                        <ChevronRightIcon />
                    </template>
                    <template #suffix>
                        <t-popup v-model="careerState.show" placement="bottom">
                            <t-picker title="选择职业" class="selectorHeaderFontsize" v-model="careerState.career"
                                :columns="careerOptions" @confirm="onConfirmCareer" @cancel="careerState.show = false"
                                @pick="onPickCareer" />
                        </t-popup>
                    </template>
                </t-input>
            </div>
        </div>
        <div class="row">
            <t-button size="large" theme="primary" block>确定</t-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { CalendarIcon, ChevronRightIcon } from 'tdesign-icons-vue-next';
//设为默认
const handleClick = () => {
    console.log('left-click');
};

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

const onConfirmCareer = (val: string[], context: number[]) => {
    console.log(val);
    console.log('context', context);
    careerState.show = false;
};

const onPickCareer = (value: any, context: any) => {
    console.log('pick value', value);
    console.log('context', context);
};
</script>

<style lang="less" scoped>
.selectorHeaderFontsize {
    font-size: 0.4267rem;
    --td-picker-button-font-size: 0.3733rem;
}

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
