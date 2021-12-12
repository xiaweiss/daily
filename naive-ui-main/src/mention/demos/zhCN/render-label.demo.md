# 控制菜单渲染

如果选项的 `label` 不是字符串，默认情况下会使用 `value` 进行匹配。

```html
<n-mention :options="options" :render-label="renderLabel" />
```

```js
import { defineComponent, h } from 'vue'
import { NAvatar } from 'naive-ui'

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
          label: 'amadeus711',
          value: 'amadeus711'
        }
      ],
      renderLabel: (option) =>
        h('div', { style: 'display: flex; align-items: center;' }, [
          h(NAvatar, {
            style: 'margin-right: 8px;',
            size: 24,
            round: true,
            src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
          }),
          option.value
        ])
    }
  }
})
```
