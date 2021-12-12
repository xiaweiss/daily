# Checkbox Group

```html
<n-checkbox-group v-model:value="cities">
  <n-space item-style="display: flex;">
    <n-checkbox value="Beijing" label="Beijing" />
    <n-checkbox value="Shanghai" label="Shanghai" />
    <n-checkbox value="Guangzhou" label="Guangzhou" />
    <n-checkbox value="Shenzen" label="Shenzhen" />
  </n-space>
</n-checkbox-group>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      cities: ref(null)
    }
  }
})
```
