# 基础用法

好在这颗树不是活的，也不平衡。

```html
<n-tree
  block-line
  :data="data"
  :default-expanded-keys="defaultExpandedKeys"
  selectable
/>
```

```js
import { defineComponent, ref } from 'vue'

function createData (level = 4, baseKey = '') {
  if (!level) return undefined
  return Array.apply(null, { length: 6 - level }).map((_, index) => {
    const key = '' + baseKey + level + index
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

function createLabel (level) {
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
}

export default defineComponent({
  setup () {
    return {
      data: createData(),
      defaultExpandedKeys: ref(['40', '41'])
    }
  }
})
```
