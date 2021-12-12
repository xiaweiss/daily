# Spin

It could've been called `loading`, but why is it called `spin`? Because there is another internal component with less props already named `loading`.

## Demos

```demo
basic
wrap
description
customize-icon
```

## API

### Spin Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| description | `string` | `undefined` | Description of the spin. |
| rotate | `boolean` | `true` | Specify whether icon rotates, only working for custom icon. |
| size | `'small' \| 'medium' \| 'large' \| number` | `'medium'` | Size of the spin. |
| show | `boolean` | `true` | Specify whether spin is active. |
| stroke-width | `number` | `undefined` | Relative width of spin's stroke, assuming the outer radius of spin is 100. |
| stroke | `string` | `undefined` | Color of the spin. |

### Spin Slots

| Name        | Parameters | Description                         |
| ----------- | ---------- | ----------------------------------- |
| default     | `()`       | If set, spin will wrap the content. |
| description | `()`       | Description of the spin.            |
| icon        | `()`       | Customize the spin icon.            |
