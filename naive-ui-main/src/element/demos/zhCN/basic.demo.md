# 基础

你可以使用上面的 CSS 变量。如果你需要在 JS 中使用这些变量，请使用 [useThemeVars](../docs/theme#use-theme-vars)。

```html
<n-space vertical>
  <n-space>
    <n-button @click="theme = darkTheme">深色</n-button>
    <n-button @click="theme = null">浅色</n-button>
  </n-space>
  <n-config-provider :theme="theme">
    <n-card>
      <n-el
        tag="span"
        style="color: var(--primary-color); transition: .3s var(--cubic-bezier-ease-in-out);"
      >
        我是个 span 标签
      </n-el>
    </n-card>
  </n-config-provider>
</n-space>
```

```js
import { defineComponent, ref } from 'vue'
import { darkTheme } from 'naive-ui'

export default defineComponent({
  setup () {
    return {
      darkTheme,
      theme: ref(null)
    }
  }
})
```
