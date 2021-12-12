# 操作插槽

有人要在级联菜单里用这个插槽吗？

```html
<n-cascader v-model:value="value" placeholder="没啥用的值" :options="options">
  <template #action>站在能分割世界的桥</template>
</n-cascader>
```

```js
import { defineComponent, ref } from 'vue'

function getOptions (depth = 2, iterator = 1, prefix = '') {
  const length = 12
  const options = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `${i}`,
        label: `${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, '' + String(i))
      })
    } else if (iterator === depth) {
      options.push({
        value: `${prefix}-${i}`,
        label: `${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    } else {
      options.push({
        value: `${prefix}-${i}`,
        label: `${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

export default defineComponent({
  setup () {
    return {
      value: ref(null),
      options: getOptions()
    }
  }
})
```
