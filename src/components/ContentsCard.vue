<template>
  <div class="brs-contents-card">
    <div class="brs-card-head" style="background-color: rgb(10, 91, 255); color: rgb(255, 255, 255);">
      <div class="brs-card-type">
        <i><font-awesome-icon icon="truck"></font-awesome-icon></i>
        <span>주문 / 배송</span>
      </div>
    </div>
    <div class="brs-card-body" v-for="(content, index) in contents" :key="index">
      <div class="brs-card-main">
        <div class="brs-card-main-content">
          <div class="brs-order-items">
            <i><font-awesome-icon icon="archive"></font-awesome-icon></i>
            <span>{{content.name}}</span>
          </div>
        </div>
      </div>
      <div class="brs-card-sub">
        <span>주문 정보</span>
        <button style="text-align: right; color: rgb(10, 91, 255)">{{content.order_id}}</button>
      </div>
      <div class="brs-card-info-wrapper">
        <div class="brs-card-info">
          <div class="brs-card-info-contents">
            <span class="brs-card-info-type">주문일</span>
            <span class="brs-card-info-content">{{content.order_date.toLocaleDateString()}}</span>
          </div>
        </div>
        <div class="brs-card-info">
          <div class="brs-card-info-contents">
            <span class="brs-card-info-type">주문금액</span>
            <span class="brs-card-info-content">{{content.order_price_amount}}</span>
          </div>
        </div>
        <div class="brs-card-info">
          <div class="brs-card-info-contents">
            <span class="brs-card-info-type">배송상태</span>
            <span class="brs-card-info-content">{{content.order_state}}</span>
          </div>
        </div>
      </div>
      <div class="brs-card-select">
        <button type="button" style="color: rgb(10, 91, 255);">선택</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contents-card',
  data() {
    return {
      contents_type: 'orders',
      contents: [
        {
          name: '개구리 맨투맨 외 1건',
          order_id: '20170710-0000013',
          order_date: new Date(),
          order_price_amount: '21,000원',
          order_state: '배송중'
        },
        {
          name: '개구리 맨투맨 외 1건',
          order_id: '20170710-0000013',
          order_date: new Date(),
          order_price_amount: '21,000원',
          order_state: '배송중'
        },
        {
          name: '개구리 맨투맨 외 1건',
          order_id: '20170710-0000013',
          order_date: new Date(),
          order_price_amount: '21,000원',
          order_state: '배송중'
        }
      ]
    }
  }
}
</script>

<style>
</style>