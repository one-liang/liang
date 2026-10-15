// 依類型標出作品：符合的分格保持全彩、黑線加粗，其餘淡一階。版面不重排，就像漫畫頁不會改分格。
export function initFilter(): void {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>('.filter')]
  const list = document.querySelector<HTMLElement>('[data-works]')
  const works = [...document.querySelectorAll<HTMLElement>('.work')]
  const status = document.querySelector<HTMLElement>('[data-filter-status]')
  if (!list || buttons.length === 0 || works.length === 0) return

  const select = (value: string) => {
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === value)))

    let shown = 0
    works.forEach((work) => {
      const match = value === 'all' || work.dataset.type === value
      work.dataset.match = String(match)
      if (match) shown += 1
    })

    if (value === 'all') list.removeAttribute('data-filtering')
    else list.dataset.filtering = value

    if (status) {
      status.textContent =
        value === 'all'
          ? `顯示全部 ${shown} 件作品`
          : `標出 ${shown} 件「${value}」作品，其餘 ${works.length - shown} 件淡化顯示`
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => select(button.dataset.filter ?? 'all'))
  })
}
