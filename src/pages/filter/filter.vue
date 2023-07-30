<template lang="">
  <div v-if="vis">
    <t-popup
      v-model="visible"
      placement="bottom"
      style="padding: 10px"
      :closeBtn="true"
      :onClosed="close"
    >
      <div class="fil_header">全部筛选</div>
      <div class="fil_content">
        <div class="fil_item">
          <div class="item_title">面向领域</div>
          <div class="item_tag">
            <t-check-tag
              v-for="item in fields"
              :key="item.id"
              variant="light-outline"
              size="large"
              :content="item.field"
              shape="round"
              class="tag"
              v-model:checked="item.checked"
            />
          </div>
        </div>
        <div class="fil_item bb">
          <div class="item_title">活动形式</div>
          <div class="item_tag">
            <t-check-tag
              v-for="item in forms"
              :key="item.id"
              variant="light-outline"
              size="large"
              :content="item.form"
              shape="round"
              class="tag"
              v-model:checked="item.checked"
            />
          </div>
        </div>
        <div class="fil_item bb">
          <div class="item_title">活动日期</div>
          <div class="item_choose" style="font-size: 14px">
            <t-calendar
              v-model:visible="dateVisible"
              :value="dateValue"
              type="range"
              @confirm="handleConfirm"
            ></t-calendar>
            <t-input v-model="date"></t-input>
            <t-button theme="primary" variant="text" @click="dateVisible = true"
              >选择日期</t-button
            >
          </div>
        </div>
        <div class="fil_item">
          <div class="item_title">价格范围(元)</div>
          <div class="item_content" style="margin-top: 10px">
            <t-slider
              range
              v-model:value="rangeValue"
              :label="true"
              show-extreme-value
              :max="max"
              :min="min"
            />
          </div>
        </div>
      </div>
      <div class="fil_footer">
        <div class="btn btn--cancel" aria-role="button" @click="onReset">
          重置
        </div>
        <div class="btn btn--confirm" aria-role="button" @click="onComplete">
          完成
        </div>
      </div>
    </t-popup>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import moment from 'moment';
import { getFields, getForms } from '../../api/filter.ts';
const max = 588;
const min = 0;
let fields = ref([]);
let forms = ref([]);

let rangeValue = ref([30, 70]);
// 弹出层的显示与隐藏
let visible = ref(true);
// 日历选择器的显示与隐藏
let dateVisible = ref(false);
const today = new Date();
const tomorrow = new Date(today.getTime() + 5 * 24 * 3600 * 1000);
const dateValue = ref([today, tomorrow]);
// 显示日期
const date = ref(moment(today).format('YYYY年M月D日'));
// 日历选择按钮的回调
const handleConfirm = (val) => {
  if (val.length === 1) {
    date.value = moment(val[0]).format('YYYY年M月D日');
  } else {
    let y1 = moment(val[0]).format('YYYY');
    let y2 = moment(val[1]).format('YYYY');
    let start = moment(val[0]).format('YYYY年M月D日');
    let end = '';

    if (y1 === y2) {
      end = moment(val[1]).format('M月D日');
    } else {
      end = moment(val[1]).format('YYYY年M月D日');
    }
    date.value = start + '-' + end;
  }
  dateVisible.value = false;
};
// 重置按钮
const onReset = () => {
  forms.value.forEach((element) => {
    element.checked = false;
  });
  fields.value.forEach((element) => {
    element.checked = false;
  });
  date.value = moment(today).format('YYYY年M月D日');
  rangeValue.value = [0, 0];
};
// 完成按钮
const onComplete = () => {
  visible.value = false;
};
const close = () => {
  $emit('changeVis', false);
};
const getData = async () => {
  let res = await getFields();
  if (res.code == 200) {
    fields.value = res.data.data;
  }
  let res1 = await getForms();
  if (res1.code === 200) {
    forms.value = res1.data.data;
  }
};
onMounted(() => {
  getData();
});
let prop = defineProps(['vis']);
let $emit = defineEmits(['changeVis']);
</script>
<style scoped lang="less">
.fil_header {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
}

.fil_content {
  margin-top: 10px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  .bb {
    border-bottom: 0.5px solid #7f7f7f7f;
  }
  .fil_item {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .item_choose {
      display: flex;
      /* padding: 0 5px; */
      align-items: center;
      :deep(.t-input) {
        padding: 8px;
      }
    }
    .item_title {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 15px;
    }
    .item_tag {
      width: 100%;
      margin-bottom: 10px;
      .tag {
        width: 30%;
        text-align: center;
        margin: 0 5px;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        margin-bottom: 13px;
      }
    }
    .item_content {
      margin-bottom: 15px;
    }
  }
}
.fil_footer {
  display: flex;
  justify-content: space-evenly;
}
.btn {
  font-size: 14px;
  padding: 10px;
  margin: 15px 0;
}

.btn--cancel {
  color: #0052d9;
  border-radius: 5px;
  width: 35%;
  text-align: center;
}

.btn--confirm {
  color: white;
  background-color: #0052d9;
  border-radius: 5px;
  width: 35%;
  text-align: center;
}
</style>
