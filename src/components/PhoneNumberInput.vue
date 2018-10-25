<template>
  <div class="brs-phone-card-wrapper">
    <div class="brs-phone-card">
      <div class="brs-phone"><span>전화번호</span></div>
      <form @submit.prevent="submit" class="brs-phone-form">
        <div class="brs-phone-input-wrapper" style="border-color: rgb(10, 91, 255);">
          <div class="brs-phone-input" :class="status">
            <input type="text" v-model="phone_number" @focus="activeOn()" @blur="activeOff()">
          </div>
          <div v-if="error" class="brs-phone-invalid">{{invalid_msg}}</div>
        </div>
        <button type="submit" style="background-color: rgb(10, 91, 255); color: rgb(255, 255, 255);"><span>전송</span></button>
      </form>
    </div>
  </div>
</template>

<script>
import URLS from '../urls.js'

export default {
  name: 'PhoneNumberInput',
  data() {
    return {
      status: { active: false },
      error: false,
      invalid_msg: '',
      phone_number: '',
      member_id: ''
    }
  },
  methods: {
    activeOn: function() {
      this.status.active = true;
    },
    activeOff: function() {
      this.status.active = false;
      this.invalid_msg = '';
      this.error = false;
    },
    submit: function(e) {
      if (this.emptyNumber()) {
        this.invalid_msg = '전화번호를 입력해주세요';
        this.error = true;
        e.target.children[0].children[0].children[0].focus();
      }
      else if (this.notValidNumber()) {
        this.invalid_msg = '숫자만 입력해주세요';
        this.error = true;
        e.target.children[0].children[0].children[0].focus();
      } else {
        this.validNumber();
      }
    },
    emptyNumber: function() {
      return this.phone_number.length == 0
    },
    notValidNumber: function() {
      return !/^\d+$/.test(this.phone_number)
    },
    validNumber: function() {
      var query = {src_name: 'blackrubydev_1539854240937634', cellphone: this.phone_number}
      console.log(query);
      this.$axios.get(URLS.MEMBER_ID, {
        params: query
      })
      .then((response) => {
        console.log(response);
        if (response.data.customers.length) {
          this.invalid_msg = '';
          this.error = false;
          this.member_id = response.data.customers[0].member_id;
          this.$emit('inputnumber', this.member_id);
        } else {
          this.invalid_msg = '존재하지 않는 회원입니다.';
          this.error = true;
        }
      })
      .catch((msg) => {
        console.log('error', msg);
        this.invalid_msg = '서버통신 에러!';
        this.error = true;
      })
      this.phone_number = '';
    },
    getMemberID: function(query) {
        this.$axios.get(URLS.MEMBER_ID, {
            params: query,
            headers: this.headers
        })
        .then((response) => {
            console.log(response);
            this.member_id = response.data.customers[0].member_id;
        })
        .catch((msg) => {
            console.log('error', msg);
        })
    }
  }
}
</script>

<style>
</style>
