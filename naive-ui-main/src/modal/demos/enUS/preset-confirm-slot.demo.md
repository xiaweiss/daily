# Use Preset Dialog (Slot)

Slots are also related to preset.

```html
<n-button @click="showModal = true"> Start Me up </n-button>
<n-modal v-model:show="showModal" preset="dialog" title="Dialog">
  <template #header>
    <div>title</div>
  </template>
  <div>content</div>
  <template #action>
    <div>action</div>
  </template>
</n-modal>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      showModal: ref(false)
    }
  }
})
```
