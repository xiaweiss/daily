# 调试

```html
<n-button @click="name = 'the beatles'">将名称设置为披头士乐队</n-button>

<n-card title="歌曲" style="margin-bottom: 16px;">
  <n-tabs v-model:value="name">
    <n-tab-pane name="oasis" tab="绿洲乐队"> Wonderwall </n-tab-pane>
    <n-tab-pane name="the beatles" tab="披头士乐队"> Hey Jude </n-tab-pane>
    <n-tab-pane name="jay chou" tab="周杰伦"> 七里香 </n-tab-pane>
  </n-tabs>
</n-card>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      name: ref('oasis')
    }
  }
})
```

```css
.n-button {
  margin-top: 12px;
}
```
