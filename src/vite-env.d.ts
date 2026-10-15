/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 網站網址，結尾有 / */
  readonly VITE_SITE_URL: string
  /** 聯絡 Email：各 repo 建置時注入，見 .env */
  readonly VITE_CONTACT_EMAIL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
