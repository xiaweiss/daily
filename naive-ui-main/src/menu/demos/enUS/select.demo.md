# Select & Routing

Use `@update:value` to listen to the select action of the menu. The first argument of the callback is the `key` of the selected menu item. The second is the orginal data of the menu item.

Usually you can use vue-router here to accomplish routing. Also, you can render `label` as `<router-link />` or `<a />` to set route.

```html
<n-menu @update:value="handleUpdateValue" :options="menuOptions" />
```

```js
import { defineComponent, h, resolveComponent } from 'vue'
import { NIcon, useMessage } from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  HomeOutline as HomeIcon
} from '@vicons/ionicons5'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () =>
      h(
        resolveComponent('router-link'),
        {
          to: {
            name: 'home',
            params: {
              lang: 'en-US'
            }
          }
        },
        { default: () => 'Going Home' }
      ),
    key: 'go-back-home',
    icon: renderIcon(HomeIcon)
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://en.wikipedia.org/wiki/Hear_the_Wind_Sing',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        'Hear the Wind Sing'
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Pinball 1973',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: 'Rat',
        key: 'rat'
      }
    ]
  },
  {
    label: 'A Wild Sheep Chase',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Dance Dance Dance',
    key: 'Dance Dance Dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: 'People',
        key: 'people',
        children: [
          {
            label: 'Narrator',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: 'Sheep Man',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: 'Beverage',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: 'Whisky',
            key: 'whisky'
          }
        ]
      },
      {
        label: 'Food',
        key: 'food',
        children: [
          {
            label: 'Sandwich',
            key: 'sandwich'
          }
        ]
      },
      {
        label: 'The past increases. The future recedes.',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

export default defineComponent({
  setup () {
    const message = useMessage()
    return {
      menuOptions,
      handleUpdateValue (key, item) {
        message.info('[onUpdate:value]: ' + JSON.stringify(key))
        message.info('[onUpdate:value]: ' + JSON.stringify(item))
      }
    }
  }
})
```
