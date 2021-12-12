# 使用输入预设

默认状况下，`n-dynamic-input` 的预设是 `input`。

```html
<n-dynamic-input v-model:value="value" placeholder="请输入" :min="3" :max="6" />
<pre>
{{  JSON.stringify(value, 0, 2) }}
</pre>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref(['', '', ''])
    }
  }
})
```
