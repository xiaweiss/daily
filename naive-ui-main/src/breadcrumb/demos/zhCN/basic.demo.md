# 基础用法

```html
<n-breadcrumb>
  <n-breadcrumb-item href="#">
    <n-icon><md-cash /></n-icon> 北京总行
  </n-breadcrumb-item>
  <n-breadcrumb-item href="#">
    <n-icon><md-cash /></n-icon> 天津分行
  </n-breadcrumb-item>
  <n-breadcrumb-item href="#">
    <n-icon><md-cash /></n-icon> 平山道支行
  </n-breadcrumb-item>
</n-breadcrumb>
```

```js
import { defineComponent } from 'vue'
import { MdCash } from '@vicons/ionicons4'

export default defineComponent({
  components: {
    MdCash
  }
})
```
