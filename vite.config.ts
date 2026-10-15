import { defineConfig, loadEnv, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { createSlots } from './src/data/render.ts'
import { icon, type IconName } from './src/data/icons.ts'

/**
 * 把 index.html 裡的 <!--slot:名稱--> 與 <!--icon:名稱--> 換成建置時渲染好的 HTML。
 * 用 order: 'pre' 讓 Vite 之後還能處理注入內容裡的圖片路徑（加上 base）。
 */
function contentSlots(email: string, owner: string): Plugin {
  const slots = createSlots({ email, owner })
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
  // 聯絡 Email 與網址依建置環境決定：GitHub Actions 變數 > .env.local > .env
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const email = env.VITE_CONTACT_EMAIL?.trim()
  if (!email) throw new Error('缺少聯絡 Email：請在 .env 或環境變數設定 VITE_CONTACT_EMAIL')
  // 部署所在的 GitHub 帳號，取自 https://<帳號>.github.io/liang/，作品 Demo 與 GitHub 連結都用它
  const owner = new URL(env.VITE_SITE_URL ?? '').hostname.split('.')[0]
  if (!owner) throw new Error('VITE_SITE_URL 必須是 https://<帳號>.github.io/liang/ 的格式')

  return {
    // GitHub Pages 專案頁：https://<帳號>.github.io/liang/
    base: '/liang/',
    plugins: [contentSlots(email, owner), tailwindcss()],
    build: {
      target: 'es2022',
    },
  }
})
