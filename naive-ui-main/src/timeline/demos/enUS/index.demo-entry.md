# Timeline

The world is 2 demensioned. One of them is time. The Other is event.

## Demos

```demo
basic
size
item-placement
horizontal
customize-icon
```

## API

### Timeline Props

| Name           | Type                  | Default    | Description |
| -------------- | --------------------- | ---------- | ----------- |
| horizontal     | `boolean`             | `'false'`  | Horizontal  |
| item-placement | `'left' \| 'right'`   | `'left'`   | Direction.  |
| size           | `'medium' \| 'large'` | `'medium'` | Size.       |

### TimelineItem Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| color | `string` | `undefined` | Item color. |
| content | `string` | `undefined` | Item content. |
| icon-size | `number` | `undefined` | Size of icon part. |
| time | `string` | `undefined` | Item time. |
| title | `string` | `undefined` | Item title. |
| type | `'default' \| 'success' \| 'info' \| 'warning' \| 'error'` | `'default'` | Item type. |

### Timeline Slots

| Name    | Parameters | Description       |
| ------- | ---------- | ----------------- |
| default | `()`       | Timeline Content. |

### TimelineItem Slots

| Name    | Parameters | Description                                    |
| ------- | ---------- | ---------------------------------------------- |
| default | `()`       | Timeline item content.                         |
| icon    | `()`       | Timeline item customize timeline icon.         |
| footer  | `()`       | Content at the bottom of the timeline options. |
| header  | `()`       | Content at the top of the timeline options.    |
