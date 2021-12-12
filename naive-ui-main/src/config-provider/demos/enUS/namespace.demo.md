# Namespace (Class on Detached DOM)

Some parts of component are detached to `document.body`. If you want to add a class to those detached elements, use `namespace` prop of `n-config-provider`. Open devtools to see detached part.

```html
<n-config-provider :namespace="ns">
  <n-tooltip placement="bottom" trigger="click">
    <template #trigger>
      <n-button @click="isActive = true">
        Activate Component with Detached Content
      </n-button>
    </template>
    <span> Detached Part </span>
  </n-tooltip>
</n-config-provider>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      ns: ref('custom-app-namespace1'),
      isActive: ref(false)
    }
  }
})
```
