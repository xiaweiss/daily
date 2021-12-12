# 加载中

按钮有加载状态。

```html
<n-space>
  <n-button :loading="loading" @click="loading = !loading">
    <template #icon>
      <n-icon>
        <cash-icon />
      </n-icon>
    </template>
    点我
  </n-button>
  <n-button :loading="loading" @click="loading = !loading"> 点我 </n-button>
</n-space>
```

```js
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    CashIcon
  },
  setup () {
    return {
      loading: ref(false)
    }
  }
})
```
