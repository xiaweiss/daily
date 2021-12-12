# Passively activated

If you want to activate the input by pressing enter after it's focused, use `passively-activated`. Use Tab to focus on the next input(s).

```html
<n-space vertical>
  <n-input
    @blur="handleBlur"
    @focus="handleFocus"
    @change="handleChange"
    @keyup="handleKeyUp"
    @input="handleInput"
    placeholder="Interact to trigger events"
    :passively-activated="true"
  />
  <n-input
    type="textarea"
    @blur="handleBlur"
    @focus="handleFocus"
    @change="handleChange"
    @keyup="handleKeyUp"
    @input="handleInput"
    placeholder="Interact to trigger events"
    :passively-activated="true"
  />
  <n-input
    pair
    separator="to"
    @blur="handleBlur"
    @focus="handleFocus"
    :passively-activated="true"
  />
</n-space>
```

```js
import { defineComponent } from 'vue'
import { useMessage } from 'naive-ui'

export default defineComponent({
  setup () {
    const message = useMessage()
    return {
      handleFocus (e) {
        message.info('[Event focus]')
      },
      handleBlur (e) {
        message.info('[Event blur]')
      },
      handleChange (v) {
        message.info('[Event change]: ' + v)
      },
      handleKeyUp (e) {
        message.info('[Event keyup]')
      },
      handleInput (v) {
        message.info('[Event input]: ' + v)
      }
    }
  }
})
```
