// 日／夜模式切換。預設淺色，只記住使用者自己按過的選擇。
const STORAGE_KEY = 'liang-theme'

type Theme = 'light' | 'dark'

const root = document.documentElement

const currentTheme = (): Theme => (root.dataset.theme === 'dark' ? 'dark' : 'light')

function saveTheme(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // 無痕模式或封鎖儲存空間時，只影響這次瀏覽
  }
}

function syncToggle(button: HTMLButtonElement, theme: Theme): void {
  const isDark = theme === 'dark'
  button.setAttribute('aria-pressed', String(isDark))
  const label = button.querySelector('.theme-toggle__label')
  if (label) label.textContent = isDark ? '日間模式' : '夜間模式'
  button.setAttribute('aria-label', isDark ? '切換成日間（淺色）模式' : '切換成夜間（深色）模式')
  document
    .querySelector('meta[name="theme-color"]:not([media])')
    ?.setAttribute('content', isDark ? '#0D2219' : '#1E5A45')
}

export function initTheme(): void {
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]')
  if (!button) return

  syncToggle(button, currentTheme())

  button.addEventListener('click', () => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark'
    root.dataset.theme = next
    saveTheme(next)
    syncToggle(button, next)
  })
}
