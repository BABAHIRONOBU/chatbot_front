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
import { getCookie, setCookie } from '../helper.js'

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
      if (this.phone_number.length == 0) {
        this.invalid_msg = '전화번호를 입력해주세요';
        this.error = true;
        e.target.children[0].children[0].children[0].focus();
      }
      else if (!/^\d+$/.test(this.phone_number)) {
        this.invalid_msg = '숫자만 입력해주세요';
        this.error = true;
        e.target.children[0].children[0].children[0].focus();
      } else {
        this.invalid_msg = '';
        this.error = false;
        // api 통신 후 member_id를 쿠키에 저장해야 한다.
        setCookie('rbPNum', this.phone_number, 2);
        this.member_id = 'test';
        this.$emit('inputnumber', this.phone_number, this.member_id);
        this.phone_number = '';
      }
    }
  }
}
</script>

<style>
</style>
