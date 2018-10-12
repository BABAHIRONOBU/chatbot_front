<template>
  <div class="brs-selects-wrapper">
    <div class="brs-selects">
      <button v-for="(select_data, index) in selects_data" :key="index" @mouseover="hover" @click="select" @mouseout="hover_out" class="brs-select" :style="out_color">
        {{select_data}}
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
      selects_data: this.selects
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
      this.$emit('select', e.currentTarget.innerText.trim());
    }
  },
  props: {
    selects: { type: Array, required: true }
  }
}
</script>

<style>
</style>
