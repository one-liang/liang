let hideTimer: number | undefined

/** 在畫面下方顯示短暫提示，同時由 role="status" 讀給螢幕報讀器。 */
export function showToast(message: string): void {
  const toast = document.querySelector<HTMLElement>('[data-toast]')
  if (!toast) return

  toast.textContent = message
  toast.setAttribute('data-show', '')
  window.clearTimeout(hideTimer)
  hideTimer = window.setTimeout(() => toast.removeAttribute('data-show'), 2600)
}

/** 複製文字到剪貼簿；舊瀏覽器退回 execCommand。 */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const field = document.createElement('textarea')
    field.value = text
    field.setAttribute('readonly', '')
    field.style.position = 'fixed'
    field.style.opacity = '0'
    document.body.append(field)
    field.select()
    const ok = document.execCommand('copy')
    field.remove()
    return ok
  }
}
