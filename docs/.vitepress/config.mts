import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AH Statistics",
  description: "Infobase",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Course notes', link: '/test-notes' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Test Notes', link: '/test-notes' },
          { text: 'Other notes', link: '/other-notes' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AH-Statistics-Infobase/ah-statistics-infobase.github.io/' }
    ]
  }
})
