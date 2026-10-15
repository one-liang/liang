import { CONTACT_EMAIL } from '../data/content.ts'
import { copyText, showToast } from './toast.ts'

export function initCopyEmail(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((button) => {
    button.addEventListener('click', async () => {
      const ok = await copyText(CONTACT_EMAIL)
      showToast(ok ? `已複製 ${CONTACT_EMAIL}` : `複製失敗，請手動複製：${CONTACT_EMAIL}`)
    })
  })
}
