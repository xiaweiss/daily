# Min and max

You can set minimum and maximum values too.

```html
<n-space vertical>
  <n-input-number v-model:value="value" placeholder="Min" :min="-3" :max="5" />
  <n-input-number v-model:value="value" placeholder="Max" :min="-5" :max="3" />
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
