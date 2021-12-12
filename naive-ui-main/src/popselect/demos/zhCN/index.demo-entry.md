# 弹出选择 Popselect

如果你想选择一些数据，还不想看到那个框子，可以使用 Popselect。

## 演示

```demo
basic
size
scrollable
multiple
```

## API

### Popselect Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| multiple | `boolean` | `false` | 是否为多选 |
| options | `Array<SelectOption \| SelectGroupOption>` | `[]` | 配置选项内容，详情参考 [Select](select#SelectOption-Properties) |
| scrollable | `boolean` | `false` | 选择菜单是否可滚动 |
| render-label | `(option: SelectOption \| SelectGroupOption) => VNodeChild` | `undefined` | 控制全部选项的渲染 |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | 组件尺寸 |
| value | `string \| number \| Array<string \| number> \| null` | `null` | 受控模式下的值 |
| on-update:value | `(value: string \| number \| Array<string \| number> \| null, option: SelectBaseOption \| null \| Array<SelectBaseOption>) => void` | `undefined` | 值更新的回调 |

对于 SelectOption & SelectGroupOption，参考 [Select](select#SelectOption-Properties)

对于其他 props，参考 [Popover](popover#Popover-Props)
