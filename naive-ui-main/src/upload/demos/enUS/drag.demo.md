# Drag to upload

```html
<n-upload action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f">
  <n-upload-dragger>
    <div style="margin-bottom: 12px;">
      <n-icon size="48" :depth="3">
        <archive-icon />
      </n-icon>
    </div>
    <n-text style="font-size: 16px;">
      Click or drag a file to this area to upload
    </n-text>
    <n-p depth="3" style="margin: 8px 0 0 0;">
      Strictly prohibit from uploading sensitive information. For example, your
      bank card PIN or your credit card expiry date.
    </n-p>
  </n-upload-dragger>
</n-upload>
```

```js
import { defineComponent } from 'vue'
import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'

export default defineComponent({
  components: {
    ArchiveIcon
  }
})
```
