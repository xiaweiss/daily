# 进度 Progress

不知道说点啥，但是还是得写点东西，让这个页面看起来舒展一点。

## 演示

```demo
circle
line
multiple-circle
custom-indicator
color
no-indicator
height
processing
```

## API

### Progress Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| border-radius | `number \| string` | `undefined` | `'line'` 类型进度条的圆角半径，不填写则维持高度的一半 |
| circle-gap | `number` | `1` | 当类型是 `'multiple-circle'` 的时候圈之间的距离，假设 `viewbox` 的尺寸是 `100` |
| color | `string \| string[]` | `undefined` | 进度条颜色 |
| fill-border-radius | `number \| string` | `undefined` | `'line'` 类型进度条填充的圆角半径，不填写则维持 `border-radius` |
| height | `number` | `undefined` | `'line'` 类型进度条的高度，不填写则维持默认高度 |
| indicator-placement | `'inside' \| 'inside-label' \| 'outside'` | `'outside'` | 设置指标位置 |
| indicator-text-color | `string` | `undefined` | 指标文本颜色 |
| percentage | `number \| Array<number>` | `0` | 百分比的值 |
| processing | `boolean` | `false` | 处理中状态 |
| rail-color | `string \| string[]` | `undefined` | 轨道的颜色 |
| rail-style | `string \| CSS \| Array<string \| CSS>` | `undefined` | 轨道的对象 |
| show-indicator | `boolean` | `true` | 是否显示指标 |
| status | `'default' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'default'` | 进度条状态 |
| stroke-width | `number` | `7` | 进度条宽度 |
| type | `'line' \| 'circle' \| 'multiple-circle'` | `line` | 进度条类型 |
| unit | `string` | `%` | 进度条单位 |

### Progress Slots

| 名称    | 参数 | 说明           |
| ------- | ---- | -------------- |
| default | `()` | 指示标里的内容 |
