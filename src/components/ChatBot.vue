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
                                  <template v-if="speaker.is_bot">
                                      <bot-chat :messages="speaker.chats" :minute="speaker.minute_time"></bot-chat>
                                      <question-selects v-if="speaker.have_question_selects" @selectquestion="selectQuestion"></question-selects>
                                      <contents-card v-if="(speaker.contents && speaker.contents.length)" :contents="speaker.contents" :contents_type="speaker.contents_type"></contents-card>
                                      <!-- <contents-card v-if="speaker.contents"></contents-card> -->
                                      <!-- <contents-card></contents-card> -->
                                      <phone-number-input v-if="speaker.has_number_input" @inputnumber="inputNumber"></phone-number-input>
                                      <selects v-if="(speaker.select_ids &&speaker.select_ids.length)" :select_ids="speaker.select_ids" @select="select"></selects>
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
import PhoneNumberInput from './PhoneNumberInput.vue'
import Selects from './Selects.vue'

import {getCookie} from '../helper.js'
import URLS from '../urls.js'

export default {
  name: 'chat-bot',
  components: {BotChat, UserChat, MessageInput, QuestionSelects, ContentsCard, PhoneNumberInput, Selects},
  data() {
        return {
            chatbot: false,
            brs_style: 'width: 76px !important; height: 76px !important; bottom: 24px; right: 24px;',
            access_token: '',
            member_id: '',
            default_bot_messages: {
                plain_type: [
                    '브루스 챗봇을 이용해 주셔서 감사합니다.;홈 버튼을 눌러 다시 시작할 수 있습니다.'
                ],
                home_type: [
                    '고객님, 무엇을 도와 드릴까요?',
                    '고객님이 필요한 정보를 찾아드리겠습니다.;아래의 유형 중 하나를 선택해주세요.',
                    '24시간 쉬지 않고 최선을 다 하는 브루스 챗봇입니다.;어떤 도움이 필요하신가요?',
                    '저는 고객님들의 보다 더 편한 쇼핑몰 사용을 도와드리고 있는 브루스 챗봇입니다.;언제든 필요하면 불러주세요.^^;무엇을 도와 드릴까요?'
                ],
                number_type: [
                    '고객님의 소중한 개인정보 보호를 위해 쇼핑몰에 등록하신 전화번호를 입력받고 있습니다.;입력받은 전화번호는 2시간 동안 기억됩니다.',
                    '고객님께서 쇼핑몰에 등록한 전화번호를 입력해주세요.;개인정보 보호를 위한 것이며 2시간 동안 기억합니다.'
                ],
                contents_type: [
                    '여기요',
                    '여기 있습니다.'
                ],
                selects_type: [
                    '고르세요',
                    '하나만 골라주세요',
                    '아래의 선택지 중 하나만 골라주세요'
                ]
            },
            conversation: [
                {
                    is_bot: true,
                    minute_time: new Date(new Date().setSeconds(0)),
                    chats: [
                        { time: new Date(), message: "안녕하세요 고객님! 브루스 챗봇입니다." },
                        { time: new Date(), message: "무엇을 도와 드릴까요?" }
                    ],
                    have_question_selects: true
                }
            ],
            contents: [],
            select_ids: []
        }
    },
    computed: {
        headers: function() {
            return {
            'Authorization': 'Bearer ' + this.access_token,
            'Content-Type': 'application/json'
            }
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
            this.checkCookie();

            var user_msg = '처음으로';
            var bot_chat_type = 'home_type';

            this.addChatSet(user_msg, bot_chat_type);
        },

        inputMessage: function(msg) {
            var bot_chat_type = 'plain_type';
            this.addChatSet(msg, bot_chat_type);
        },

        inputNumber: function(number, id) {
            console.log(number);
            console.log(id);
            this.member_id = id;
        },

        selectQuestion: function(id, question) {
            if (id === '1') {
                var bot_chat_type = 'selects_type';
                this.select_ids.push('a', 'b');

                this.addChatSet(question, bot_chat_type, {joined_msg: '배송전, 배송완료 중 원하는 선택지를 골라주세요.', select_ids: this.select_ids});
            }
        },

        select: function(id, select) {
            this.select_ids = [];
            if (id === 'a') {
                var bot_chat_type = 'contents_type';
                var contents_type = 'orders';
                var query = {src_name: 'blackrubydev_1539673352901782', member_id: 'test'};

                this.delivering(query, select, contents_type, bot_chat_type);
            } else if (id === 'b') {
                var bot_chat_type = 'contents_type';
                var contents_type = 'orders';
                var query = {src_name: 'blackrubydev_1539673352901782', member_id: 'test', page: '1'};

                this.delivered(query, select, contents_type, bot_chat_type);
            }
        },
        // joined_msg를 list로 바꿔서 원하는 메세지 여러개를 입력할 수 있게 할까? 그 중 랜덤으로 메세지가 선택이 되는 것이고
        addChatSet: function(user_msg, bot_chat_type, { joined_msg= '', contents=[], contents_type='', select_ids=[] } = {}) {
            var now = new Date();
            var last_speaker = this.conversation[this.conversation.length - 1];

            if (last_speaker.is_bot) {
                if (last_speaker.have_question_selects) {
                    last_speaker.have_question_selects = false;
                }
                if (last_speaker.has_number_input) {
                    last_speaker.has_number_input = false;
                }
                if (last_speaker.contents && last_speaker.contents.length) {
                    last_speaker.contents = [];
                    last_speaker.contetns_type = '';
                }
                if (last_speaker.select_ids && last_speaker.select_ids.length) {
                    last_speaker.select_ids = [];
                }

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

            // 챗봇을 새로 시작할 때 쿠키가 만료되었다면 다시 전화번호를 물어본다.
            // if (bot_chat_type === 'home_type' && getCookie('rbPNum') === '') {
            //     console.log('쿠키 없다');
            // }

            if (joined_msg === '') {
                var joined_msg_list = this.default_bot_messages[bot_chat_type]
                joined_msg = joined_msg_list[Math.floor(Math.random() * joined_msg_list.length)];
            }

            switch (bot_chat_type) {
                case 'plain_type'       :  this.addBotChatGroup(joined_msg, now);
                                           break;
                case 'home_type'        :  this.addBotChatGroup(joined_msg, now, {have_question_selects: true});
                                           break;
                case 'selects_type'     :  this.addBotChatGroup(joined_msg, now, {select_ids: select_ids});
                                           break;
                case 'contents_type'    :  this.addBotChatGroup(joined_msg, now, {contents: contents, contents_type: contents_type});
                                           break;
                case 'number_type'      :  this.addBotChatGroup(joined_msg, now, {has_number_input: true});
                                           break;
                default                 :  this.addBotChatGroup(joined_msg, now);
            }
        },

        addUserChatGroup: function(user_msg, time) {
            var user_chats = new Array();
            var user_chat = { time: new Date(time.valueOf()), message: user_msg };
            user_chats.push(user_chat);

            var new_speaker = { minute_time: new Date(time.setSeconds(0)), chats: user_chats };
            this.conversation.push(new_speaker);
        },

        addBotChatGroup: function(bot_joined_msg, time, { have_question_selects=false, has_number_input=false, contents=[], contents_type='', select_ids=[] } = {}) {
            var bot_chats = new Array();
            var bot_msgs = bot_joined_msg.split(';');

            for (var bot_msg in bot_msgs) {
                var bot_chat = { time: new Date(time.valueOf()), message: bot_msgs[bot_msg] };
                bot_chats.push(bot_chat);
            }

            var new_speaker = { is_bot: true, minute_time: new Date(time.setSeconds(0)), chats: bot_chats };

            if (have_question_selects) {
                new_speaker.have_question_selects = true;
            }
            if (has_number_input) {
                new_speaker.has_number_input = true;
            }
            if (contents && contents.length) {
                new_speaker.contents = contents;
                new_speaker.contents_type = contents_type
            }
            if (select_ids && select_ids.length) {
                new_speaker.select_ids = select_ids;
            }

            this.conversation.push(new_speaker);
        },

        scrollToEnd: function() {
            if (this.chatbot) {
                var chats_wrapper = document.querySelector('.brs-messages');
                chats_wrapper.scrollTop = chats_wrapper.scrollHeight;
            }
        },

        checkCookie: function() {
            if (getCookie('rbPNum') === '') {
                this.member_id = '';
            }
        },
        delivering: function(query, select, ct, bct) {
            this.$axios.get(URLS.DELIVERING, {
                params: query,
                headers: this.headers
            })
            .then((response) => {
                console.log(response);
                this.contents = response.data.orders;
                this.addChatSet(select, bct, {joined_msg:'배송전인 주문 조회 결과입니다.', contents: this.contents, contents_type: ct});
            })
            .catch((msg) => {
                console.log('error', msg);
            })
        },
        delivered: function(query, select, ct, bct) {
            this.$axios.get(URLS.DELIVERED, {
                params: query,
                headers: this.headers
            })
            .then((response) => {
                console.log(response);
                this.contents = response.data.orders;
                this.addChatSet(select, bct, {joined_msg:'배송완료된 주문 조회 결과입니다.', contents: this.contents, contents_type: ct});
            })
            .catch((msg) => {
                console.log('error', msg);
            })
        }
        // getDelivered: function(query) {
        //     this.$axios.get(URLS.DELIVERED, {
        //         params: query,
        //         headers: this.headers
        //     })
        // }
        // fetchOrders: function(start_date, end_date) {
        //     this.$axios.get(URLS.ORDERS, {
        //         params: {start_date: start_date, end_date: end_date},
        //         headers: this.headers
        //     })
        //     .then((response) => {
        //         console.log(response);
        //         this.contents = response.date;
        //     })
        //     .catch((msg) => {
        //         console.log('error', msg);
        //     })
        // }
    },
    mounted: function() {
        this.scrollToEnd();
        this.checkCookie();
    },
    updated: function() {
        this.scrollToEnd();
    }
}
</script>

<style>
</style>
