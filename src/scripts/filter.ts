// 依類型篩選作品卷宗。動畫由 motion.ts 的 Flip 提供，這裡只負責狀態。
export type FilterHook = (apply: () => void, cases: HTMLElement[]) => void

const runDirectly: FilterHook = (apply) => apply()

export function initFilter(animate: FilterHook = runDirectly): void {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>('.filter')]
  const cases = [...document.querySelectorAll<HTMLElement>('.case')]
  const bindingItems = [...document.querySelectorAll<HTMLElement>('[data-binding-for]')]
  const status = document.querySelector<HTMLElement>('[data-filter-status]')
  if (buttons.length === 0 || cases.length === 0) return

  const select = (value: string) => {
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === value)))

    animate(() => {
      let shown = 0
      cases.forEach((item) => {
        const match = value === 'all' || item.dataset.type === value
        item.hidden = !match
        if (match) shown += 1
      })
      bindingItems.forEach((li) => {
        const target = cases.find((c) => c.id === li.dataset.bindingFor)
        li.hidden = target?.hidden ?? false
      })
      if (status) {
        status.textContent = value === 'all' ? `顯示全部 ${shown} 份作品` : `顯示 ${shown} 份「${value}」作品`
      }
    }, cases)
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => select(button.dataset.filter ?? 'all'))
  })
}
