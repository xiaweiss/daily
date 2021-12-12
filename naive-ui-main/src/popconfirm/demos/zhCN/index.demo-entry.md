# 弹出确认 Popconfirm

一个确认，弹出来的。

## 演示

```demo
basic
custom-action
custom-icon
event
no-icon
actions
```

## API

### Popconfirm Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| negative-text | `string` | `'取消'` | 取消按钮文字 |
| positive-text | `string` | `'确认'` | 确定按钮文字 |
| show-icon | `boolean` | `true` | 是否显示图标 |
| on-positive-click | `() => boolean \| Promise<boolean> \| any` | `undefined` | 点击确定的回调函数 |
| on-negative-click | `() => boolean \| Promise<boolean> \| any` | `undefined` | 点击取消的回调函数 |

更多 props 请参考 [Popover](popover#Popover-Props).

### Popconfirm Slots

| 名称    | 参数 | 说明           |
| ------- | ---- | -------------- |
| action  | `()` | 自定义操作     |
| default | `()` | 弹出确认的内容 |
| icon    | `()` | 弹出确认的图标 |
