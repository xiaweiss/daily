<!--single-column-->

# Calendar

How time flies.

## Demos

```demo
basic
```

## API

### Calendar Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| default-value | `number` | `null` | Default selected date's timestamp. |
| is-date-disabled | `(timestamp: number) => boolean` | `undefined` | Validator of the date. |
| value | `number \| null` | `undefined` | Selected date's timestamp. |
| on-update:value | `(timestamp: number, { year: number, month: number, date: number }) => void` | `undefined` | Callback when date is selected. |

## Calendar Slots

| Name | Parameters | Description |
| --- | --- | --- |
| default | `({ year: number, month: number, date: number })` | Content to be rendered in each date. |
