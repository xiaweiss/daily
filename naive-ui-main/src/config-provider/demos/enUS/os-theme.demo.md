# Use OS Theme

Naive UI provides `useOsTheme` to get the current theme of your OS.

```html
<n-config-provider :theme="theme">
  <n-card> Your current system theme is {{ osTheme }}. </n-card>
</n-config-provider>
```

```js
import { defineComponent, computed } from 'vue'
import { useOsTheme, darkTheme } from 'naive-ui'

export default defineComponent({
  setup () {
    const osThemeRef = useOsTheme()
    return {
      theme: computed(() => (osThemeRef.value === 'dark' ? darkTheme : null)),
      osTheme: osThemeRef
    }
  }
})
```
