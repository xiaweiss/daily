# 尺寸

可以是 `small`、`medium` 或 `large` 尺寸。

```html
<n-space vertical>
  <n-time-picker v-model:value="timestamp" size="small" />
  <n-time-picker v-model:value="timestamp" size="medium" />
  <n-time-picker v-model:value="timestamp" size="large" />
</n-space>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      timestamp: ref(null)
    }
  }
})
```
