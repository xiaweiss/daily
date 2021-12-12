# Dark Debug 4

```html
<n-button @click="showModal = !showModal">Toggle</n-button>
<n-modal
  title="Dark Modal Debug"
  preset="card"
  v-model:show="showModal"
  :style="{ marginTop: '24px', marginBottom: '24px', width: '800px' }"
>
  <n-popover trigger="click">
    <template #trigger>
      <n-button style="margin:0;"> 悬浮 </n-button>
    </template>
    <span>或许不想知道你的花园长得咋样</span>
  </n-popover>
</n-modal>
```

```js
export default {
  data () {
    return {
      showModal: false
    }
  }
}
```
