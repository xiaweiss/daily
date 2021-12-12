<!--anchor:on-->

# Installation

> Please note that naive-ui only support Vue3. If you are using Vue2, you may look at other libraries.

Use npm to install.

```bash
npm i -D naive-ui
```

## Fonts

```bash
npm i -D vfonts
```

## Icons

naive-ui recommends using [xicons](https://www.xicons.org) as icon library.

## Design Resources

<n-card size="small" footer-style="text-align: center;" style="width: 420px; max-width: 100%;">
  <template #cover>
    <img src="https://naive-ui.oss-accelerate.aliyuncs.com/naive-design.png">
  </template>
  <template #footer>
    <n-button
      tag="a"
      href="https://naive-ui.oss-accelerate.aliyuncs.com/NaiveUI-Design-Library%28Square-Corner%29.sketch"
      text
      target="_blank"
      icon-placement="right"
    >
      Naive UI (Sketch)
      <template #icon>
        <n-icon >
          <ArrowDownload16Regular />
        </n-icon>
      </template>
    </n-button>
  </template>
</n-card>

```component
ArrowDownload16Regular: import ArrowDownload16Regular from '@vicons/fluent/ArrowDownload16Regular'
```
