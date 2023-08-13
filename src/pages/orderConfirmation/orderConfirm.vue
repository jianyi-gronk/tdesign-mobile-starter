<template>
  <div class="order-confirm">
    <Navigator></Navigator>
    <div class="order-info">
      <div class="activity-title">2021 SICC服务设计创新大会</div>
      <div class="activity-time-place">
        <t-icon name="time" class="time-place-Icon" size="14px" />
        <span class="activity-time">2021年3月16日</span>
        <t-icon name="location" class="time-place-Icon" size="14px" />
        <span class="activity-place">深圳市腾讯滨海大厦</span>
      </div>
      <div class="other-info">
        <div class="person-info">
          <div class="person-info-title">
            <span class="other-info-title">人员信息</span>
            <span class="add-person">
              <t-button size="extra-small" shape="round"
                >+ 增加人员</t-button
              ></span
            >
          </div>
          <div class="person-list">
            <t-checkbox-group
              v-model:value="personOptions"
              class="horizontal-box"
            >
              <div
                v-for="person in personList"
                :key="person.id"
                :class="`card ${
                  personOptions.indexOf(person.name) > -1
                    ? 'card--active'
                    : personOptions.indexOf(person.name)
                }`"
              >
                <t-icon
                  v-if="personOptions.indexOf(person.name) > -1"
                  name="check"
                  class="card__icon"
                  :aria-hidden="true"
                />
                <t-checkbox
                  :value="person.name"
                  :label="person.name"
                  icon="none"
                  borderless
                />
              </div>
            </t-checkbox-group>
          </div>
        </div>
        <div class="ticket-info">
          <div class="other-info-title">票类场次</div>
          <div class="ticket-list">
            <t-checkbox-group v-model:value="value">
              <div
                v-for="n in 1"
                :key="n"
                :class="`card-column ${
                  value.indexOf(n) > -1 ? 'card--active' : value.indexOf(n)
                }`"
              >
                <t-icon
                  v-if="value.indexOf(n) > -1"
                  name="check"
                  class="card__icon"
                  :aria-hidden="true"
                />
                <t-checkbox
                  :value="n"
                  label="2021年3月16日"
                  icon="none"
                  borderless
                />
              </div>
            </t-checkbox-group>
          </div>
        </div>
        <div class="ticket-price-list">
          <div class="other-info-title">票档价格</div>
          <div class="ticket-price-list">
            <t-checkbox-group v-model:value="value">
              <div
                v-for="n in 4"
                :key="n"
                :class="`card-column ${
                  value.indexOf(n) > -1 ? 'card--active' : value.indexOf(n)
                }`"
              >
                <t-icon
                  v-if="value.indexOf(n) > -1"
                  name="check"
                  class="card__icon"
                  :aria-hidden="true"
                />
                <t-checkbox
                  :value="n"
                  label="早鸟价-单人票"
                  icon="none"
                  borderless
                />
              </div>
            </t-checkbox-group>
          </div>
        </div>
      </div>
    </div>
    <div class="purchase-confirm">
      <div class="price-text">待支付:<span class="price">¥88</span></div>
      <div class="btn">
        <t-button size="large" theme="primary" block @click="goToPurchaseResult"
          >确认购买</t-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigator from './Navigator.vue';
import { ref } from 'vue';
import { Icon as TIcon } from 'tdesign-icons-vue-next';
import { useRouter } from 'vue-router';
const router = useRouter();

const personOptions = ref<Array<string>>(['蔡宣轩']);
const personList = ref([
  { id: 1, name: '蔡宣轩' },
  { id: 2, name: '蔡晓萱' }
]);
const value = ref([1, 2]);

function goToPurchaseResult() {
  router.push('/PurchaseResult');
}
</script>

<style scoped lang="less">
.font-style() {
  color: #000000e6;
  font-family: 'PingFang SC';
  text-align: left;
}

.other-info-title {
  width: 249px;
  height: 24px;
  opacity: 1;
  color: #000000e6;
  font-size: 16px;
  font-weight: 600;
  font-family: 'PingFang SC';
  text-align: left;
  line-height: 24px;
}

.order-info {
  display: inline-block;
  margin: 16px 16px 0 16px;
  width: 343px;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  .font-style();
  .activity-time-place {
    display: flex;
    align-items: center;
    margin-top: 8px;
    width: 278px;
    height: 22px;
    opacity: 1;
    color: #000000e6;
    font-size: 14px;
    font-weight: 400;
    font-family: 'PingFang SC';
    text-align: left;
    line-height: 22px;
    .activity-time {
      margin-right: 16px;
    }
    .time-place-Icon {
      margin-right: 4px;
      display: inline-block;
      color: #0052d9;
    }
  }
  .other-info {
    width: 100%;
    height: 532px;
    .person-info {
      width: 100%;
      height: 96px;
      .person-info-title {
        display: flex;
        align-items: center;
        margin-top: 16px;
        width: 100%;
        height: 28px;
      }
      .person-list {
        margin-top: 14px;
        width: 100%;
        height: 56px;
      }
    }
    .ticket-info {
      width: 100%;
      height: 92px;
      margin-top: 24px;
    }
    .ticket-price-list {
      margin-top: 24px;
    }
  }
}

//纵向多选框
.card-column {
  margin-top: 12px;
  position: relative;
  width: 100%;
  height: 58px;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  background: #ffffff;
  margin-right: 16px;
  overflow: hidden;
}

//横线多个卡片样式
.card {
  position: relative;
  width: 107px;
  height: 58px;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  background: #ffffff;
  margin-right: 16px;
  overflow: hidden;
}
.card--active {
  border-color: #0052d9;
}
.card--active::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  border: 14px solid #0052d9;
  border-bottom-color: transparent;
  border-right-color: transparent;
}
.card__icon {
  font-size: 12px;
  color: #fff;
  position: absolute;
  left: 1.5px;
  top: 1.5px;
  z-index: 1;
}
.t-checkbox {
  border-radius: 6px;
}
/* 横向布局 */
.horizontal-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.horizontal-box .card__icon {
  font-size: 12px;
}

.purchase-confirm {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 375px;
  height: 80px;
  opacity: 1;
  border-top: 1px solid #e7e7e7;
  background: #fff;
  .price-text {
    display: flex;
    align-items: center;
    width: 102px;
    height: 28px;
    color: #000000e6;
    font-size: 14px;
    font-weight: 400;
    font-family: 'PingFang SC';
    text-align: center;
    .price {
      width: 36px;
      height: 28px;
      color: #0052d9;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      line-height: 28px;
    }
  }
  .btn {
    width: 210px;
    height: 58px;
  }
}
</style>
