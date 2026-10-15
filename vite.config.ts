import { defineConfig, loadEnv, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { createSlots } from './src/data/render.ts'
import { icon, type IconName } from './src/data/icons.ts'

/**
 * 把 index.html 裡的 <!--slot:名稱--> 與 <!--icon:名稱--> 換成建置時渲染好的 HTML。
 * 用 order: 'pre' 讓 Vite 之後還能處理注入內容裡的圖片路徑（加上 base）。
 */
function contentSlots(email: string): Plugin {
  const slots = createSlots({ email })
  return {
    name: 'liang:content-slots',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html
          .replace(/<!--slot:([\w-]+)-->/g, (match, name: string) => {
            const render = slots[name]
            if (!render) throw new Error(`index.html 有未定義的 slot：${match}`)
            return render()
          })
          .replace(/<!--icon:(\w+)-->/g, (_match, name: string) => icon(name as IconName))
      },
    },
  }
}

export default defineConfig(({ mode }) => {
  // 聯絡 Email 依建置環境決定：GitHub Actions 變數 > .env.local > .env
  const email = loadEnv(mode, process.cwd(), 'VITE_').VITE_CONTACT_EMAIL?.trim()
  if (!email) throw new Error('缺少聯絡 Email：請在 .env 或環境變數設定 VITE_CONTACT_EMAIL')

  return {
    // GitHub Pages 專案頁：https://<帳號>.github.io/liang/
    base: '/liang/',
    plugins: [contentSlots(email), tailwindcss()],
    build: {
      target: 'es2022',
    },
  }
})
