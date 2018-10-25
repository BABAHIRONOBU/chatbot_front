<template>
  <div class="brs-card">
    <div class="brs-card-wrapper">
      <div class="brs-card-head" style="background-color: rgb(10, 91, 255); color: rgb(255, 255, 255);">
        <div class="brs-card-type">
          <i><font-awesome-icon icon="truck"></font-awesome-icon></i>
          <span>주문/배송 조회</span>
        </div>
      </div>
      <div class="brs-card-body">
        <orders v-if="contents_type === 'orders'" :orders="data.orders"></orders>
        <!-- <div class="brs-card-main">
          <div class="brs-card-main-content">
            <div class="brs-order-items">
              <i><font-awesome-icon icon="archive"></font-awesome-icon></i>
              <span>{{content.name}}</span>
            </div>
          </div>
        </div> -->
        <!-- <div class="brs-card-sub">
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
        </div> -->
        <!-- <div class="brs-card-select">
          <button type="button" style="color: rgb(10, 91, 255);">선택</button>
        </div> -->
      </div>
    </div>
    <div class="brs-card-more">
      <button type="button" @click="more()">더 보기</button>
    </div>
  </div>
</template>

<script>
import Orders from './Orders.vue'

export default {
  name: 'contents-card',
  components: { Orders },

  props: {
    contents_type: { type: String, required: true },
    data: { type: Object, required: true }
  }
}
</script>

<style>
</style>