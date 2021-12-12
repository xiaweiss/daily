# 尺寸

`small`、`medium`、`large`。

```html
<n-space vertical>
  <n-input-number v-model:value="value" size="small" />
  <n-input-number v-model:value="value" size="medium" />
  <n-input-number v-model:value="value" size="large" />
</n-space>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref(0)
    }
  }
})
```
