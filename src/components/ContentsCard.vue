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
.brs-contents-card {
  width: 90%;
  margin: 0 auto;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
  background-color: #fff;
  margin-bottom: 2rem;
}
.brs-card-head {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: .75rem 1rem;
  font-size: .75rem;
  font-weight: 600;
}
.brs-card-type {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.brs-card-type i {
  width: 15px;
  height: 15px;
  fill: currentColor;
  margin-right: 1ch;
}
.brs-card-body {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, .1);
}
.brs-card-body .brs-card-main {
  margin: 1rem;
  margin-bottom: 1.5rem;
}
.brs-card-body .brs-card-main .brs-card-main-content {
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  display: -ms-flexbox;
  display: flex;
}
.brs-card-body .brs-card-main .brs-card-main-content .brs-order-items {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 400;
}
.brs-card-body .brs-card-main .brs-card-main-content .brs-order-items i {
  -ms-flex-shirink: 0;
  flex-shrink: 0;
  font-size: 18px;
  color: rgb(211, 211, 211);
}
.brs-card-body .brs-card-main .brs-card-main-content .brs-order-items span {
  font-size: 1rem;
  margin-left: 1ch;
}
.brs-card-body .brs-card-sub {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  /* margin-top: 1.2rem; */
  margin-bottom: .5rem;
  margin-right: 1rem;
  margin-left: 1rem;
  font-weight: 600;
  font-size: .75rem;
  text-transform: uppercase;
}
.brs-card-body .brs-card-sub button {
  text-transform: none;
  font-size: .875rem;
  font-weight: 400;
  display: block;
  padding: 0;
  margin: 0;
  border: 2px solid transparent;
  border-bottom: 1px solid transparent;
  background-color: transparent;
  background-image: none;
  -webkit-appearance: none;
  cursor: pointer;
}
.brs-card-body .brs-card-sub button:hover {
  border-bottom-color: currentColor;
}
.brs-card-info-wrapper {
  position: relative;
  padding-bottom: 1px;
}
.brs-card-info-wrapper .brs-card-info {
  margin-bottom: -1px;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: .875rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: .6875rem;
  text-align: center;
}
.brs-card-info-wrapper .brs-card-info .brs-card-info-type {
  font-weight: 500;
  color: #9a9a9a;
}
.brs-card-info-wrapper .brs-card-info .brs-card-info-content {
  margin-left: 1ch;
  color: #000;
}
.brs-card-select {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: flex-end;
  padding: .5rem;
  background-color: #fafafa;
}
.brs-card-select button {
  text-transform: none;
  font-size: .875rem;
  font-weight: 400;
  border: 2px solid transparent;
  border-bottom: 1px solid transparent;
  display: block;
  padding: 0;
  margin: 0;
  background-color: transparent;
  background-image: none;
  -webkit-appearance: none;
  cursor: pointer;
}
.brs-card-select button:hover {
  border-bottom-color: currentColor;
}
</style>