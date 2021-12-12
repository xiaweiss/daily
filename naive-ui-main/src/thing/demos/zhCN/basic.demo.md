# 基础用法

Thing 提供了很多 slot 来定制。

```html
<n-row>
  <n-col :span="12">
    <n-checkbox v-model:checked="avatar">头像</n-checkbox>
  </n-col>
  <n-col :span="12">
    <n-checkbox v-model:checked="action">操作</n-checkbox>
  </n-col>
</n-row>
<n-row>
  <n-col :span="12">
    <n-checkbox v-model:checked="header">标题</n-checkbox>
  </n-col>
  <n-col :span="12">
    <n-checkbox v-model:checked="headerExtra">标题附加信息</n-checkbox>
  </n-col>
</n-row>
<n-row>
  <n-col :span="12">
    <n-checkbox v-model:checked="description">描述</n-checkbox>
  </n-col>
  <n-col :span="12">
    <n-checkbox v-model:checked="footer">底部</n-checkbox>
  </n-col>
</n-row>
<n-divider />
<n-thing>
  <template #avatar v-if="avatar">
    <n-avatar>
      <n-icon>
        <cash-icon />
      </n-icon>
    </n-avatar>
  </template>
  <template #header v-if="header"> 货币 </template>
  <template #header-extra v-if="headerExtra">
    <n-button circle size="small">
      <template #icon>
        <cash-icon />
      </template>
    </n-button>
  </template>
  <template #description v-if="description"> 描述 </template>
  货币是为了提高交易效率而用于交换的中介商品。货币有多种形式，如贝壳粮食等自然物、金属纸张等加工品、银行卡信用卡等磁条卡、移动支付加密货币等APP。
  <template #footer v-if="footer"> 尾部 </template>
  <template #action v-if="action">
    <n-space>
      <n-button size="small">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        1 块钱
      </n-button>
      <n-button size="small">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        10 块钱
      </n-button>
      <n-button size="small">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        100 块钱
      </n-button>
    </n-space>
  </template>
</n-thing>
```

```js
import { defineComponent, ref } from 'vue'
import { CashOutline as CashIcon } from '@vicons/ionicons5'

export default defineComponent({
  components: {
    CashIcon
  },
  setup () {
    return {
      avatar: ref(true),
      header: ref(true),
      headerExtra: ref(true),
      description: ref(true),
      footer: ref(true),
      action: ref(true)
    }
  }
})
```
