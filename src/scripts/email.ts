// 聯絡 Email 在建置時由環境變數注入，各 repo 用自己的信箱（見 .env）。
export const CONTACT_EMAIL: string = import.meta.env.VITE_CONTACT_EMAIL
