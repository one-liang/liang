---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface: 一頁式接案作品集（index.html）

Mode: Persuade。來訪者是直接發案的品牌／中小企業主與接案平台案主；要做的事是看懂服務、打開至少一個作品 demo、寄 Email 洽詢。證據只有 8 件真實作品（Notion 截圖＋技術標籤）、Notion 自我介紹與服務清單、手繪頭像。限制：淺色預設＋可切暗黑、WCAG 2.2 AA、尊重減少動態、不放經歷與價目、不新增流程或 FAQ 區塊、作品簡述待使用者確認。必須保留：手繪頭像、勾選服務後寄信、作品類型篩選、暗黑模式切換。

## Direction contract

THESIS: 作品集是一本清線派（ligne claire）漫畫冊：阿良是主角，每件上線作品是一格畫面，服務、自介與聯絡都是故事裡的分格。拒絕「左字右頭像＋一排等大作品卡」的業界預設，也拒絕上一版卷宗文具的道具感。

OWN-WORLD: 白色冊頁；一條均一黑線（手機 2px、桌機 2.5px）框住每個分格、對話框、按鈕與 SVG 插畫（non-scaling-stroke，放大縮小線寬不變）；平塗、無漸層、無陰影。日光藍與沙赭是中間調，旁白用黃框，紅色只留給故事需要的物件（寄信、接案中、郵筒）。圓體手寫感標字（Chiron GoRound TC）寫標題、對話框與旁白，內文用 Noto Sans TC。選取＝同一條黑線加粗；未選分格退一階淡色。夜間版是同一冊的夜景：冊頁深藍平塗、分格再深一階、黑線不變，對話框仍是白的。

STORY: 一眼看懂「阿良把設計稿做成手機、平板、電腦都好用的網站」；翻過 8 格真實作品而相信；在任何一格都能一步寄信。

FIRST VIEWPORT: 第一層左邊是寬幅開場格（約 8/12）：日光藍天空、SVG 城市天際線（頂樓水塔、天線、鐵皮加蓋），塔式起重機吊著一個網頁視窗，吊臂下掛紅色「接案中」告示牌；巨字標題「把設計稿，做成會動的網站。」上方不放任何標籤，紅色「寄信洽詢」與「複製 Email」就在格內。右邊約 4/12 是頭像特寫格（去背頭像，夜間是夜景底），白色對話框破格說出「前端工程師阿良，目前接案中」與自我介紹。第二層三格條漫：設計稿 → 切版與程式 → 手機平板電腦上線。頂部白色頁首、黑線收底：導覽、紅色「聯絡」、日夜切換。（原寫「桌上螢幕線稿」，建置時改為起重機吊起網頁：把「做出網站」畫成正在施工的動作。）

FORM: 清線派漫畫冊（catalog 挑戰者 pop-culture-shelf-ligne-claire-album，使用者在方向決策中選定；抽籤原指定我排序第 7 名的工程圖面）；seed key 16ab6cd6。招牌互動：分格依閱讀順序硬切出現（不做緩動花招）；類型篩選讓符合的分格保持全彩並加粗黑線，其餘淡一階、版面不重排；複製成功以速度線對話框提示；手機上分格依閱讀順序一格一格往下排。減少動態時全部靜態可見。

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- 6 則作品簡述為草稿，待使用者確認。
- 聯絡 Email 由建置環境變數 `VITE_CONTACT_EMAIL` 注入，各 repo 用自己的信箱；未設定時用 `.env` 的預設值。
