# 基础用法

穿梭框的基础用法。如果你有一大堆数据，看下一个例子。

```html
<n-transfer ref="transfer" v-model:value="value" :options="options" />
```

```js
import { defineComponent, ref } from 'vue'

function createOptions () {
  return Array.apply(null, { length: 100 }).map((v, i) => ({
    label: 'Option ' + i,
    value: i,
    disabled: i % 5 === 0
  }))
}

function createValues () {
  return Array.apply(null, { length: 50 }).map((v, i) => i)
}

export default defineComponent({
  setup () {
    return {
      options: createOptions(),
      value: ref(createValues())
    }
  }
})
```
