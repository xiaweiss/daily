# Autosize

```html
<n-mention type="textarea" :options="options" autosize />
```

```js
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {
      options: [
        {
          label: '07akioni',
          value: '07akioni'
        },
        {
          label: 'star-kirby',
          value: 'star-kirby'
        },
        {
          label: 'Guandong-Road',
          value: 'Guandong-Road'
        },
        {
          label: 'No.5-Yiheyuan-Road',
          value: 'No.5-Yiheyuan-Road'
        }
      ]
    }
  }
})
```
