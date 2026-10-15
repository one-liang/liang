// 紙張的動態語法：卷宗落桌、照片被夾上、印章蓋下、截圖從卷宗滑出、手寫引線描出。
// 內容預設就是可見的；動畫只在使用者沒有要求減少動態時加上。
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import type { FilterHook } from './filter.ts'

gsap.registerPlugin(ScrollTrigger, Flip, DrawSVGPlugin)

const PAPER_EASE = 'expo.out'
const prefersMotion = () => window.matchMedia('(prefers-reduced-motion: no-preference)').matches

function heroEntrance(): void {
  const folder = document.querySelector('[data-hero-folder]')
  if (!folder) return

  gsap
    .timeline({ defaults: { ease: PAPER_EASE } })
    .from(folder, { y: 48, rotate: 2.2, duration: 1.3 })
    .from('[data-id-photo]', { y: -36, rotate: 14, duration: 1.1 }, 0.25)
    .from(
      '[data-hero-stamp]',
      { scale: 1.9, autoAlpha: 0, rotate: -40, duration: 0.55, ease: 'back.out(2.2)' },
      0.85,
    )
}

function caseReveals(): void {
  gsap.utils.toArray<HTMLElement>('.case').forEach((item, index) => {
    const photo = item.querySelector('.case__photo')
    const stamp = item.querySelector('[data-stamp]')
    const strokes = item.querySelectorAll('.note__stroke')
    const tl = gsap.timeline({
      defaults: { ease: PAPER_EASE },
      scrollTrigger: { trigger: item, start: 'top 78%', once: true },
    })

    if (photo) {
      tl.from(photo, { yPercent: 14, rotate: index % 2 ? 4 : -4, duration: 1.1 })
    }
    if (stamp) {
      tl.from(stamp, { scale: 1.8, autoAlpha: 0, duration: 0.45, ease: 'back.out(2.4)' }, 0.35)
    }
    if (strokes.length) {
      tl.from(strokes, { drawSVG: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' }, 0.55)
    }
  })
}

/** 篩選卷宗時用 Flip 讓其餘卷宗滑到新位置，新出現的從下方抽出。 */
export const flipFilter: FilterHook = (apply, cases) => {
  if (!prefersMotion()) {
    apply()
    ScrollTrigger.refresh()
    return
  }

  const state = Flip.getState(cases)
  apply()
  Flip.from(state, {
    duration: 0.7,
    ease: PAPER_EASE,
    absolute: true,
    nested: true,
    onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: PAPER_EASE }),
    onLeave: (els) => gsap.to(els, { autoAlpha: 0, y: -20, duration: 0.3 }),
    onComplete: () => ScrollTrigger.refresh(),
  })
}

export function initMotion(): void {
  const mm = gsap.matchMedia()
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    heroEntrance()
    caseReveals()
  })
}
