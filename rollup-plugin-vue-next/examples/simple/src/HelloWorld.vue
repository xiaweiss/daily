<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1 class="red">{{ msg }}</h1>
  <input v-model="msg">
</template>

<!-- <style scoped>
  .red {
    color: red;
  }
</style> -->
