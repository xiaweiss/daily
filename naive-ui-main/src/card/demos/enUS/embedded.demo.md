# Embedded effect

In light mode, sometimes you may need to make background a bit darker to distinguish card from white background.

```html
<n-card title="🎸 Rock N' Roll Star" embedded :bordered="false"
  >Tonight I'm a rock 'n' roll star
  <br />
  Tonight I'm a rock 'n' roll star</n-card
>
```

```css
.n-card {
  max-width: 300px;
}
```
