# 禁用

```html
<n-space vertical>
  <n-pagination
    v-model:page="page"
    v-model:page-size="pageSize"
    :page-count="100"
    show-size-picker
    :page-sizes="[10, 20, 30, 40]"
    show-quick-jumper
    :disabled="disabled"
  />
  <n-switch v-model:value="disabled" />
</n-space>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      page: ref(2),
      pageSize: ref(20),
      disabled: ref(true)
    }
  }
})
```