<template>
  <div class="brs-message brs-end-user">
      <div class="brs-message-container">
          <div class="brs-chats">
              <div v-for="(chat, index) in chats" :key="index" class="brs-chat brs-user" :title="chat.time" style="color: rgb(255, 255, 255); background-color: rgb(10, 91, 255);">{{chat.message}}</div>
          </div>
          <div class="brs-chat-time">{{minute_time_str}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'user-chat',
  data() {
      return {
          chats: this.messages,
          minute_time: this.minute
      }
  },
  computed: {
      minute_time_str: function() {
          return this.minute_time.toLocaleTimeString().split(':').slice(0, 2).join(':');
      }
  },
  props: {
      messages: { type: Array, required: true },
      minute: { type: Date, required: true }
  }
}
</script>

<style>
</style>