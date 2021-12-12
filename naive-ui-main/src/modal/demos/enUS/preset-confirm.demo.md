# Use Preset Dialog

An example of preset `dialog`.

```html
<n-button @click="showModal = true"> Start Me up </n-button>
<n-modal
  v-model:show="showModal"
  preset="dialog"
  title="Dialog"
  content="Are you sure?"
  positive-text="Submit"
  @positive-click="submitCallback"
  @negative-click="cancelCallback"
  negative-text="Cancel"
/>
```

```js
import { defineComponent, ref } from 'vue'
import { useMessage } from 'naive-ui'

export default defineComponent({
  setup () {
    const message = useMessage()

    return {
      showModal: ref(false),
      cancelCallback () {
        message.success('Cancel')
      },
      submitCallback () {
        message.success('Submit')
      }
    }
  }
})
```
