<template>
  <div id="app">
    <chat-bot/>
  </div>
</template>

<script>
import ChatBot from './components/ChatBot.vue'

export default {
  name: 'App',
  components: {
    ChatBot
  }
}
</script>

<style>
#app {
    font-family: "Helvetica Nene", Helvetica, Arial, "맑은 고딕", "Malgun gothic", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
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
.brs-selects-wrapper {
  display: block;
  text-align: right;
}
.brs-selects-wrapper .brs-selects {
  display: inline-block;
  margin: -3px -2px;
  text-align: right;
}
.brs-selects-wrapper .brs-selects button {
  display: inline-block;
  margin: 3px 2px;
  font-size: 1rem;
  padding: .5rem 1rem;
  border-radius: 20px;
  transition: all .3s ease;
  text-align: center;
}
.brs-selects-wrapper .brs-selects button.brs-select-fixed {
  min-width: 9.85rem;
}
.brs-selects-wrapper .brs-selects button i {
  margin-right: 5px;
  font-size: 20px;
}
.brs-contents-card {
  width: 90%;
  margin: 0 auto;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
  background-color: #fff;
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
}
.brs-card-contents {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
}
.brs-card-body .brs-card-header {
  margin-bottom: -1px;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: .5rem;
  border-bottom: 1px solid #eee;
  padding: .6875rem;
  text-align: center;
  color: #9a9a9a;
}
.brs-card-header .brs-order-date {
  margin-right: 1ch;
  color: #000;
  font-weight: 500;
  font-size: .875rem;
}
.brs-card-header .brs-order-id {
  margin-left: 1ch;
  font-weight: 500;
}
.brs-card-body .brs-card-main {
  padding: 1rem 0.6875rem;
  border-bottom: 1px solid #eee;
}
.brs-card-main .brs-card-main-content {
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: start;
  justify-content: start;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  display: -ms-flexbox;
  display: flex;
}
.brs-card-main .brs-card-main-content .brs-card-item-img {
  width: 80px;
  height: 100px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0; 
}
.brs-card-main .brs-card-main-content .brs-card-item-img img {
  width: auto;
  height: 100%;
}
.brs-card-main .brs-card-main-content .brs-card-item-desc {
  padding-left: 2ch;
  align-self: stretch;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: space-between;
  justify-content: space-between;
  font-size: .875rem; 
}
.brs-card-main .brs-card-main-content .brs-card-item-desc .brs-prod-desc {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 8px;
}
.brs-prod-desc .brs-prod-info {
  margin-bottom: .25rem;
}
.brs-prod-desc .brs-prod-name, .brs-prod-desc .brs-prod-price {
  font-weight: 600;
}
.brs-prod-desc .brs-prod-quantity {
  font-size: .725rem;
}
.brs-card-main .brs-card-main-content .brs-card-item-desc .brs-prod-order-state button {
  background-color: rgb(10, 91, 255);
  color: white;
  border-radius: 0.25rem;
  border: none;
  font-size: .8275rem;
  font-weight: 600;
  padding: .3725rem .8725rem;
  cursor: pointer;
}
.brs-card-main .brs-card-main-content .brs-card-item-desc .brs-prod-order-state button.brs-prod-prepare {
  cursor: not-allowed;
  background-color: rgb(159, 186, 223);
}
.brs-prod-option {
  color: #9c9c9c;
}
.brs-card-footer {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: flex-end;
  padding: .5rem .725rem;
  background-color: #fafafa;
}
.brs-card-footer button {
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
.brs-card-footer a {
  text-decoration: none;
}
.brs-card-footer button:hover {
  border-bottom-color: currentColor;
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
/* .brs-card-head {
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
} */
.brs-phone-card-wrapper {
  border: 1px solid #eee;
  border-radius: .3125rem;
  background-color: #fff;
  box-shadow: 0 2px 0 0 #eee;
  margin: 0 1rem 0 2.625rem;
  padding: .85rem 1rem;
}
.brs-phone-card-wrapper .brs-phone-card {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
}
.brs-phone-card-wrapper .brs-phone-card .brs-phone {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  color: #9a9a9a;
  font-size: .8rem;
  font-weight: 600;
}
.brs-phone-card-wrapper .brs-phone-card .brs-phone-form {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}
.brs-phone-form .brs-phone-input-wrapper {
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -ms-flex-direction: column;
  flex-direction: column;
}
.brs-phone-form .brs-phone-input-wrapper .brs-phone-input {
  border: 2px solid #eee;
  border-right: 0;
  border-radius: .3125rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  position: relative;
  margin: .39rem 0;
  animation-duration: .4s;
  animation-fill-mode: both;
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
}
.brs-phone-form .brs-phone-input-wrapper .brs-phone-input.active {
  border-color: inherit;
}
.brs-phone-form .brs-phone-input-wrapper .brs-phone-input input {
  outline: none;
  width: 100%;
  height: 1.7rem;
  border-radius: .3125rem;
  color: #000;
  border: none;
  font-size: 1rem;
  -ms-flex: 1;
  flex: 1;
  font-weight: 400;
  padding: 0 1.15rem;
}
.brs-phone-form .brs-phone-input-wrapper .brs-phone-invalid {
  color: #ff7f93;
  font-size: .75rem;
  font-weight: 600;
}
.brs-phone-form button {
  margin: .39rem 0;
  padding: 0 .35rem;
  width: 100px;
  min-height: 25px;
  height: 1.95rem;
  border: none;
  border-radius: .3125rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  position: relative;
  text-align: center;
  font-weight: 600;
  font-size: .875rem;
  vertical-align: middle;
  cursor: pointer;
}
.brs-phone-form button:hover {
  filter: brightness(90%);
}
</style>
