# 基础用法

```html
<n-icon size="40">
  <game-controller-outline />
</n-icon>
<n-icon size="40" color="#0e7a0d">
  <game-controller />
</n-icon>
```

```js
import { GameControllerOutline, GameController } from '@vicons/ionicons5'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    GameControllerOutline,
    GameController
  }
})
```
