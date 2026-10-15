// 服務委託單：把勾選的項目整理成一封 Email。
import { CONTACT_EMAIL } from './email.ts'
import { copyText, showToast } from './toast.ts'

const SUBJECT = '網站委託洽詢'

function selectedServices(form: HTMLFormElement): Map<string, string[]> {
  const groups = new Map<string, string[]>()
  form.querySelectorAll<HTMLInputElement>('input[name="service"]:checked').forEach((input) => {
    const group = input.dataset.group ?? '其他'
    groups.set(group, [...(groups.get(group) ?? []), input.value])
  })
  return groups
}

function composeBody(groups: Map<string, string[]>): string {
  const lines = ['阿良您好：', '', '我想洽詢網站製作，需要的項目如下：']
  if (groups.size === 0) {
    lines.push('（尚未勾選，請協助評估）')
  } else {
    groups.forEach((items, group) => lines.push(`・${group}：${items.join('、')}`))
  }
  lines.push('', '公司／品牌名稱：', '網站類型與頁數：', '預計上線時間：', '設計稿或參考網站：', '', '謝謝！')
  return lines.join('\n')
}

export function initOrderForm(): void {
  const form = document.querySelector<HTMLFormElement>('[data-order-form]')
  if (!form) return
  const status = form.querySelector<HTMLElement>('[data-order-status]')

  const idleText = status?.textContent?.trim() ?? ''

  const updateStatus = () => {
    if (!status) return
    const count = form.querySelectorAll('input[name="service"]:checked').length
    status.textContent = count > 0 ? `已勾選 ${count} 項，按「寄出委託單」就會開好 Email。` : idleText
  }

  form.addEventListener('change', updateStatus)

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const body = composeBody(selectedServices(form))
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(body)}`
    window.location.href = href
    if (status) status.textContent = '已開啟 Email。如果沒有跳出寄信視窗，可以改用「複製委託內容」。'
  })

  form.querySelector<HTMLButtonElement>('[data-copy-order]')?.addEventListener('click', async () => {
    const text = `收件人：${CONTACT_EMAIL}\n主旨：${SUBJECT}\n\n${composeBody(selectedServices(form))}`
    const ok = await copyText(text)
    showToast(ok ? '已複製委託內容，貼到任何信箱或訊息即可' : '複製失敗，請直接寄信到 ' + CONTACT_EMAIL)
  })
}
