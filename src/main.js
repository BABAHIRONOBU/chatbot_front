import Vue from 'vue'
import ChatBot from './components/ChatBot.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCommentAlt, faHome, faTimes, faTruck, faUndoAlt, faTimesCircle, faWonSign, faPiggyBank, faBox, faShoppingCart, faCalendarAlt, faArchive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCommentAlt, faHome, faTimes, faTruck, faUndoAlt, faTimesCircle, faWonSign, faPiggyBank, faBox, faShoppingCart, faCalendarAlt, faArchive)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    el: '#brs',
    render: h => h(ChatBot)
})