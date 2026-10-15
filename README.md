# 阿良 One Liang｜接案作品集

**👉 線上 Demo：[本 repo 的 GitHub Pages](../../deployments/github-pages)**（網址是 `https://<GitHub 帳號>.github.io/liang/`）

前端工程師阿良的一頁式接案作品集：把設計稿做成能上線、會互動的網站。頁面是一本清線派（ligne claire）漫畫冊：均一黑線、平塗色、白色對話框與黃色旁白框，整理 8 件真實上線作品、服務項目、技能與聯絡方式，方便直接給客戶看。

![作品集首屏：日光藍的開場大格裡，起重機吊著一個網頁視窗，大標「把設計稿，做成會動的網站。」](public/og.jpg)

## 作品 Demo

| No. | 作品 | 類型 | 連結 |
|---|---|---|---|
| 01 | 香奈兒腕錶形象頁 | 一頁式 | [iWatcHome](../../../iWatcHome)（原站已下線，同帳號的 GitHub Pages 備份版） |
| 02 | 食農知味 | 形象網站 | [farmerstation](../../../farmerstation)（原站已下線，同帳號的 GitHub Pages 備份版） |
| 03 | Mook | 一頁式 | [mook.com.tw](https://www.mook.com.tw/) |
| 04 | 景點+ | 部落格 | [mook.com.tw/travelplus](https://www.mook.com.tw/travelplus) |
| 05 | 全國電子 | 電商網站 | [ec.elifemall.com.tw](https://ec.elifemall.com.tw/) |
| 06 | 橘焱胡同 | 電商網站 | [gyenshop.com.tw](https://www.gyenshop.com.tw/) |
| 07 | 鏡好聽 | 形象網站 | [mirrorvoice.com.tw](https://www.mirrorvoice.com.tw/) |
| 08 | 鏡文學 | 形象網站 | [mirrorfiction.com](https://www.mirrorfiction.com/) |

聯絡方式見網站最後的「聯絡」格（Email 依部署的 repo 在建置時注入，見下方「部署」）。

## 功能

- **一頁式漫畫冊**：開場大格與三格條漫 → 作品 → 服務委託單 → 關於與技能 → 聯絡，頁首導覽可直接跳轉
- **作品類型標示**：依「一頁式／形象網站／電商網站／部落格」標出作品，符合的分格保持全彩、線條加粗，其餘淡化，版面不重排
- **服務委託單**：勾選需要的服務，按下就開好一封整理過的 Email，也能一鍵複製內容
- **暗黑模式**：預設淺色，頁首可切換並記住選擇；夜間版是同一冊的夜景（月亮、星星、大樓窗戶點燈）
- **無障礙**：鍵盤可操作、可見焦點、跳至主要內容、live region 通知、尊重「減少動態」設定，色彩對比符合 WCAG AA
- **SEO**：內容在建置時輸出為靜態 HTML，含 Open Graph 分享圖與 JSON-LD

## 技術

- [Vite 8](https://vite.dev/) — 開發與建置，自訂外掛在建置時把內容渲染進 `index.html`
- [TypeScript](https://www.typescriptlang.org/) — 所有互動腳本與內容資料
- [GSAP](https://gsap.com/)（ScrollTrigger）— 分格依閱讀順序硬切出現、起重機用定格動畫吊進網頁視窗
- [Tailwind CSS 4](https://tailwindcss.com/) — 設計 token（`@theme`）、暗黑模式變體與元件樣式

## 開發

需要 Node.js 20.19 以上（建議 24）。

```bash
npm install
```

```bash
npm run dev
```

開發伺服器在 http://localhost:5173/liang/

```bash
npm run build
```

會先做型別檢查，輸出到 `dist/`；`npm run preview` 可預覽建置結果。

## 專案結構

```
index.html               頁面骨架；<!--slot:…--> 在建置時換成內容
vite.config.ts           base 路徑 /liang/ 與內容注入外掛
src/
  data/content.ts        所有文字內容：作品、服務、技能（要改內容改這裡）
  data/render.ts         把內容渲染成 HTML
  data/art.ts            清線派 SVG 插畫（城市、起重機、條漫、服務圖、郵筒）
  data/icons.ts          自繪 SVG 圖示
  scripts/               主題切換、導覽、篩選、委託單、複製、GSAP 動態；email.ts 讀取建置時注入的聯絡信箱
  styles/main.css        色票、分格、對話框、旁白框與所有元件樣式
public/images/           頭像與作品截圖（WebP，720／1440 兩種寬度）
PRODUCT.md               產品定位與內容來源（/impeccable init 產出）
DESIGN.md                設計系統：色票、字體、元件與規則
CHECKLIST.md             進度確認清單
```

### 更新作品

1. 截圖放到 `public/images/works/`，檔名 `<代號>-720.webp`、`<代號>-1440.webp`（寬 2:1）
2. 在 `src/data/content.ts` 的 `WORKS` 加一筆資料
3. `npm run build` 確認沒問題後依 Git Flow 發佈

## 部署

推到 `master` 時，GitHub Actions（`.github/workflows/deploy.yml`）會型別檢查、建置，並用官方的 `actions/deploy-pages` 發佈到該帳號的 `https://<GitHub 帳號>.github.io/liang/`。

- 第一次使用前，到 **Settings → Pages → Source** 選 **GitHub Actions**；預設分支要是 `master`。
- 如果部署出現「Branch "master" is not allowed to deploy to github-pages」，到 **Settings → Environments → github-pages → Deployment branches and tags** 加入 `master` 規則，再重跑失敗的 workflow。
- og:url、canonical、分享圖與結構化資料的網址由 workflow 設定 `VITE_SITE_URL`；作品 Demo（iWatcHome、farmerstation）與 GitHub 連結也從這個網址取出帳號，各帳號連到自己的頁面。本機預設值在 `.env`。
- 聯絡 Email：到 **Settings → Secrets and variables → Actions → Variables** 新增 `CONTACT_EMAIL`，每個 repo 填自己的信箱；沒設定就用 `.env` 的 `VITE_CONTACT_EMAIL`。本機想用別的信箱，寫在不進版控的 `.env.local`。

## 分支與提交規範（Git Flow）

- 新功能：從 `develop` 開 `feature/<名稱>`；修 bug：`bugfix/<名稱>`；緊急修正：從 `master` 開 `hotfix/<名稱>`
- 完成後 `git merge --no-ff` 合回 `develop`，刪除分支再推送；發佈走 `release/<版本>` 合進 `master` 與 `develop`
- commit 訊息：`<類型>: <繁體中文說明>`，類型為 `feat`、`fix`、`docs`、`style`、`refactor`、`test`、`chore`
