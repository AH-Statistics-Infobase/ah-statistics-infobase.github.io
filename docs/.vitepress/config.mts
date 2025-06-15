import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AH Statistics",
  description: "Infobase",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Course notes', link: '/test-notes' },
       { text: 'Useful links', link: '/useful-links' }
    ],

    sidebar: [
      {
        text: 'Notes',
        items: [
          { text: 'Statistical test notes', link: '/test-notes' },
          { text: 'Other notes', link: '/other-notes' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AH-Statistics-Infobase/ah-statistics-infobase.github.io/' }
    ]
  }
})
