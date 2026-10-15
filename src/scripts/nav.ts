// 導覽：標出目前讀到的章節（字下的黑線加粗）。

function markCurrent(links: NodeListOf<HTMLAnchorElement>, activeId: string | null): void {
  links.forEach((link) => {
    if (link.hash === `#${activeId}`) link.setAttribute('aria-current', 'true')
    else link.removeAttribute('aria-current')
  })
}

/** 用一條「讀取線」（視窗上方 35% 處）判斷目前位置，比 threshold 穩定。 */
function watch(targets: HTMLElement[], onChange: (id: string | null) => void): void {
  const visible = new Set<string>()
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target.id)
        else visible.delete(entry.target.id)
      })
      const current = targets.find((t) => visible.has(t.id))
      onChange(current?.id ?? null)
    },
    { rootMargin: '-35% 0px -64% 0px' },
  )
  targets.forEach((t) => observer.observe(t))
}

export function initNav(): void {
  const links = document.querySelectorAll<HTMLAnchorElement>('.nav__link')
  const sections = ['works', 'services', 'about', 'contact']
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null)
  watch(sections, (id) => markCurrent(links, id))

  // 在頁內跳轉後把焦點交給目標，鍵盤使用者才不會留在原地
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.hash.slice(1))
      if (!target) return
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
      requestAnimationFrame(() => target.focus({ preventScroll: true }))
    })
  })
}
