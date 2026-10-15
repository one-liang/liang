// 建置時把內容渲染成靜態 HTML，注入 index.html 的佔位註解。
// 這樣作品與服務在沒有 JavaScript 時也完整可讀，搜尋引擎也看得到。
import { SERVICES, SKILLS, WORKS, WORK_TYPES, type Work } from './content.ts'
import { icon } from './icons.ts'
import {
  artBrand,
  artBuild,
  artCode,
  artComp,
  artCrane,
  artDevices,
  artExtra,
  artFeature,
  artMailbox,
  artSkyline,
  artStars,
  balloonTail,
} from './art.ts'

const esc = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

/** 網址只在 / 與 . 前後斷行，不會從單字中間斷開 */
const breakableUrl = (url: string): string => esc(url).replaceAll('/', '/<wbr>').replaceAll('.', '<wbr>.')

/** 網址最後一段和外連圖示綁在一起，圖示不會單獨掉到下一行 */
function urlWithIcon(url: string): string {
  const cut = url.lastIndexOf('/') + 1
  const head = url.slice(0, cut)
  const tail = url.slice(cut)
  return `${head ? breakableUrl(head) : ''}<span class="nowrap">${esc(tail)}${icon('external')}</span>`
}

/**
 * 分格大小依漫畫的四層格線輪替：寬＋窄、三等分、窄＋寬，最後一件單獨成一整層。
 * lead 是第一格，平板上也獨佔一整層。
 */
type PanelSize = 'wide' | 'std' | 'full'
const PATTERN: PanelSize[] = ['wide', 'std', 'std', 'std', 'std', 'std', 'wide']

function panelSize(index: number, total: number): PanelSize {
  const step = index % PATTERN.length
  if (step === 0 && index > 0 && index === total - 1) return 'full'
  return PATTERN[step] ?? 'std'
}

/** 把網址裡的 {owner} 換成部署所在的 GitHub 帳號 */
const withOwner = (value: string, owner: string): string => value.replaceAll('{owner}', owner)

function renderWork(work: Work, index: number, all: Work[], owner: string): string {
  const id = `work-${work.slug}`
  const url = withOwner(work.url, owner)
  const displayUrl = withOwner(work.displayUrl, owner)
  const size = panelSize(index, all.length)
  const lead = index === 0 ? ' work--lead' : ''
  const sizes =
    size === 'std'
      ? '(min-width: 1024px) 430px, (min-width: 736px) 46vw, 92vw'
      : '(min-width: 1024px) 880px, 92vw'
  const memo = work.archived ? `<p class="work__memo">原站已下線，連到 GitHub Pages 備份版。</p>` : ''

  return `
<li class="work work--${size}${lead}" id="${id}" data-type="${esc(work.type)}" data-match="true">
  <article class="panel work__panel" aria-labelledby="${id}-title">
    <div class="work__frame">
      <a class="work__shot" href="${esc(url)}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">
        <img src="/images/works/${work.slug}-720.webp"
          srcset="/images/works/${work.slug}-720.webp 720w, /images/works/${work.slug}-1440.webp 1440w"
          sizes="${sizes}" width="1440" height="720" loading="lazy" decoding="async" alt="${esc(work.name)}網站首頁截圖">
      </a>
      <p class="caption work__type"><span class="visually-hidden">類型：</span>${esc(work.type)}</p>
      <p class="balloon balloon--note work__note"><span class="visually-hidden">重點：</span>${esc(work.notes[0])}${balloonTail}</p>
    </div>
    <div class="work__body">
      <div class="work__head">
        <h3 class="work__title" id="${id}-title">${esc(work.name)}</h3>
        <p class="work__summary">${esc(work.summary)}</p>
      </div>
      <div class="work__meta">
        <p class="work__tech"><span class="visually-hidden">使用技術：</span>${work.skills.map(esc).join('<span aria-hidden="true"> · </span><span class="visually-hidden">、</span>')}</p>
        <a class="work__link" href="${esc(url)}" target="_blank" rel="noopener">
          <span class="work__link-label">開啟網站</span><span class="work__url">${urlWithIcon(displayUrl)}</span><span class="visually-hidden">（${esc(work.name)}，另開新視窗）</span>
        </a>
        ${memo}
      </div>
    </div>
  </article>
</li>`
}

export function renderWorks(owner: string): string {
  return `<ol class="works" data-works>${WORKS.map((work, index, all) => renderWork(work, index, all, owner)).join('')}</ol>`
}

export function renderFilter(): string {
  const count = (type?: string) => WORKS.filter((w) => !type || w.type === type).length
  const button = (value: string, label: string, pressed: boolean) =>
    `<button type="button" class="filter" data-filter="${esc(value)}" aria-pressed="${pressed}">${esc(label)}<span class="filter__count">${count(value === 'all' ? undefined : value)}</span></button>`
  const buttons = [button('all', '全部', true), ...WORK_TYPES.map((type) => button(type, type, false))].join('')
  return `<div class="filters" role="group" aria-label="依類型標出作品">${buttons}</div>`
}

const SERVICE_ART: Record<string, () => string> = {
  build: artBuild,
  feature: artFeature,
  other: artExtra,
}

export function renderServices(): string {
  return SERVICES.map(
    (group, index) => `
<fieldset class="panel service service--${esc(group.id)}${index === 0 ? ' service--lead' : ''}" aria-labelledby="service-${esc(group.id)}">
  <div class="service__art">${SERVICE_ART[group.id]?.() ?? ''}</div>
  <div class="service__body">
  <h3 class="service__title" id="service-${esc(group.id)}">${esc(group.title)}</h3>
  <ul class="service__items">
    ${group.items
      .map(
        (item) => `
    <li>
      <label class="tick">
        <input type="checkbox" name="service" value="${esc(item)}" data-group="${esc(group.title)}">
        <span class="tick__box" aria-hidden="true">${icon('check')}</span>
        <span class="tick__text">${esc(item)}</span>
      </label>
    </li>`,
      )
      .join('')}
  </ul>
  </div>
</fieldset>`,
  ).join('')
}

export function renderSkills(): string {
  return Object.entries(SKILLS)
    .map(
      ([group, items]) => `
<div class="skills__row">
  <dt class="caption">${esc(group)}</dt>
  <dd><ul class="skills__list">${items.map((item) => `<li class="skill">${esc(item)}</li>`).join('')}</ul></dd>
</div>`,
    )
    .join('')
}

export function createSlots({ email, owner }: { email: string; owner: string }): Record<string, () => string> {
  return {
    works: () => renderWorks(owner),
    owner: () => esc(owner),
    filter: renderFilter,
    services: renderServices,
    skills: renderSkills,
    email: () => esc(email),
    'work-count': () => String(WORKS.length),
    'balloon-tail': () => balloonTail,
    'art-brand': artBrand,
    'art-crane': artCrane,
    'art-skyline': artSkyline,
    'art-stars': artStars,
    'art-comp': artComp,
    'art-code': artCode,
    'art-devices': artDevices,
    'art-mailbox': artMailbox,
  }
}
