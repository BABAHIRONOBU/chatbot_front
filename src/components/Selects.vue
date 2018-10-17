<template>
  <div class="brs-selects-wrapper">
    <div class="brs-selects">
      <button v-for="select_data in selects_data" :key="select_data.id" :name="select_data.id" @mouseover="hover" @click="select" @mouseout="hover_out" class="brs-select" :style="out_color">
        {{select_data.text}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selects',
  data() {
    return {
      out_color: "color: rgb(10, 91, 255); border: 1px solid rgb(10, 91, 255); background-color: rgb(255, 255, 255);", 
      hover_color: "color: rgb(255, 255, 255); border: 1px solid rgb(10, 91, 255); background-color: rgb(10, 91, 255);",
      selects_list: [
        {
          id: 'a',
          text: '배송전'
        },
        {
          id: 'b',
          text: '배송완료'
        },
      ]
    }
  },
  computed: {
    selects_data() {
      return this.selects_list.filter(s => this.select_ids.includes(s.id));
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
    select(e) {
      this.$emit('select', e.currentTarget.getAttribute('name'), e.currentTarget.innerText.trim());
    }
  },
  props: {
    select_ids: { type: Array, required: true }
  }
}
</script>

<style>
</style>
