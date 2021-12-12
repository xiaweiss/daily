# 自定义内容

```html
<n-dynamic-input
  v-model:value="customValue"
  :on-create="onCreate"
  #="{ value }"
>
  <div style="width: 100%;">
    <div style="display: flex; align-items: center;">
      <n-checkbox v-model:checked="value.isCheck" style="margin-right: 12px;" />
      <n-input-number
        v-model:value="value.num"
        style="margin-right: 12px; width: 160px;"
      />
      <n-input v-model:value="value.string" type="text" />
    </div>
  </div>
</n-dynamic-input>
<pre>
{{  JSON.stringify(customValue, 0, 2) }}
</pre>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      customValue: ref([
        {
          isCheck: true,
          num: 1,
          string: '一个字符串'
        }
      ]),
      onCreate () {
        return {
          isCheck: false,
          num: 1,
          string: '一个字符串'
        }
      }
    }
  }
})
```
