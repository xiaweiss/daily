# Use NA with Router Link

You can use `<n-a />` for links and routes.

If you think the following method is a little verbose for routes, you can always make it a new component.

```html
<router-link to="/" #="{ navigate, href }" custom>
  <n-a :href="href" @click="navigate">Back Home</n-a>
</router-link>
```
