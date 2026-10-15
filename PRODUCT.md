# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + TypeScript + GSAP + Tailwind CSS（使用者指定）。靜態輸出，部署在 GitHub Pages：`https://one-liang.github.io/liang/`（base path `/liang/`）。舊版 Vue 3 + Vite 2 專案已完整備份至私人 repo `one-liang/liang-backup`。

## Users

- **直接發案的品牌與中小企業**：多半不是技術背景，要判斷「這個人做得出我要的網站嗎、可以信任嗎、怎麼聯絡」。
- **接案平台上的案主**：從平台點連結進來，停留時間短，快速掃過作品與服務項目就決定要不要發案。

兩者共同的工作：在幾分鐘內看懂阿良能做什麼、看到真實上線作品、找到聯絡方式。

## Product Purpose

阿良（One Liang）的個人接案作品集，一頁式。讓潛在客戶看到真實作品、理解提供的服務，最後以 Email 聯絡。成功的定義是：來訪者點開至少一個作品 demo，並按下聯絡。

## Positioning

能獨立完成「設計稿 → 上線」整段前端工作的工程師：熟悉 Figma、Zeplin、Adobe XD 協作，處理 RWD 與跨裝置相容、API 串接、CSR/SSR 架構、動畫特效、a11y 無障礙與 SEO 基礎。實務經驗涵蓋品牌官網、一頁式活動頁、形象網站、電商平台。

## Operating Context

- 客戶通常在桌機或手機上打開連結，邊看邊比較其他接案者。
- 作品以「真實網址 + 截圖」呈現；部分原網站已下架，改用 GitHub Pages 備份版 demo：
  - 食農知味 → `https://one-liang.github.io/farmerstation/`
  - 香奈兒腕錶形象頁 → `https://one-liang.github.io/iWatcHome/`
- 報價不公開：依專案需求、功能複雜度、設計細節、時程與技術深度客製化評估。

## Capabilities and Constraints

**服務項目（來自 Notion）**

- 切版開發：一頁式活動頁、多頁式網站、響應式設計 (RWD)、互動式網頁應用
- 功能開發：串接後端 API、前端驗證（表單、欄位）、簡易視差滾動／動畫效果
- 其他服務：搜尋引擎優化 (SEO) 策略與實作、無障礙網頁規範、Google Analytics / GTM 整合

**技能（來自 Notion）**：HTML5、Pug、CSS3、SCSS、RWD、BEM、JavaScript、TypeScript、Vue、Nuxt、Vite、Tailwind CSS、Bootstrap 4、a11y
**工具**：Git、GitHub、GitLab、Bitbucket

**限制**

- 一頁式，單一路由。
- 不放工作經歷時間軸（使用者決定）。
- 不放價目表。

## Brand Commitments

- 名稱：阿良 / One Liang / Liang。
- 自我介紹語氣：直白、務實、第一人稱「我」，繁體中文。
- 頭像：手繪插畫風格的自畫像（灰髮、圓眼鏡、拿書的烏龜、魔杖），來源 Notion，存於 `src/assets/images/avatar.png`。
- 聯絡 Email：`sololiang923@gmail.com`（使用者確認公開）。

## Evidence on Hand

真實作品 8 件，截圖來自 Notion 封面（`src/assets/images/works/`）：

| 作品 | 類型 | 網址 | 技術 |
|---|---|---|---|
| 香奈兒腕錶形象頁 | 一頁式 | one-liang.github.io/iWatcHome/ | HTML5、Pug、SCSS、Tailwind CSS、AOS、JavaScript |
| 食農知味 | 形象網站 | one-liang.github.io/farmerstation/ | HTML5、Pug、SCSS、Tailwind CSS、JavaScript |
| Mook | 一頁式 | www.mook.com.tw | HTML5、Pug、SCSS、Tailwind CSS、AOS、JavaScript |
| 景點+ | 部落格 | www.mook.com.tw/travelplus | HTML5、Pug、SCSS、Tailwind CSS、JavaScript |
| 全國電子 | 電商網站 | ec.elifemall.com.tw | SCSS、Tailwind CSS、JavaScript、Vue、Nuxt |
| 橘焱胡同 | 電商網站 | www.gyenshop.com.tw | HTML5、Pug、SCSS、Tailwind CSS、JavaScript |
| 鏡好聽 | 形象網站 | www.mirrorvoice.com.tw | CSS3、Tailwind CSS、JavaScript、Vue、Nuxt |
| 鏡文學 | 形象網站 | www.mirrorfiction.com | CSS3、SCSS、Bootstrap 4、JavaScript、Vue |

- 作品簡述：Notion 沒有，由 Claude 依類型與技術草擬，**待使用者確認**（見 CHECKLIST.md）。
- 沒有客戶推薦、合作品牌 logo 授權、數據成效、價目。不得捏造。

## Product Principles

1. **作品先說話**：真實上線作品與可點的 demo 是最強的證據，排在任何形容詞之前。
2. **非技術客戶也看得懂**：服務用「你會得到什麼」描述，技術名詞當輔助標籤。
3. **聯絡永遠一步可達**：任何位置都能在一個動作內找到 Email。
4. **頁面本身就是作品**：這頁的 RWD、動畫、無障礙與效能，就是給客戶的現場示範。

## Accessibility & Inclusion

- 目標 WCAG 2.2 AA：色彩對比、鍵盤可操作、可見焦點、跳至主要內容連結、語意化標記、`lang="zh-Hant-TW"`。
- 尊重 `prefers-reduced-motion`：GSAP 動畫在減少動態時停用或改為瞬間呈現。
- 淺色模式為預設，提供暗黑模式切換，並記住使用者選擇。
