// 漫畫的動態語法：分格依閱讀順序「硬切」出現，不做緩動花招；起重機用定格動畫把網頁吊進畫面。
// 內容預設就是可見的；動畫只在使用者沒有要求減少動態時加上。
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** 開場：大格 → 頭像特寫 → 對話框 → 三格條漫，一格一格切進來 */
function openingSequence(): void {
  const cut = { autoAlpha: 0, duration: 0 }
  gsap
    .timeline()
    .from('[data-cut="establish"]', cut, 0)
    .from('[data-crane-load]', { y: -60, duration: 1.2, ease: 'steps(8)' }, 0.1)
    .from('[data-cut="portrait"]', cut, 0.3)
    .from('[data-cut="balloon"]', cut, 0.65)
    .from('[data-cut="strip"]', { ...cut, stagger: 0.28 }, 1)
}

/** 作品分格捲進畫面時，依閱讀順序一格一格切出 */
function workCuts(): void {
  const works = gsap.utils.toArray<HTMLElement>('.work')
  if (works.length === 0) return
  gsap.set(works, { autoAlpha: 0 })
  ScrollTrigger.batch(works, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, duration: 0, stagger: 0.16 }),
  })
}

export function initMotion(): void {
  const mm = gsap.matchMedia()
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    openingSequence()
    workCuts()
  })
}
