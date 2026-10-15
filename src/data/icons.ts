// 自繪圖示：24px 格線、圓角端點；線寬和插畫同一支筆（2px、non-scaling-stroke）。
const paths = {
  external: '<path d="M7 17 17 7" /><path d="M9 7h8v8" />',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="1.5" /><path d="m4 7 8 6 8-6" />',
  copy: '<rect x="8.5" y="8.5" width="11" height="11" rx="1.5" /><path d="M15.5 8.5V6a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5" />',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5" />',
  sun: '<circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />',
  moon: '<path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10Z" />',
  arrowDown: '<path d="M12 4.5v15" /><path d="m6 13.5 6 6 6-6" />',
} as const

export type IconName = keyof typeof paths

export const icon = (name: IconName, className = 'icon'): string =>
  `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]}</svg>`
