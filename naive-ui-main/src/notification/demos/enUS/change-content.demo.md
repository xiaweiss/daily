# Change Content Dynamically

You can change any parts of notifications existed.

```html
<n-space>
  <n-button @click="open"> Open it </n-button>
  <n-button @click="change" :disabled="!n"> Change it </n-button>
</n-space>
```

```js
import { h, ref, defineComponent } from 'vue'
import { NAvatar, useNotification } from 'naive-ui'

export default defineComponent({
  setup () {
    const notification = useNotification()
    const nRef = ref(null)
    return {
      n: nRef,
      open () {
        nRef.value = notification.create({
          title: "Wouldn't it be Nice",
          description: 'From the Beach Boys',
          content: `Wouldn't it be nice if we were older
Then we wouldn't have to wait so long
And wouldn't it be nice to live together
In the kind of world where we belong
You know its gonna make it that much better
When we can say goodnight and stay together
Wouldn't it be nice if we could wake up
In the morning when the day is new
And after having spent the day together
Hold each other close the whole night through`,
          meta: '2019-5-27 15:11',
          avatar: () =>
            h(NAvatar, {
              size: 'small',
              round: true,
              src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
            }),
          onClose: () => {
            nRef.value = null
          }
        })
      },
      change () {
        if (nRef.value) {
          nRef.value.content = () =>
            h('img', {
              src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
              style: 'width: 100%;'
            })
        }
      }
    }
  }
})
```
