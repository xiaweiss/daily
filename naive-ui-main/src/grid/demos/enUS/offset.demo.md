# Offset

```html
<n-grid :x-gap="12" :cols="4">
  <n-grid-item :offset="1">
    <div class="light-green"></div>
  </n-grid-item>
  <n-grid-item :offset="1">
    <div class="green"></div>
  </n-grid-item>
</n-grid>
```

```css
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
```
