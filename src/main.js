import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentAlt, faHome, faTimes, faTruck, faUndoAlt, faTimesCircle, faWonSign, faPiggyBank, faBox, faShoppingCart, faCalendarAlt, faArchive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
require('es6-promise').polyfill()

library.add(faCommentAlt, faHome, faTimes, faTruck, faUndoAlt, faTimesCircle, faWonSign, faPiggyBank, faBox, faShoppingCart, faCalendarAlt, faArchive)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
