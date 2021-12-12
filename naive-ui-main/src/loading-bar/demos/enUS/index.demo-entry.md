# Loading Bar

A kind of good placebo for anxiety.

<n-space vertical>
<n-alert title="Prerequisite" type="warning">
  If you want use loading bar, you need to wrap the component where you call related methods inside <n-text code>n-loading-bar-provider</n-text> and inject <n-text code>loadingBar</n-text>.
</n-alert>
For example:

```html
<!-- App.vue -->
<n-loading-bar-provider>
  <content />
</n-loading-bar-provider>
```

```js
import { defineComponent } from 'vue'
import { useLoadingBar } from 'naive-ui'

// content
export default defineComponent({
  setup () {
    const loadingBar = useLoadingBar()
    return {
      loading () {
        loadingBar.start()
      }
    }
  }
})
```

</n-space>

## Demos

```demo
basic
```

## API

### LoadingBarProvider Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| loading-bar-style | `{ loading?: string \| object, error?: string \| object }` | `undefined` | Style of the loading bar. |

### `loadingBar` Injection Methods

| Name | Type | Description |
| --- | --- | --- |
| error | `() => void` | Callback function for loading bar error. |
| finish | `() => void` | The callback function when the loading bar finishes loading. |
| start | `() => void` | Callback function for loading bar to start loading. |
