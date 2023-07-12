<template>
  <t-navbar title="选择城市" :fixed="false" left-arrow> </t-navbar>
  <div class="location">
    <t-navbar :fixed="false">
      <template #left>
        <t-icon name="location" size="0.54rem"></t-icon>
        <span class="custom-title">深圳市</span>
      </template>
      <template #right>
        <div class="updateLocation">更新定位</div>
      </template>
    </t-navbar>
  </div>
  <div class="component-wrap">
    <t-indexes @change="change">
      <template v-for="item in list" :key="item.index">
        <t-indexes-anchor :index="item.index">
          <div
            :class="[
              'capsule',
              item.index === curIndex ? 'capsule--active' : ''
            ]"
          >
            {{ item.index }}
          </div>
        </t-indexes-anchor>
        <t-cell-group>
          <t-cell
            v-for="(val, i) in item.children"
            :key="i"
            :title="val"
            style="font-size: 0.4267rem"
          />
        </t-cell-group>
      </template>
    </t-indexes>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
const curIndex: Ref<number | string> = ref('');
const change = (index: number | string) => {
  curIndex.value = index;
};
const list = [
  {
    index: '热门城市',
    children: ['北京', '上海']
  },
  {
    index: 'A',
    children: [
      '阿坝',
      '阿拉善',
      '阿里',
      '安康',
      '安庆',
      '鞍山',
      '安顺',
      '安阳',
      '澳门'
    ]
  },
  {
    index: 'B',
    children: [
      '北京',
      '白银',
      '保定',
      '宝鸡',
      '保山',
      '包头',
      '巴中',
      '北海',
      '蚌埠',
      '本溪',
      '毕节',
      '滨州',
      '百色',
      '亳州'
    ]
  },
  {
    index: 'C',
    children: [
      '重庆',
      '成都',
      '长沙',
      '长春',
      '沧州',
      '常德',
      '昌都',
      '长治',
      '常州',
      '巢湖',
      '潮州',
      '承德',
      '郴州',
      '赤峰',
      '池州',
      '崇左',
      '楚雄',
      '滁州',
      '朝阳'
    ]
  },
  {
    index: 'D',
    children: [
      '大连',
      '东莞',
      '大理',
      '丹东',
      '大庆',
      '大同',
      '大兴安岭',
      '德宏',
      '德阳',
      '德州',
      '定西',
      '迪庆',
      '东营'
    ]
  },
  {
    index: 'E',
    children: ['鄂尔多斯', '恩施', '鄂州']
  },
  {
    index: 'F',
    children: ['福州', '防城港', '佛山', '抚顺', '抚州', '阜新', '阜阳']
  },
  {
    index: 'G',
    children: [
      '广州',
      '桂林',
      '贵阳',
      '甘南',
      '赣州',
      '甘孜',
      '广安',
      '广元',
      '贵港',
      '果洛'
    ]
  },
  {
    index: 'J',
    children: [
      '揭阳',
      '吉林',
      '晋江',
      '吉安',
      '胶州',
      '嘉兴',
      '济南',
      '鸡西',
      '荆州',
      '江门',
      '基隆'
    ]
  },
  {
    index: 'K',
    children: ['昆明', '开封', '康定', '喀什']
  }
];
const indexList = list.map((item) => item.index);
</script>
<style scoped lang="less">
.location {
  .custom-title {
    font-size: 0.5rem;
    margin-left: 5px;
  }
  .updateLocation {
    text-align: center;
    width: 2.8rem;
    height: 0.9rem;
    line-height: 0.9rem;
    background-color: #e8e8e8;
    font-size: 0.5rem;
    font-weight: 700;
    border-radius: 10%;
    color: #181818;
  }
}
.component-wrap {
  height: calc(100vh - 50px);
  margin-top: 10px;
}
.capsule--active {
  background: #f3f3f3;
  // border: 1px solid #e7e7e7;
  color: #3e3e3e;
  // text-indent: 2px;
  overflow: hidden;
}
.capsule {
  // margin-left: 10px;
  text-indent: 10px;
  background: #f3f3f3;
}
:deep(.t-indexes__sidebar) {
  transform: translateY(-40%);
}
</style>
