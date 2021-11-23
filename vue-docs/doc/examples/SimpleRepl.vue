<script setup lang="ts">
import { Repl, ReplStore } from '@vue/repl'
import '@vue/repl/style.css'
import { version, Ref } from 'vue'

const store = new ReplStore({
  defaultVueRuntimeURL: `https://unpkg.com/vue@${version}/dist/vue.esm-browser.js`
})


const files =  {
'App.vue':
`
<!--
https://eugenkiss.github.io/7guis/tasks/#counter
-->

<script setup>
import { ref } from 'vue'
import Comp from './Comp.vue'

const count = ref(0)
<\/script>

<template>
  {{ count }}
  <button @click="count++">Count</button>
  <Comp />
</template>
`,

'Comp.vue':
`
<template>
  <div>comp</div>
</template>
`
}

store.setFiles(
  files,
  'App.vue'
)

</script>

<template>
  <Repl
    :store="store"
    :showImportMap="false"
    :showCompileOutput="false"
    :clearConsole="false"
  />
</template>

<style scoped>
.vue-repl {
  max-width: 1105px;
  border-right: 1px solid var(--vt-c-divider-light);
  height: calc(100vh - var(--vp-nav-height));
}

@media (max-width: 960px) {
  .vue-repl {
    border: none;
    height: calc(100vh - var(--vp-nav-height) - 48px);
  }
}
</style>
