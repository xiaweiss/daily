# Select

Select something!

## Demo

```demo
basic
size
multiple
events
filterable
tag
menu-width
remote
remote-multiple
clearable
scroll-event
group
many-options
custom-option
action
fallback-option
max-tag-count
add-tooltip
render-tag
render-person
```

## API

### Select Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| consistent-menu-width | `boolean` | `true` | Whether the menu keeps its width the same as the select trigger element. Setting it to `false` will also disable `virtual-scroll`. |
| clearable | `boolean` | `false` | Whether the value is clearable. |
| default-value | `Array<string \| number> \| string \| number \| null` | `null` | Default value. |
| disabled | `boolean` | `false` | Whether to disable the select. |
| fallback-option | `false \| (value: string \| number) => SelectOption` | `value => ({ label: '' + value, value })` | The option to be created using the value which has no corresponding option value. If set to `false`, the fallback option won't be created and displayed. |
| filterable | `boolean` | `false` | Whether options can be filtered. |
| filter | `(pattern: string, option: Object) => boolean` | String search method. | Filter function. |
| input-props | `HTMLInputAttributes` | `undefined` | The attributes of input element in the trigger. It only works when the select is filterable. |
| loading | `boolean` | `false` | Whether to show a loading state. |
| max-tag-count | `number \| 'responsive'` | `undefined` | Maximum selected values to display while in `multiple` mode. `responsive` will keep all the tags in single line. |
| menu-props | `HTMLAttributes` | `undefined` | The menu's dom props. |
| multiple | `boolean` | `false` | Whether to allow selecting multiple values. |
| options | `Array<SelectOption \| SelectGroupOption>` | `[]` | Options that can be selected. For more details see SelectOption Properties (below). |
| placeholder | `string` | `'Please Select'` | Placeholder. |
| remote | `boolean` | `false` | Allows options to be fetched asynchronously. Note that if `remote` is set, `filter` & `tag` won't work on `options`. |
| render-label | `(option: SelectOption \| SelectGroupOption, selected: boolean) => VNodeChild` | `undefined` | Render function for each option label. |
| render-option | `(info: { node: VNode, option: SelectOption \| SelectGroupOption, selected: boolean } }` | `undefined` | Render function for each option. |
| render-tag | `(option: SelectBaseOption, onClose: () => void) => VNodeChild` | `undefined` | Render function for each option tag. |
| show | `boolean` | `undefined` | Whether to show/open the option menu. |
| show-arrow | `boolean` | `true` | Whether to show the dropdown arrow. |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the select input. |
| tag | `boolean` | `false` | Whether users can create new options. This should be used with `filterable`. |
| value | `Array<string \| number> \| string \| number \| null` | `undefined` | Value when being manually set. |
| virtual-scroll | `boolean` | `true` | Whether to enable virtual scrolling. |
| on-blur | `() => void` | `undefined` | Callback triggered when the selection element is blurred. |
| on-clear | `() => void` | `undefined` | Callback triggered when the selection element is cleared. |
| on-create | `(label: string) => SelectOption` | `label => ({ label, value: label })` | How to create an option when you type in a custom option. Note that `filter` will be applied to the created option too. And you'd better make sure that the value of the created option is not the same as any other option. |
| on-focus | `() => void` | `undefined` | Callback triggered when the selection element is focussed on. |
| on-scroll | `(e: ScrollEvent) => void` | `undefined` | Callback triggered when the options menu is scrolled. |
| on-search | `(value: string) => void` | `undefined` | Callback triggered when a search is conducted. |
| on-update:value | `(value: Array \| string \| number \| null, option: SelectBaseOption \| null \| SelectBaseOption[]) => void` | `undefined` | Callback triggered when the selected value is updated. |

### SelectOption Properties

| Name | Type | Description |
| --- | --- | --- |
| class | `string` | Customize the option's class. |
| disabled | `boolean` | Whether to disable the option. |
| label | `string \| ((option: SelectOption, selected: boolean) => VNodeChild)` | Label of the option. Note that if you are using the `render` function, the default filter will filter the option. |
| render | `(info: { node: VNode }) => VNodeChild` | Render the entire option. |
| style | `string` | Customize the option's style. |
| value | `string \| number` | Should be unique for each option. |

### SelectGroupOption Properties

| Name | Type | Description |
| --- | --- | --- |
| children | `Array<SelectOption>` | Child select options. |
| label | `string \| ((option: SelectGroupOption) => VNodeChild)` | Label of the group. |
| key | `string \| number` | Should be unique for each option. |
| render | `(info: { node: VNode }) => VNodeChild` | Render the entire option. |
| type | `'group'` | Type of the group option. |

### Select Slots

| Name   | Parameters | Description                            |
| ------ | ---------- | -------------------------------------- |
| action | `()`       | Options menu slot.                     |
| empty  | `()`       | Empty state slot for the options menu. |
