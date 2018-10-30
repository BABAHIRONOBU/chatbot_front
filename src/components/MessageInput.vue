<template>
  <div class="brs-messages-footer">
      <div class="brs-composer">
          <div class="brs-flex-column">
              <div class="brs-input-wrapper">
                  <!-- placeholder에 뭐라고 쓰면 좋을까? -->
                  <textarea v-model="input_message" @keyup="resize" @keydown="inputHandler" placeholder="Leave a message for BRS Chatbot" class="brs-input" style="height: 35px; overflow-y: hidden;" :disabled="disabled"></textarea>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'message-input',
  data: function() {
      return {
          input_message: '',
          max_height: 73
      }
  },
  props: {
      disabled: { type: Boolean, required: true }
  },
  methods: {
      inputHandler: function(e) {
          if (e.keyCode === 13 && !e.shiftKey) {
              e.preventDefault();
              this.input();
          }
          this.resize(e);
      },
      input() {
          // '\n'만 있을 경우에도 입력 안되게 해야함. 비속어 걸러주는 것도 있으면 좋을 것 같음.
          // 조건을 만족할 때만 입력 버튼이 생기면 더 멋질 것 같다.
          if (this.input_message.trim()) {
              this.$emit('inputmessage', this.input_message);
              this.input_message = '';
          }
      },
      resize: function(e) {
          var textarea = e.target;
          if ((2 + textarea.scrollHeight) <= this.max_height) {
              textarea.style.overflowY = 'hidden';
              textarea.style.height = '0';
              textarea.style.height = (2 + textarea.scrollHeight) + 'px';
          } else {
              textarea.style.overflowY = 'visible';
              textarea.scrollTop = textarea.scrollHeight;
          }
      }
  }
}
</script>

<style>
</style>