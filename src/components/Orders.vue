<template>
  <div>
    <div class="brs-card-contents" v-for="(order, index) in orders" :key="index">
      <div class="brs-card-header">
        <span class="brs-order-date">{{ new Date(order.order_date).toLocaleDateString() }}</span> / <span class="brs-order-id">{{ order.order_id }}</span>
      </div>
      <div class="brs-card-main" v-for="(item, index) in order.order_items" :key="index">
        <div class="brs-card-main-content">
          <div class="brs-card-item-img">
            <img :src='item.z_product_image_url.small_image' :alt='decodeUTF8(item.product_name)' width="100" height="auto">
          </div>
          <div class="brs-card-item-desc">
            <div class="brs-prod-desc">
              <div class="brs-prod-info brs-prod-name">{{ decodeUTF8(item.product_name) }}</div>
              <div class="brs-prod-info"><span class="brs-prod-price">{{ priceFormat(item.product_price) }}원</span> <span class="brs-prod-quantity">/ {{ item.quantity }}개</span></div>
              <div class="brs-prod-info brs-prod-opti개on">옵션: {{ item.z_option.option_value || '-' }}</div>
            </div>

            <div class="brs-prod-order-state">
              <a href="#"><button type="button">{{ order_status[item.order_status] }}</button></a>
            </div>
          </div>
        </div>
      </div>
      <div class="brs-card-footer">
        <a :href="orderDetailPage(order.order_id)"><button type="button" style="color: rgb(10, 91, 255);">상세보기 ></button></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orders',
  data() {
    return {
      order_status: {
        N00: '입금전',
        N10: '상품 준비중',
        N20: '배송 준비중',
        N21: '배송대기',
        N22: '배송보류',
        N30: '배송중',
        N40: '배송완료'
      }
    }
  },
  props: {
    orders:  { type: Array, required: true }
  },
  methods: {
    priceFormat(num_str) {
      var num = Number(num_str);
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    decodeUTF8(str) {
      return unescape(str);
    },
    orderDetailPage(order_id) {
      return `/myshop/order/detail.html?order_id=${order_id}`
    }
  }
}
</script>

<style>
</style>
