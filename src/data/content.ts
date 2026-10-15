// 頁面內容的唯一來源：自我介紹、服務、技能與作品都來自 Notion「Liang」頁面。
// 作品簡述（summary）中標記 draft 的為草稿，待本人確認，見 CHECKLIST.md。

export const CONTACT_EMAIL = 'sololiang923@gmail.com'

export type WorkType = '一頁式' | '形象網站' | '電商網站' | '部落格'

export interface Work {
  /** 圖檔與錨點用的代號 */
  slug: string
  name: string
  type: WorkType
  url: string
  /** 顯示用的網址（去掉協定與結尾斜線） */
  displayUrl: string
  skills: string[]
  summary: string
  /** 簡述是否為草稿（Notion 沒有描述，由他人依類型與技術撰寫） */
  draft: boolean
  /** 截圖上的手寫標註，只寫 Notion 技術標籤裡的事實 */
  notes: [string, string]
  /** 原站已下線，連到 GitHub Pages 備份 */
  archived?: boolean
}

export const WORKS: Work[] = [
  {
    slug: 'chanel',
    name: '香奈兒腕錶形象頁',
    type: '一頁式',
    url: 'https://sololiang923.github.io/iWatcHome/',
    displayUrl: 'sololiang923.github.io/iWatcHome',
    skills: ['HTML5', 'Pug', 'CSS3', 'SCSS', 'RWD', 'Tailwind CSS', 'AOS', 'JavaScript'],
    summary: '香奈兒腕錶的一頁式形象頁，在黑色舞台上以捲動動畫逐段帶出腕錶細節。',
    draft: true,
    notes: ['AOS 捲動動畫', 'Pug ＋ Tailwind 切版'],
    archived: true,
  },
  {
    slug: 'farmerstation',
    name: '食農知味',
    type: '形象網站',
    url: 'https://sololiang923.github.io/farmerstation/',
    displayUrl: 'sololiang923.github.io/farmerstation',
    skills: ['HTML5', 'Pug', 'CSS3', 'SCSS', 'RWD', 'Tailwind CSS', 'JavaScript'],
    summary: '食農主題的形象網站：首頁主視覺輪播、最新消息列表與分類內容頁。',
    draft: true,
    notes: ['RWD 響應式', 'Pug ＋ SCSS 切版'],
    archived: true,
  },
  {
    slug: 'mook',
    name: 'Mook',
    type: '一頁式',
    url: 'https://www.mook.com.tw/',
    displayUrl: 'mook.com.tw',
    skills: ['HTML5', 'Pug', 'CSS3', 'SCSS', 'RWD', 'Tailwind CSS', 'AOS', 'JavaScript'],
    summary: '旅遊媒體 Mook 的品牌首頁，以滿版攝影開場的一頁式設計。',
    draft: true,
    notes: ['AOS 捲動動畫', 'RWD 響應式'],
  },
  {
    slug: 'travelplus',
    name: '景點+',
    type: '部落格',
    url: 'https://www.mook.com.tw/travelplus',
    displayUrl: 'mook.com.tw/travelplus',
    skills: ['HTML5', 'Pug', 'CSS3', 'SCSS', 'RWD', 'Tailwind CSS', 'JavaScript'],
    summary: 'Mook 的旅遊景點部落格：文章卡片列表、分類導覽與熱門文章。',
    draft: true,
    notes: ['Tailwind CSS 切版', 'RWD 響應式'],
  },
  {
    slug: 'elifemall',
    name: '全國電子',
    type: '電商網站',
    url: 'https://ec.elifemall.com.tw/',
    displayUrl: 'ec.elifemall.com.tw',
    skills: ['CSS3', 'SCSS', 'RWD', 'Tailwind CSS', 'JavaScript', 'Vue', 'Nuxt'],
    summary: '全國電子線上購物網站：商品主視覺輪播、分類選單與品牌專區。',
    draft: true,
    notes: ['Vue ＋ Nuxt', 'Tailwind CSS'],
  },
  {
    slug: 'gyenshop',
    name: '橘焱胡同',
    type: '電商網站',
    url: 'https://www.gyenshop.com.tw/',
    displayUrl: 'gyenshop.com.tw',
    skills: ['HTML5', 'Pug', 'CSS3', 'SCSS', 'RWD', 'Tailwind CSS', 'JavaScript'],
    summary: '餐飲品牌的線上商店：檔期活動主視覺與商品分類頁面。',
    draft: true,
    notes: ['Pug 模板', 'RWD 響應式'],
  },
  {
    slug: 'mirrorvoice',
    name: '鏡好聽',
    type: '形象網站',
    url: 'https://www.mirrorvoice.com.tw/',
    displayUrl: 'mirrorvoice.com.tw',
    skills: ['CSS3', 'Tailwind CSS', 'JavaScript', 'Vue', 'Nuxt'],
    summary:
      '聲音平台，主要商品有 Podcast 免費節目收聽、有聲書導讀、付費課程教學，打造用聲音與使用者交流為主的網站。',
    draft: false,
    notes: ['Vue ＋ Nuxt', 'Tailwind CSS'],
  },
  {
    slug: 'mirrorfiction',
    name: '鏡文學',
    type: '形象網站',
    url: 'https://www.mirrorfiction.com/',
    displayUrl: 'mirrorfiction.com',
    skills: ['CSS3', 'SCSS', 'RWD', 'Bootstrap 4', 'JavaScript', 'Vue'],
    summary: '小說、漫畫與劇本平台，免費閱讀小說等作品，提供作家創作與自由上架，是一個累積 IP 的基地。',
    draft: false,
    notes: ['Vue 前端', 'Bootstrap 4 ＋ RWD'],
  },
]

export const WORK_TYPES: WorkType[] = ['一頁式', '形象網站', '電商網站', '部落格']

export interface ServiceGroup {
  id: string
  title: string
  items: string[]
}

export const SERVICES: ServiceGroup[] = [
  {
    id: 'build',
    title: '切版開發',
    items: ['一頁式活動頁', '多頁式網站', '響應式設計 (RWD)', '互動式網頁應用'],
  },
  {
    id: 'feature',
    title: '功能開發',
    items: ['串接後端 API', '前端驗證（表單、欄位）', '簡易視差滾動／動畫效果'],
  },
  {
    id: 'other',
    title: '其他服務',
    items: ['搜尋引擎優化 (SEO) 策略與實作', '無障礙網頁規範', 'Google Analytics / GTM 整合'],
  },
]

export const SKILLS = {
  技能: [
    'HTML5',
    'Pug',
    'CSS3',
    'SCSS',
    'RWD',
    'JavaScript',
    'TypeScript',
    'Vue',
    'Nuxt',
    'Vite',
    'Tailwind CSS',
    'Bootstrap 4',
    'a11y',
  ],
  方法: ['BEM'],
  工具: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
} as const
