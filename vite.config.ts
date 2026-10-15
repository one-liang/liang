import { defineConfig, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { htmlSlots } from './src/data/render.ts'
import { icon, type IconName } from './src/data/icons.ts'

/**
 * 把 index.html 裡的 <!--slot:名稱--> 與 <!--icon:名稱--> 換成建置時渲染好的 HTML。
 * 用 order: 'pre' 讓 Vite 之後還能處理注入內容裡的圖片路徑（加上 base）。
 */
function contentSlots(): Plugin {
  return {
    name: 'liang:content-slots',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html
          .replace(/<!--slot:([\w-]+)-->/g, (match, name: string) => {
            const render = htmlSlots[name]
            if (!render) throw new Error(`index.html 有未定義的 slot：${match}`)
            return render()
          })
          .replace(/<!--icon:(\w+)-->/g, (_match, name: string) => icon(name as IconName))
      },
    },
  }
}

export default defineConfig({
  // GitHub Pages 專案頁：https://sololiang923.github.io/liang/
  base: '/liang/',
  plugins: [contentSlots(), tailwindcss()],
  build: {
    target: 'es2022',
  },
})
