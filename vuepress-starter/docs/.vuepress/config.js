module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  // themeConfig: {
  //   // 侧边栏数组
  //   // 所有页面会使用相同的侧边栏
  //   sidebar: [
  //     // SidebarItem
  //     {
  //       text: 'Foo',
  //       link: '/foo/',
  //       children: [
  //         // SidebarItem
  //         {
  //           text: 'github',
  //           link: 'https://github.com',
  //           children: [],
  //         },
  //         // 字符串 - 页面文件路径
  //         '/foo/bar.md',
  //       ],
  //     },
  //     // 字符串 - 页面文件路径
  //     '/bar/README.md',
  //   ],
  // },
  themeConfig: {
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          // children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    },
  },
}