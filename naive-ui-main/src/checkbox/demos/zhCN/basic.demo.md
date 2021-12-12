# 基础用法

```html
<n-space item-style="display: flex;" align="center">
  <n-checkbox v-model:checked="value">复选框</n-checkbox>
  <n-checkbox v-model:checked="value" />
  <n-checkbox v-model:checked="value" :disabled="disabled">复选框</n-checkbox>
  <n-button @click="disabled = !disabled" size="small">禁用</n-button>
</n-space>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref(false),
      disabled: ref(true)
    }
  }
})
```
