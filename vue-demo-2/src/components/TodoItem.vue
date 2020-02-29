<template>
  <li>
      <slot name="pre" :value="value"></slot>
      <span class="red" v-if="!del">{{title}}</span>
      <span v-else style="text-decoration: line-through">{{title}}</span>
      <slot name="suf">😄</slot>
      <button v-show="!del" @click="handelClick(title)">del</button>
  </li>
</template>

<script>
export default {
  props: {
      title: String,
      del: {
          type: Boolean,
          default: false
      },
  },
  data () {
      return {
          value: Math.random()
      }
  },
  methods: {
      handelClick (val) {
          // this.delete(val)
          this.$emit('delete', val)
      }
  }
}
</script>

<style scoped>
.red {
  color: red;
}
</style>