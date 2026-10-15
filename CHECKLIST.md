# 進度確認清單

給阿良與 Claude 共用的進度表。完成就打勾 `[x]`；標「待你確認」的項目需要阿良本人看過。

最後更新：2026-10-15

## 一、專案與備份

- [x] 原專案（Vue 3 + Vite 2）另外完整備份（master、develop、gh-pages 三個分支都在）
- [x] `develop` 同步到 `master` 最新狀態後，從 `develop` 開 `feature/onepage-portfolio`
- [x] 移除舊的 Vue 程式碼，改用 Vite 8 + TypeScript + GSAP + Tailwind CSS 4

## 二、內容（來源：Notion「Liang」頁面）

- [x] 自我介紹三段文字
- [x] 提供服務：切版開發／功能開發／其他服務，以及報價說明
- [x] 技能與工具（技能、方法、工具三組）
- [x] 8 件作品：名稱、類型、技術標籤、網址、截圖
- [x] 食農知味改連 `https://sololiang923.github.io/farmerstation/`（原站已過期）
- [x] 香奈兒腕錶形象頁改連 `https://sololiang923.github.io/iWatcHome/`（原站已過期）
- [x] 頭像插畫（Notion 圖檔，已轉 WebP）
- [x] 聯絡 Email：sololiang923@gmail.com
- [ ] **待你確認**：6 則作品簡述是 Claude 依類型與技術草擬的，請逐一確認或改寫（在 `src/data/content.ts`，`draft: true` 的那幾件）
  - [ ] 香奈兒腕錶形象頁
  - [ ] 食農知味
  - [ ] Mook
  - [ ] 景點+
  - [ ] 全國電子
  - [ ] 橘焱胡同
- [x] 鏡好聽、鏡文學的簡述沿用舊站你自己寫的文字
- [ ] **待你確認**：截圖是否要換成更新的版本（目前用 Notion 封面圖）
- [ ] **待你提供（選用）**：其他聯絡管道（LINE、IG、接案平台個人頁）

## 三、設計（/impeccable）

- [x] `/impeccable init`：建立 `PRODUCT.md`（客群、定位、限制、證據）
- [x] 視覺方向：「卷宗」接案檔案夾（壓板綠桌面、牛皮紙卷宗、打字欄位、朱紅印章、手寫標註）
- [x] 方向契約記錄在 `.impeccable/surfaces/index-html.md`
- [x] 開場：攤開的卷宗封面＋頭像（不主導風格）＋「接案中」章＋第一屏就能寄信
- [x] 作品：8 份卷宗、類型篩選、裝訂條索引、截圖手寫標註
- [x] 服務委託單：勾選項目後直接開好一封整理過的 Email，也能複製內容
- [x] 桌機 1440 與手機 390 兩輪截圖檢查
- [x] 設計偵測器（impeccable detect）掃描並修正對比、巢狀卡片、裝飾條紋
- [x] 獨立的最終設計審查（finish review）：兩輪，8 項重大修正中 6 項完全解決
- [x] 依你的決定先發佈，下列 4 個小瑕疵留待之後修
- [x] `DESIGN.md` 設計系統文件（色票、字體、圓角、間距、元件與規則；機器可讀版在 `.impeccable/design.json`）

### 已知的小瑕疵（之後再修）

- [ ] 桌機裝訂背條是獨立的一欄，離卷宗約 40px，還不像真的裝在卷宗上
- [ ] 裝訂條的打孔間距和項目沒對齊，看起來像清單圓點
- [ ] 手機索引條只看得到 No.01–05，沒有提示 No.06–08 可以往右滑
- [ ] 開場下緣的 No.01 卷宗用漸層淡出（真的紙不會淡出），而且下方作品區又出現一次 No.01 標籤

## 四、暗黑模式

- [x] 預設淺色模式
- [x] 頁首「夜間模式／日間模式」切換按鈕，記住使用者選擇（localStorage）
- [x] 繪製前套用主題，切換不閃爍
- [x] 暗色版本的色票全部重新驗證對比

## 五、無障礙（WCAG 2.2 AA）

- [x] `lang="zh-Hant-TW"`、語意化標記（header／nav／main／section／article／footer、dl 欄位）
- [x] 「跳至主要內容」連結
- [x] 所有互動元件可用鍵盤操作，焦點框清楚可見（綠底用黃色、紙面用深藍）
- [x] 文字對比 ≥ 4.5:1（大字 ≥ 3:1），淺色與暗色都驗證
- [x] 圖片都有替代文字，裝飾性 SVG 加 `aria-hidden`
- [x] 篩選結果、複製成功、委託單狀態用 live region 通知螢幕報讀器
- [x] 篩選按鈕用 `aria-pressed`，目前區塊與卷宗用 `aria-current`
- [x] 外部連結標示「另開新視窗」
- [x] `prefers-reduced-motion`：減少動態時關閉所有 GSAP 動畫，內容預設可見
- [ ] **建議你自己試一次**：用鍵盤 Tab 走完整頁、用 NVDA 或 VoiceOver 聽一遍

## 六、SEO 與分享

- [x] title、description、canonical
- [x] Open Graph／Twitter 分享圖（`public/og.jpg`，1200×630）
- [x] JSON-LD（Person）結構化資料
- [x] 內容在建置時輸出成靜態 HTML，不需要 JavaScript 也看得到全部作品

## 七、部署與 Git Flow

- [x] GitHub Actions：推到 `master` 自動建置，以 `actions/deploy-pages` 發佈
- [x] og:url 等網址由 workflow 設定（`VITE_SITE_URL`），canonical 指向 https://sololiang923.github.io/liang/
- [x] Pages 來源設為 GitHub Actions，github-pages 環境允許 `master` 部署
- [x] commit 訊息使用繁體中文 `<類型>: <說明>`
- [x] `feature/onepage-portfolio` 以 `--no-ff` 合回 `develop`，刪除分支
- [x] `release/2.0.0` 合回 `master` 與 `develop`，打 tag `v2.0.0`
- [x] 確認 https://sololiang923.github.io/liang/ 上線正常（頁面、圖片、分享圖皆回應 200）

## 八、作品 Demo 搬移

- [x] 香奈兒腕錶形象頁 Demo 上線在 https://sololiang923.github.io/iWatcHome/
- [x] 食農知味 Demo 上線在 https://sololiang923.github.io/farmerstation/
