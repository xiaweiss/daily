# Check Strategy Debug

```html
<n-space vertical>
  <n-space>
    <n-radio-group v-model:value="checkStrategy">
      <n-radio-button value="all">All</n-radio-button>
      <n-radio-button value="parent">Parent</n-radio-button>
      <n-radio-button value="child">Child</n-radio-button>
    </n-radio-group>
    <n-switch v-model:value="checkable">
      <template #checked>Checkable</template>
      <template #unchecked>Unhheckable</template>
    </n-switch>
    <n-switch v-model:value="selectable">
      <template #checked>Selectable</template>
      <template #unchecked>Unselectable</template>
    </n-switch>
    <n-switch v-model:value="multiple">
      <template #checked>Multiple</template>
      <template #unchecked>Single</template>
    </n-switch>
    <n-switch v-model:value="cascade">
      <template #checked>Cascade</template>
      <template #unchecked>Uncascade</template>
    </n-switch>
  </n-space>
  <n-tree
    default-expand-all
    :selectable="selectable"
    :multiple="multiple"
    :cascade="cascade"
    :checkable="checkable"
    :check-strategy="checkStrategy"
    :data="options"
    :default-checked-keys="['Dig It', 'go']"
  />
</n-space>
```

```js
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      cascade: ref(false),
      multiple: ref(false),
      checkStrategy: ref('all'),
      checkable: ref(false),
      selectable: ref(false),
      options: [
        {
          label: 'Rubber Soul',
          key: 'Rubber Soul',
          children: [
            {
              label:
                "Everybody's Got Something to Hide Except Me and My Monkey",
              key: "Everybody's Got Something to Hide Except Me and My Monkey"
            },
            {
              label: 'Drive My Car',
              key: 'Drive My Car',
              disabled: true
            },
            {
              label: 'Norwegian Wood',
              key: 'Norwegian Wood'
            },
            {
              label: "You Won't See",
              key: "You Won't See",
              disabled: true
            },
            {
              label: 'Nowhere Man',
              key: 'Nowhere Man'
            },
            {
              label: 'Think For Yourself',
              key: 'Think For Yourself'
            },
            {
              label: 'The Word',
              key: 'The Word'
            },
            {
              label: 'Michelle',
              key: 'Michelle',
              disabled: true
            },
            {
              label: 'What goes on',
              key: 'What goes on'
            },
            {
              label: 'Girl',
              key: 'Girl'
            },
            {
              label: "I'm looking through you",
              key: "I'm looking through you"
            },
            {
              label: 'In My Life',
              key: 'In My Life'
            },
            {
              label: 'Wait',
              key: 'Wait'
            }
          ]
        },
        {
          label: 'Let It Be',
          key: 'Let It Be Album',
          children: [
            {
              label: 'Two Of Us',
              key: 'Two Of Us'
            },
            {
              label: 'Dig A Pony',
              key: 'Dig A Pony'
            },
            {
              label: 'Across The Universe',
              key: 'Across The Universe',
              children: [
                {
                  label: 'Dig It',
                  key: 'Dig It'
                },
                {
                  label: 'go',
                  key: 'go'
                }
              ]
            }
          ]
        }
      ],
      handleUpdateValue: (values) => {
        console.log(values)
      }
    }
  }
})
```
