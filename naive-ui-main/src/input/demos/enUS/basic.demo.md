# Basic

Basic use of `n-input`.

```html
<n-space vertical>
  <n-input v-model:value="value" type="text" placeholder="Basic Input" />
  <n-input v-model:value="value" type="textarea" placeholder="Basic Textarea" />
</n-space>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref(null)
    }
  }
})
```
