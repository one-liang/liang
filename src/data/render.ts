// 建置時把內容渲染成靜態 HTML，注入 index.html 的佔位註解。
// 這樣作品與服務在沒有 JavaScript 時也完整可讀，搜尋引擎也看得到。
import { CONTACT_EMAIL, SERVICES, SKILLS, WORKS, WORK_TYPES, type Work } from './content.ts'
import { icon } from './icons.ts'

const esc = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

/** 網址只在 / 與 . 前後斷行，不會從單字中間斷開 */
const breakableUrl = (url: string): string => esc(url).replaceAll('/', '/<wbr>').replaceAll('.', '<wbr>.')

const caseNo = (index: number): string => `No.${String(index + 1).padStart(2, '0')}`

const paperclip = `<svg class="clip" viewBox="0 0 28 72" aria-hidden="true" focusable="false"><path d="M9 20V9a5 5 0 0 1 10 0v46a8 8 0 0 1-16 0V17" /></svg>`

const noteArrow = (variant: 'down' | 'up'): string =>
  variant === 'down'
    ? `<svg class="note__arrow" viewBox="0 0 64 44" aria-hidden="true" focusable="false"><path class="note__stroke" d="M4 6c18 2 34 10 44 30" /><path class="note__stroke" d="M38 32l10 5 2-11" /></svg>`
    : `<svg class="note__arrow" viewBox="0 0 64 44" aria-hidden="true" focusable="false"><path class="note__stroke" d="M60 38C42 36 24 28 14 8" /><path class="note__stroke" d="M24 12 14 7l-2 11" /></svg>`

function renderCase(work: Work, index: number): string {
  const id = `case-${work.slug}`
  const alt = `${work.name}網站首頁截圖`
  const memo = work.archived
    ? `<p class="case__memo">原站已下線，此為 GitHub Pages 備份版。</p>`
    : ''

  return `
<li class="case" id="${id}" data-type="${esc(work.type)}" style="--tab:${index % 4}">
  <article class="case__folder" aria-labelledby="${id}-title">
    <div class="case__tab" aria-hidden="true"><span>${caseNo(index)}</span></div>
    <div class="case__body">
      <figure class="case__print">
        <div class="case__photo">
          ${paperclip}
          <a class="case__shot" href="${esc(work.url)}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">
            <img src="/images/works/${work.slug}-720.webp"
              srcset="/images/works/${work.slug}-720.webp 720w, /images/works/${work.slug}-1440.webp 1440w"
              sizes="(min-width: 1280px) 620px, (min-width: 768px) 56vw, 88vw"
              width="1440" height="720" loading="lazy" decoding="async" alt="${esc(alt)}">
            <span class="case__open">開啟網站${icon('external')}</span>
          </a>
        </div>
        <figcaption class="case__notes">
          <span class="visually-hidden">手寫標註：</span>
          <ul>
            <li class="note note--a">${noteArrow('down')}<span>${esc(work.notes[0])}</span></li>
            <li class="note note--b">${noteArrow('up')}<span>${esc(work.notes[1])}</span></li>
          </ul>
        </figcaption>
      </figure>
      <div class="case__label">
        <h3 class="case__title" id="${id}-title">${esc(work.name)}</h3>
        <dl class="fields">
          <div class="fields__row">
            <dt>類型</dt>
            <dd><span class="chip-stamp" data-stamp>${esc(work.type)}</span></dd>
          </div>
          <div class="fields__row">
            <dt>技術</dt>
            <dd class="typed">${work.skills.map(esc).join(' · ')}</dd>
          </div>
          <div class="fields__row">
            <dt>簡述</dt>
            <dd>${esc(work.summary)}</dd>
          </div>
          <div class="fields__row">
            <dt>網址</dt>
            <dd>
              <a class="demo-link typed" href="${esc(work.url)}" target="_blank" rel="noopener">
                <span>${breakableUrl(work.displayUrl)}</span>${icon('external')}<span class="visually-hidden">（開啟 ${esc(work.name)} 網站，另開新視窗）</span>
              </a>
            </dd>
          </div>
        </dl>
        ${memo}
      </div>
    </div>
  </article>
</li>`
}

export function renderWorks(): string {
  return `<ol class="cases" data-cases>${WORKS.map(renderCase).join('')}</ol>`
}

export function renderBinding(): string {
  const items = WORKS.map(
    (work, index) =>
      `<li data-binding-for="case-${work.slug}"><a href="#case-${work.slug}"><span class="binding__no typed">${caseNo(index)}</span><span class="binding__name">${esc(work.name)}</span></a></li>`,
  ).join('')
  const fastener = `<svg class="binding__fastener" viewBox="0 0 120 40" aria-hidden="true" focusable="false"><rect x="4" y="5" width="112" height="13" rx="6.5" fill="currentColor" /><path d="M24 18v17M96 18v17" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" /><circle cx="24" cy="11.5" r="2.6" class="binding__rivet" /><circle cx="96" cy="11.5" r="2.6" class="binding__rivet" /></svg>`
  return `<nav class="binding" aria-label="作品卷宗索引">${fastener}<ol>${items}</ol></nav>`
}

export function renderFilter(): string {
  const count = (type?: string) => WORKS.filter((w) => !type || w.type === type).length
  const buttons = [
    `<button type="button" class="filter" data-filter="all" aria-pressed="true">全部<span class="filter__count typed">${count()}</span></button>`,
    ...WORK_TYPES.map(
      (type) =>
        `<button type="button" class="filter" data-filter="${esc(type)}" aria-pressed="false">${esc(type)}<span class="filter__count typed">${count(type)}</span></button>`,
    ),
  ].join('')
  return `<div class="filters" role="group" aria-label="依類型篩選作品">${buttons}</div>`
}

export function renderServices(): string {
  return SERVICES.map(
    (group) => `
<fieldset class="order-row">
  <legend class="order-row__title">${esc(group.title)}</legend>
  <ul class="order-row__items">
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
</fieldset>`,
  ).join('')
}

export function renderSkills(): string {
  return Object.entries(SKILLS)
    .map(
      ([group, items]) => `
<div class="skills__row">
  <dt>${esc(group)}</dt>
  <dd><ul class="skills__list">${items.map((item) => `<li class="typed">${esc(item)}</li>`).join('')}</ul></dd>
</div>`,
    )
    .join('')
}

export const htmlSlots: Record<string, () => string> = {
  works: renderWorks,
  binding: renderBinding,
  filter: renderFilter,
  services: renderServices,
  skills: renderSkills,
  email: () => esc(CONTACT_EMAIL),
  'work-count': () => String(WORKS.length),
}
