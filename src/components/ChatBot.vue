<template>
<div id="brs" :style="brs_style">
      <div class="brs-chatbot-container">

          <!-- chatbot close 시작 -->
          <div v-if="!chatbot" id="brs-chatbot-close" class="brs-chatbot-close">
              <button type="button" @click="show()" style="background-color: rgb(10, 91, 255); color: rgb(255, 255, 255);">
                  <i><font-awesome-icon icon="comment-alt"></font-awesome-icon></i>
              </button>
          </div>
          <!-- chatbot close 끝 -->

          <!-- chatbot open 시작 -->
          <div v-else id="brs-chatbot-open" class="brs-chatbot-open">
              <div class="brs-messanger-content">
                  <div class="brs-messanger-header" style="background-color: rgb(10, 91, 255); color: rgb(255, 255, 255);">
                      <div class="brs-chatbot-icon-wrapper">
                          <img class="brs-chatbot-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojMDA5QThFOyIgZD0iTTUxMiwyNTZjMCwxNDEuMzg1LTExNC42MTUsMjU2LTI1NiwyNTZTMCwzOTcuMzg1LDAsMjU2UzExNC42MTUsMCwyNTYsMFM1MTIsMTE0LjYxNSw1MTIsMjU2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZDMTQzOyIgZD0iTTUxMiwzMHYzMGMwLDE2LjU2OC0xMy40MzEsMzAtMzAsMzBIMzY5LjgwN2MtNC4yMiwxNi40NDUtMTQuMjY2LDMwLjU1Mi0yNy44MDcsNDAgIGMtMTMuNTQxLTkuNDQ4LTIzLjU4Ny0yMy41NTUtMjcuODA3LTQwSDI5MmMtMTYuNTY5LDAtMzAtMTMuNDMyLTMwLTMwVjMwYzAtMTYuNTY4LDEzLjQzMS0zMCwzMC0zMGgxOTAgIEM0OTguNTY5LDAsNTEyLDEzLjQzMiw1MTIsMzB6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRkI1MDk7IiBkPSJNMzEzLjc1LDkwSDI5MmMtMTYuNTY5LDAtMzAtMTMuNDMyLTMwLTMwVjMwYzAtMTYuNTY4LDEzLjQzMS0zMCwzMC0zMGgyMS43NSAgYy0xNi41NjksMC0zMCwxMy40MzItMzAsMzB2MzBDMjgzLjc1LDc2LjU2OCwyOTcuMTgxLDkwLDMxMy43NSw5MHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGOTUwMDsiIGQ9Ik00NjIsMjQuNXYxMWMwLDEuMTA0LTAuODk2LDItMiwySDI5NGMtMS4xMDQsMC0yLTAuODk2LTItMnYtMTFjMC0xLjEwNCwwLjg5Ni0yLDItMmgxNjYgIEM0NjEuMTA0LDIyLjUsNDYyLDIzLjM5Niw0NjIsMjQuNXogTTM1OCw1Mi41aC02NGMtMS4xMDQsMC0yLDAuODk2LTIsMnYxMWMwLDEuMTA0LDAuODk2LDIsMiwyaDY0YzEuMTA0LDAsMi0wLjg5NiwyLTJ2LTExICBDMzYwLDUzLjM5NiwzNTkuMTA0LDUyLjUsMzU4LDUyLjV6IE00MDEuMjUsNTIuNWMtNC4xNDIsMC03LjUsMy4zNTgtNy41LDcuNXMzLjM1OCw3LjUsNy41LDcuNXM3LjUtMy4zNTgsNy41LTcuNSAgUzQwNS4zOTIsNTIuNSw0MDEuMjUsNTIuNXogTTM3Ny41LDUyLjVjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjVzMy4zNTgsNy41LDcuNSw3LjVzNy41LTMuMzU4LDcuNS03LjVTMzgxLjY0Miw1Mi41LDM3Ny41LDUyLjV6ICAgTTQyNSw1Mi41Yy00LjE0MiwwLTcuNSwzLjM1OC03LjUsNy41czMuMzU4LDcuNSw3LjUsNy41czcuNS0zLjM1OCw3LjUtNy41UzQyOS4xNDIsNTIuNSw0MjUsNTIuNXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0Q5RTdFQzsiIGQ9Ik00NzEsMjY2LjA0MXYxNy45MThjMCwxMy4zLTQuNDA5LDI2LjIzMi0xMi41NTcsMzYuNzQ0Yy0xOS4xMzQsMjQuNjg0LTQyLjY4NCw0NS43NzItNjkuNDYzLDYyLjA4NSAgYy03LjA0LDQ0LjAyMS0yNi4wNSw4NC4wNDUtNTMuNTgxLDExNi42NDFDMzEwLjQsNTA3LjU3NywyODMuNzE5LDUxMiwyNTYsNTEycy01NC40LTQuNDIzLTc5LjM5OS0xMi41NzIgIGMtMjcuNTMxLTMyLjU5NS00Ni41NDEtNzIuNjE5LTUzLjU4MS0xMTYuNjQxYy0yNi43NzktMTYuMzEyLTUwLjMyOS0zNy40MDEtNjkuNDYzLTYyLjA4NUM0NS40MDksMzEwLjE5MSw0MSwyOTcuMjU5LDQxLDI4My45NTkgIHYtMTcuOTE4YzAtMTMuMyw0LjQwOS0yNi4yMzIsMTIuNTU3LTM2Ljc0NEM5OC40ODEsMTcxLjM0NCwxNjcuNzM1LDEzMy4yMDYsMjQ2LDEzMC4xOTlWOTIuMTI1ICBjLTcuMjY0LTMuNjYzLTEyLjI1LTExLjE4NS0xMi4yNS0xOS44NzVDMjMzLjc1LDU5Ljk2MiwyNDMuNzEyLDUwLDI1Niw1MHMyMi4yNSw5Ljk2MiwyMi4yNSwyMi4yNSAgYzAsOC42OS00Ljk4NiwxNi4yMTItMTIuMjUsMTkuODc1djM4LjA3NGM3OC4yNjUsMy4wMDcsMTQ3LjUxOSw0MS4xNDYsMTkyLjQ0Myw5OS4wOTlDNDY2LjU5MSwyMzkuODA5LDQ3MSwyNTIuNzQxLDQ3MSwyNjYuMDQxeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzVEM0REOyIgZD0iTTI1Niw0MTdjNDguOTEsMCw5NC42MTQtMTMuNzE3LDEzMy40NzgtMzcuNTE0Yy0xLjMyMiw5LjA1OS0zLjE0OSwxNy45NTMtNS40NSwyNi42NTUgIGMtMzcuMDU3LDIzLjQwMi04MC45NiwzNi45NDYtMTI4LjAyOCwzNi45NDZjLTI0LjYyNywwLTQ4LjM4NC0zLjcxNS03MC43NS0xMC42MDZjLTcuNTY2LTIuMzMxLTE0Ljc5Myw0LjU0Mi0xMi42NjIsMTIuMTY3ICBjNS45MzgsMjEuMjUxLDEzLjcxNSw0MS40MTUsMjMuMDk4LDYwLjE4NmMtNi40NjEtMS41NjEtMTIuODI1LTMuMzY2LTE5LjA4NS01LjQwNmMtMjcuNTMxLTMyLjU5NS00Ni41MjMtNzIuNjI0LTUzLjU2Mi0xMTYuNjQ1ICBjLTI2Ljc4NC0xNi4zMTItNTAuMzQ0LTM3LjM5My02OS40ODItNjIuMDgxQzQ1LjQwOSwzMTAuMTkxLDQxLDI5Ny4yNTksNDEsMjgzLjk1OXYtMTcuOTE4YzAtMTMuMyw0LjQwOS0yNi4yMzIsMTIuNTU3LTM2Ljc0NCAgYzM0Ljk4LTQ1LjEyNSw4NC43MTItNzguMjM4LDE0MS45NjMtOTIuMTA2Yy00NS4wMTUsMTcuOTU3LTg0LjAzNSw0OS4wNjItMTEyLjk2Myw4OC45NTVDNzQuNDA5LDIzNy4zODIsNzAsMjUxLjIwNiw3MCwyNjUuNDIzICB2MTkuMTU0YzAsMTQuMjE3LDQuNDA5LDI4LjA0MSwxMi41NTcsMzkuMjc3YzI0Ljk3LDM0LjQzNCw1Ny40NjMsNjIuMzEyLDk0LjgzNSw4MC44NDdDMjAyLjE2MSw0MTIuNjg2LDIyOC41NzYsNDE3LDI1Niw0MTd6ICAgTTMzMC41LDMxMGMzNS44OTgsMCw2NS0yOS4xMDIsNjUtNjVzLTI5LjEwMi02NS02NS02NXMtNjUsMjkuMTAyLTY1LDY1UzI5NC42MDIsMzEwLDMzMC41LDMxMHogTTExNi41LDI0NSAgYzAsMzUuODk4LDI5LjEwMiw2NSw2NSw2NXM2NS0yOS4xMDIsNjUtNjVzLTI5LjEwMi02NS02NS02NVMxMTYuNSwyMDkuMTAyLDExNi41LDI0NXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzlGQUNCQTsiIGQ9Ik0yODYsMzQ1YzAsMTQuMDE5LTEzLjE3OCwyNS0zMCwyNXMtMzAtMTAuOTgxLTMwLTI1YzAtNS41MjIsNC40NzctMTAsMTAtMTBzMTAsNC40NzgsMTAsMTAgIGMwLDEuNzYzLDMuNzk2LDUsMTAsNWM2LjIwMywwLDEwLTMuMjM3LDEwLTVjMC01LjUyMiw0LjQ3OC0xMCwxMC0xMFMyODYsMzM5LjQ3OCwyODYsMzQ1eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojMTc0NTUwOyIgZD0iTTM4NS41LDI0NWMwLDMwLjM3NS0yNC42MjQsNTUtNTUsNTVzLTU1LTI0LjYyNS01NS01NWMwLTUuMjAzLDAuNzM4LTEwLjIyOSwyLjA4OC0xNWgtNDMuMTc2ICBjMS4zNSw0Ljc3MSwyLjA4OCw5Ljc5NywyLjA4OCwxNWMwLDMwLjM3NS0yNC42MjQsNTUtNTUsNTVzLTU1LTI0LjYyNS01NS01NXMyNC42MjQtNTUsNTUtNTVjMTkuMzA0LDAsMzYuMjc0LDkuOTU0LDQ2LjA4OCwyNSAgaDU2LjgyM2M5LjgxNC0xNS4wNDYsMjYuNzg0LTI1LDQ2LjA4OC0yNUMzNjAuODc2LDE5MCwzODUuNSwyMTQuNjI1LDM4NS41LDI0NXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzhCRUJEQjsiIGQ9Ik0yMjEuNSwyNDVjMCwyMi4wOTEtMTcuOTA5LDQwLTQwLDQwcy00MC0xNy45MDktNDAtNDBzMTcuOTA5LTQwLDQwLTQwUzIyMS41LDIyMi45MDksMjIxLjUsMjQ1eiAgIE0zMzAuNSwyMDVjLTIyLjA5MSwwLTQwLDE3LjkwOS00MCw0MHMxNy45MDksNDAsNDAsNDBzNDAtMTcuOTA5LDQwLTQwUzM1Mi41OTEsMjA1LDMzMC41LDIwNXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzVFRTJDNTsiIGQ9Ik0yMjEuNSwyNDVjMCwyMC4yMDYtMTQuOTg1LDM2LjkwMy0zNC40NDYsMzkuNjA3YzkuNTg4LTkuMDk0LDE1Ljc4LTIzLjQ0OCwxNS43OC0zOS42MDcgIHMtNi4xOTItMzAuNTE0LTE1Ljc4LTM5LjYwN0MyMDYuNTE1LDIwOC4wOTcsMjIxLjUsMjI0Ljc5NCwyMjEuNSwyNDV6IE0zMzYuMDU0LDIwNS4zOTNjOS41ODgsOS4wOTQsMTUuNzgsMjMuNDQ4LDE1Ljc4LDM5LjYwNyAgcy02LjE5MiwzMC41MTQtMTUuNzgsMzkuNjA3QzM1NS41MTUsMjgxLjkwMywzNzAuNSwyNjUuMjA2LDM3MC41LDI0NVMzNTUuNTE1LDIwOC4wOTcsMzM2LjA1NCwyMDUuMzkzeiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                          />
                      </div>
                      <div class="brs-chatbot-name">BRS Chatbot</div>
                      <button type="button" @click="home()"><i><font-awesome-icon icon="home"></font-awesome-icon></i></button>
                      <button type="button" @click="hide()"><i><font-awesome-icon icon="times"></font-awesome-icon></i></button>
                  </div>
                  <div class="brs-conversation">
                      <div class="brs-messages" style="background-color: rgb(255, 255, 255);">
                          <div class="brs-messages-content-wrapper">
                              <div v-for="(speaker, index) in conversation" :key="index" style="position: relative;">
                                  <template v-if="speaker.bot">
                                      <bot-chat :messages="speaker.chats" :minute="speaker.minute_time"></bot-chat>
                                      <!-- <question-selects v-if="speaker.question" @selectquestion="selectQuestion"></question-selects> -->
                                      <contents-card></contents-card>
                                  </template>
                                  <!-- <bot-chat v-if="speaker.bot" :messages="speaker.chats" :minute="speaker.minute_time"></bot-chat> -->
                                  <user-chat v-else :messages="speaker.chats" :minute="speaker.minute_time"></user-chat>
                              </div>
                          </div>
                      </div>
                      <message-input @inputmessage="inputMessage"></message-input>
                  </div>
              </div>
          </div>
          <!-- chatbot open 끝 -->
      </div>
  </div>
</template>

<script>
import BotChat from './BotChat.vue'
import UserChat from './UserChat.vue'
import MessageInput from './MessageInput.vue'
import QuestionSelects from './QuestionSelects.vue'
import ContentsCard from './ContentsCard.vue'

export default {
  name: 'chat-bot',
  components: {BotChat, UserChat, MessageInput, QuestionSelects, ContentsCard},
  data() {
        return {
            chatbot: false,
            brs_style: 'width: 76px !important; height: 76px !important; bottom: 24px; right: 24px;',
            bot_chat_types: {
                plain_type: {
                    joined_msg_list: [
                        '아직 챗팅으로 대화할 수 없습니다.;홈 버튼을 눌러 다시 시작해 주세요.'
                    ],
                    question: false,
                    orders: false,
                    order_items: false
                },
                question_type: {
                    joined_msg_list: [
                        '고객님, 무엇을 도와 드릴까요?',
                        '고객님이 필요한 정보를 찾아드리겠습니다.;아래의 유형 중 하나를 선택해주세요.',
                        '24시간 쉬지 않고 최선을 다 하는 브루스 챗봇입니다.;어떤 도움이 필요하신가요?',
                        '저는 고객님들의 보다 더 편한 쇼핑몰 사용을 도와드리고 있는 브루스 챗봇입니다.;언제든 필요하면 불러주세요.^^;무엇을 도와 드릴까요?'
                    ],
                    question: true,
                    orders: false,
                    order_items: false
                },
                orders_type: {
                    joined_msg_list: [
                        '주문 내역 조회 결과입니다.;아직 서버와의 통신이 이루어 지지 않아 데이터가 없습니다.;처음으로 돌아가시려면 홈 버튼을 눌러주세요.'
                    ],
                    question: false,
                    orders: true,
                    order_items: false
                },
                order_items_type: {
                    joined_msg_list: [
                        '주문 상세 내역입니다.'
                    ],
                    question: false,
                    orders: false,
                    order_items: true
                }
            },
            conversation: [{
                    bot: true,
                    minute_time: new Date(new Date().setSeconds(0)),
                    chats: [
                        { time: new Date(), message: "안녕하세요 고객님! 브루스 챗봇입니다." },
                        { time: new Date(), message: "무엇을 도와 드릴까요?" }
                    ],
                    question: true,
                    orders: false,
                    order_items: false
                }
            ]
        }
    },
    methods: {
        show: function() {
            this.chatbot = true;
            this.brs_style = 'width: 400px !important; height: 80% !important; bottom: 0; right: 0;'
        },

        hide: function() {
            this.chatbot = false;
            this.brs_style = 'width: 76px !important; height: 76px !important; bottom: 24px; right: 24px;'
        },

        home: function() {
            var user_msg = '처음으로';
            var bot_chat_type = 'question_type';

            this.addChatSet(user_msg, bot_chat_type);
        },

        inputMessage: function(msg) {
            var bot_chat_type = 'plain_type';
            this.addChatSet(msg, bot_chat_type);
        },

        selectQuestion: function(id, question) {
            var bot_chat_type = 'orders_type';
            this.addChatSet(question, bot_chat_type);
        },

        addChatSet: function(user_msg, bot_chat_type) {
            var now = new Date();
            var last_speaker = this.conversation[this.conversation.length - 1];

            if (last_speaker.bot) {
                last_speaker.question = false;
                last_speaker.orders = false;
                last_speaker.order_items = false;

                this.addUserChatGroup(user_msg, now);
            } else {
                var time_criteria = new Date(last_speaker.minute_time.valueOf());
                var new_minute = time_criteria.getMinutes() + 1;
                time_criteria.setMinutes(new_minute);

                if (now > time_criteria) {
                    this.addUserChatGroup(user_msg, now);
                } else {
                    var user_chat = { time: new Date(now.valueOf()), message: user_msg };
                    last_speaker.chats.push(user_chat);
                }
            }
            var type = this.bot_chat_types[bot_chat_type];
            var joined_msg_list = type.joined_msg_list;
            var joined_msg = joined_msg_list[Math.floor(Math.random() * joined_msg_list.length)];
            switch (bot_chat_type) {
                case 'plain_type'       :  this.addBotChatGroup(joined_msg, now);
                                           break;
                case 'question_type'    :  this.addBotChatGroup(joined_msg, now, {question: true});
                                           break;
                case 'orders_type'      :  this.addBotChatGroup(joined_msg, now, {orders: true});
                                           break;
                case 'order_items_type' :  this.addBotChatGroup(joined_msg, now, {order_items: true});
                                           break;
                default                 :  this.addBotChatGroup(joined_msg, now);
            }
        },

        addUserChatGroup: function(user_msg, time) {
            var user_chats = new Array();
            var user_chat = { time: new Date(time.valueOf()), message: user_msg };
            user_chats.push(user_chat);

            var new_speaker = { bot: false, minute_time: new Date(time.setSeconds(0)), chats: user_chats, 
                                question: false, orders: false, order_items: false };
            this.conversation.push(new_speaker);
        },

        addBotChatGroup: function(bot_joined_msg, time, { question=false, orders=false, order_items=false } = {}) {
            var bot_chats = new Array();
            var bot_msgs = bot_joined_msg.split(';');

            for (var bot_msg in bot_msgs) {
                var bot_chat = { time: new Date(time.valueOf()), message: bot_msgs[bot_msg] };
                bot_chats.push(bot_chat);
            }

            var new_speaker = { bot: true, minute_time: new Date(time.setSeconds(0)), chats: bot_chats, 
                                question: question, orders: orders, order_items: order_items };
            this.conversation.push(new_speaker);
        },
        scrollToEnd: function() {
            if (this.chatbot) {
                var chats_wrapper = document.querySelector('.brs-messages');
                chats_wrapper.scrollTop = chats_wrapper.scrollHeight;
            }
        }
    },
    mounted: function() {
        this.scrollToEnd();
    },
    updated: function() {
        this.scrollToEnd();
    }
}
</script>

<style>
#brs {
    border: none;
    display: block;
    position: fixed;
    top: auto;
    left: auto;
    visibility: visible;
    z-index: 2147483647;
    max-height: 100vh;
    max-width: 100vw;
    transition: none 0s ease 0s;
    background: none transparent;
    opacity: 1;
    font-family: "Helvetica Nene", Helvetica, Arial, "맑은 고딕", "Malgun gothic", sans-serif;
}

.brs-chatbot-container {
    position: absolute;
    z-index: 2147483647;
    width: 100%;
    height: 100%;
    color: #333;
    font-size: 16px;
    overflow: hidden;
}

.brs-chatbot-container * {
    box-sizing: border-box;
    outline: none;
}

.brs-chatbot-close {
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    padding: .75em .75em .75em 1rem;
    -ms-flex-direction: column;
    flex-direction: column;
}

.brs-chatbot-close button {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 1;
    width: 52px;
    height: 52px;
    cursor: pointer;
    border-radius: .3125rem;
    box-shadow: 0 2px 6px 0 rgb(0, 0, 0, .4);
    overflow: hidden;
    padding: 0;
    border: none;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: relative;
}

.brs-chatbot-close button i {
    width: 100%;
    font-size: 20px;
}

.brs-chatbot-open {
    height: 100%;
    width: 100%;
    padding: 20px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
}

.brs-messanger-content {
    border-radius: 10px;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, .13);
    background-color: #fff;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
}

.brs-messanger-header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-weight: 500;
    box-shadow: 0 15px 25px -13px rgba(0, 0, 0, .13);
    overflow: hidden;
    z-index: 5;
    height: 60px;
    padding: 0 .8rem;
}

.brs-chatbot-icon-wrapper {
    width: 35px;
    height: 35px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #fff;
}

img.brs-chatbot-icon {
    width: 100%;
    height: 100%;
}

.brs-chatbot-name {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin-left: 10px;
}

.brs-messanger-header button {
    text-align: right;
    vertical-align: middle;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
    opacity: .6;
    transition: all .3s ease;
    min-height: 30px;
    color: white;
    margin-left: 18px;
}

.brs-messanger-header button:hover {
    opacity: 1;
}

.brs-messanger-header button i {
    width: 100%;
    font-size: 24px;
}

.brs-messanger-header button i.brs-font-home {
    font-size: 22px;
}

.brs-conversation {
    -ms-flex: 1;
    flex: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 1px;
}

.brs-messages {
    -ms-flex: 1;
    flex: 1;
    overflow-y: auto;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding: 0 .65rem 1rem;
}

.brs-message {
    overflow: hidden;
    width: auto;
    max-width: 100%;
    display: flex;
    margin: .5rem 0;
    padding: .5rem 0;
    -ms-flex-align: end;
    align-items: flex-end;
    padding-right: 18px;
    padding-left: 0;
}

.brs-avartar {
    margin-top: .15rem;
    margin-right: .75rem;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 1.875rem;
    height: 1.875rem;
}

.brs-message .brs-message-container {
    overflow: hidden;
    width: auto;
    max-width: 100%;
    -ms-flex-direction: column;
    flex-direction: column;
    display: -ms-flexbox;
    display: flex;
}

.brs-message .brs-info-line {
    margin: 0 12px;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    padding: .3125rem 0;
    font-size: 12px;
    color: #9a9a9a;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
}

.brs-message .brs-info-line .brs-info-line-content {
    font-weight: 400;
}

.brs-message .brs-chats {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%;
}

.brs-message .brs-chat-time {
    position: absolute;
    bottom: -6px;
    right: 10px;
    font-size: 10px;
    color: #a0a0a0;
}

.brs-message .brs-chats>:not(:last-child) {
    margin-bottom: 2px;
}

.brs-message .brs-chats .brs-chat {
    border-radius: 5px;
    max-width: 100%;
    background-color: #f8f8f8;
    padding: .5rem .75rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: keep-all;
}

.brs-message .brs-chats .brs-chat.brs-bot {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.brs-message .brs-chats .brs-chat.brs-bot:first-of-type {
    border-top-left-radius: 20px;
}

.brs-message .brs-chats .brs-chat.brs-bot:last-of-type {
    border-bottom-left-radius: 20px;
}

.brs-message .brs-chats .brs-chat.brs-user {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.brs-message .brs-chats .brs-chat.brs-user:first-of-type {
    border-top-right-radius: 20px;
}

.brs-message .brs-chats .brs-chat.brs-user:last-of-type {
    border-bottom-right-radius: 20px;
}

.brs-message.brs-end-user {
    padding-right: 0px;
}

.brs-message.brs-end-user .brs-message-container,
.brs-message.brs-end-user .brs-chats {
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    margin-left: auto;
}

.brs-message.brs-end-user .brs-chats {
    padding-left: 60px;
}

.brs-messages-footer {
    border-radius: 10px;
}

.brs-messages-footer .brs-composer {
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
    padding: .5rem 0 0;
}

.brs-messages-footer .brs-flex-column {
    -ms-flex-direction: column;
    flex-direction: column;
    display: -ms-flexbox;
    display: flex;
}

.brs-messages-footer .brs-input-wrapper {
    display: -ms-flexbox;
    display: flex;
}

.brs-messages-footer textarea {
    font-family: inherit;
    overflow: auto;
    color: inherit;
    font: inherit;
    margin: 0;
}

.brs-messages-footer textarea.brs-input {
    width: 100%;
    font-size: 1rem;
    resize: none;
    margin-bottom: .5rem;
    padding: 7px 15px;
    margin-bottom: 12px;
    margin-left: 15px;
    margin-right: 15px;
    background: rgba(10, 91, 255, .03);
    border: 1px solid #eee;
    border-radius: 20px;
    line-height: 1.2;
    -webkit-appearance: none;
    word-break: keep-all;
    -ms-word-break: keep-all;
}

.brs-messages-footer textarea.brs-input:focus {
    outline: none;
}
</style>
