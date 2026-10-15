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
- [x] 聯絡 Email：建置時依 repo 注入（`VITE_CONTACT_EMAIL`），原始碼不寫死個人信箱
- [ ] **待你處理**：在需要不同信箱的 repo 設定 Actions 變數 `CONTACT_EMAIL`（Settings → Secrets and variables → Actions → Variables）
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

### 第二版：清線派漫畫冊（2026-10-15 改版）

- [x] 你的回饋：舊的「卷宗」風格想改成更現代的技術感；不新增流程或 FAQ 區塊
- [x] 保留：手繪頭像、勾選服務後寄信、作品類型篩選、暗黑模式切換
- [x] 方向決策：在選擇頁中你選了「清線漫畫」（均一黑線、平塗色、對話框與旁白框）
- [x] 方向契約更新在 `.impeccable/surfaces/index-html.md`
- [x] 開場：日光藍大格（城市天際線、起重機吊著網頁視窗）＋頭像特寫對話框＋三格條漫（設計稿 → 程式 → 多裝置上線）
- [x] 作品：依漫畫四層格線排的 8 格；類型篩選改成「符合的全彩加粗、其餘淡化」，版面不重排
- [x] 服務委託單、關於與技能、聯絡（紅綠郵筒）全部改成分格
- [x] 夜間版：同一冊的夜景（月亮、星星、窗戶點燈）
- [x] 所有插畫都是建置時產生的 SVG，線寬一律 2px，不用漸層與陰影
- [x] 桌機 1440 與手機 390、日夜兩種模式兩輪截圖檢查
- [x] 獨立設計審查（finish review）兩輪：夜間黑線與底色、頭像去背、移除標題上方標籤（「接案中」改成起重機上的紅色告示牌）、特寫不再放大失真、紅色只留給寄信與接案中、手機網址斷行，皆已修正
- [x] `DESIGN.md` 改寫成清線派漫畫冊（機器可讀版在 `.impeccable/design.json`）
- [x] 分享圖 `public/og.jpg` 換成新首屏
- [ ] **待你確認**：開場三格條漫與頭像對話框的文字是依你的自我介紹改寫的第一人稱句子，請看看語氣是否合適

### 第一版「卷宗」的已知小瑕疵

改版後裝訂條、No.01 卷宗等元件都已移除，以下項目不再適用。

- [x] ~~桌機裝訂背條離卷宗約 40px~~（已移除）
- [x] ~~裝訂條打孔間距像清單圓點~~（已移除）
- [x] ~~手機索引條沒有提示可以往右滑~~（已移除）
- [x] ~~開場下緣 No.01 卷宗漸層淡出~~（已移除）

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
- [x] 篩選按鈕用 `aria-pressed`，篩選結果用 live region 讀出；目前章節用 `aria-current`
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
