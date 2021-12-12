# Customize Checked Value

Use `checked-value` and `unchecked-value` to customize value.

```html
<n-checkbox
  checked-value="Foo"
  unchecked-value="Bar"
  @update:checked="handleUpdateChecked"
>
  FooBar
</n-checkbox>
```

```js
import { defineComponent } from 'vue'
import { useMessage } from 'naive-ui'

export default defineComponent({
  setup () {
    const message = useMessage()
    return {
      handleUpdateChecked (value) {
        message.info(value)
      }
    }
  }
})
```
