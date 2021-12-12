# 受控的文件列表

下面的例子纯属玩笑。

```html
<n-upload
  action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
  v-model:file-list="fileList"
  @change="handleUploadChange"
  @remove="handleRemove"
  @update:file-list="handleFileListChange"
>
  <n-button>上传文件</n-button>
</n-upload>
```

```js
import { defineComponent, ref } from 'vue'
import { useMessage } from 'naive-ui'

export default defineComponent({
  setup () {
    const message = useMessage()
    const fileListRef = ref([
      {
        id: 'url-test',
        name: 'URL 测试',
        url: '__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f',
        status: 'finished'
      },
      {
        id: 'text-message',
        name: '你的短信',
        status: 'error'
      },
      {
        id: 'notification',
        name: '你的通知',
        status: 'finished'
      },
      {
        id: 'contact',
        name: '你的联系人信息',
        status: 'finished'
      }
    ])
    return {
      fileList: fileListRef,
      handleUploadChange ({ fileList }) {
        fileListRef.value = fileList
      },
      handleRemove ({ file, fileList }) {
        if (file.id === 'text-message') {
          message.info('居然没传上去，算了，删了吧')
        } else if (file.id === 'notification') {
          message.error('不行，这个有用，不许删')
          return false
        } else if (file.id === 'contact') {
          message.loading('不知道这个有没有用，等我问问服务器能不能删', {
            duration: 4000
          })
          return new Promise((resolve) => {
            setTimeout(() => {
              message.error('不行，他们也不许删这个')
              resolve(false)
            }, 4000)
          })
        }
      },
      handleFileListChange (value) {
        message.info('是的，file-list 的值变了')
      }
    }
  }
})
```
