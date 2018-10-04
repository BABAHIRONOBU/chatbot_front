<template>
  <div class="brs-selects-wrapper">
    <div class="brs-selects">
      <button v-for="select in selects_data" :key="select.id" :name="select.id" @mouseover="hover" @click="select_question" @mouseout="hover_out" class="brs-select" :style="set_color(select.isDisabled)" :disabled="select.isDisabled">
        <i><font-awesome-icon :icon="select.icon"></font-awesome-icon></i>
        {{select.question}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quetion-selects',
  data() {
    return {
      out_color: "color: rgb(10, 91, 255); border: 1px solid rgb(10, 91, 255); background-color: rgb(255, 255, 255);", 
      hover_color: "color: rgb(255, 255, 255); border: 1px solid rgb(10, 91, 255); background-color: rgb(10, 91, 255);",
      // very soft blue -> 만약 색깔을 바꿀 수 있게 된다면 disabled color로 very soft {{color}}를 사용하면 된다.
      disabled_color: "color: rgb(159,186,223); border: 1px solid rgb(159,186,223); background-color: rgb(255, 255, 255);",
      selects_data: [
        {
          id: 1,
          question: '주문/배송',
          icon: 'truck',
          isDisabled: false
        },
        {
          id: 2,
          question: '교환/반품',
          icon: 'undo-alt',
          isDisabled: true
        },
        {
          id: 3,
          question: '취소',
          icon: 'times-circle',
          isDisabled: true
        },
        {
          id: 4,
          question: '환불',
          icon: 'won-sign',
          isDisabled: true
        },
        {
          id: 5,
          question: '상품관련 문의',
          icon: 'box',
          isDisabled: true
        },
        {
          id: 6,
          question: '적립금',
          icon: 'piggy-bank',
          isDisabled: true
        },
        {
          id: 7,
          question: '장바구니',
          icon: 'shopping-cart',
          isDisabled: true
        },
        {
          id: 8,
          question: '이벤트',
          icon: 'calendar-alt',
          isDisabled: true
        }
      ]
    }
  },
  methods: {
    hover(e) {
      if (e.target === e.currentTarget) {
        e.target.setAttribute('style', this.hover_color);
      } else {
        e.currentTarget.setAttribute('style', this.hover_color);
      }
    },
    hover_out(e) {
      if (e.target === e.currentTarget) {
        e.target.setAttribute('style', this.out_color);
      } else {
        e.currentTarget.setAttribute('style', this.out_color);
      }
    },
    set_color(isDisabled) {
      if (isDisabled) {
        return this.disabled_color;
      } else {
        return this.out_color;
      }
    },
    select_question(e) {
      this.$emit('selectquestion', e.currentTarget.getAttribute('name'), e.currentTarget.innerText.trim());
    }
  }
}
</script>

<style>
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
  min-width: 9.85rem;
  text-align: center;
}
.brs-selects-wrapper .brs-selects button:hover {
  background-color: currentColor;
}
.brs-selects-wrapper .brs-selects button i {
  margin-right: 5px;
  font-size: 20px;
}
</style>
