<template>
  <section class="mx-auto prose">
    <h1 class="!mb-0">作品</h1>
    <p class="!mt-1 opacity-80 italic">My projects</p>
    <div class="mt-10 space-y-4 divide-y-2 divide-gray-200">
      <div class="flex flex-wrap md:flex-nowrap">
        <a
          class="flex flex-col flex-shrink-0 mb-6 !border-none w-24 md:mb-0"
          href="https://mirrorfiction.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="!m-0 object-cover"
            src="../assets/images/mirrorfiction_logo.png"
            alt="鏡文學"
          />
        </a>
        <div class="md:flex-grow md:pl-6">
          <h2 class="!mt-0 !mb-2">鏡文學</h2>
          <p class="leading-relaxed">小說、漫畫與劇本平台，免費閱讀小說等作品，提供作家創作與自由上架，是一個累積 IP 的基地。</p>
          <ul class="leading-relaxed">
            <li>技術：JavaScript、SCSS</li>
            <li>框架：Vue、Bootstrap</li>
            <li>打包工具：Webpack</li>
            <li>內容：RWD 切版</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-wrap pt-8 md:flex-nowrap">
        <a
          class="flex flex-col flex-shrink-0 mb-6 !border-none w-24 md:mb-0"
          href="https://www.mirrorvoice.com.tw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="!m-0 object-cover"
            src="../assets/images/mirrorvoice_logo.png"
            alt="鏡好聽"
          />
        </a>
        <div class="md:flex-grow md:pl-6">
          <h2 class="!mt-0 !mb-2">鏡好聽</h2>
          <p class="leading-relaxed">聲音平台，主要商品有 Podcast 免費節目收聽、有聲書導讀、付費課程教學，打造用聲音與使用者交流為主的網站。</p>
          <ul class="leading-relaxed">
            <li>技術：JavaScript、PostCSS、Graphql</li>
            <li>框架：Vue、TailwindCSS</li>
            <li>應用框架：Nuxt</li>
            <li>內容：RWD 切版、串 API、SEO 優化</li>
            <li>架構：SSR</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-wrap pt-8 md:flex-nowrap">
        <a
          class="flex flex-col flex-shrink-0 mb-6 !border-none w-24 md:mb-0"
          href="https://info.mirrorfiction.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="!m-0 object-cover"
            src="../assets/images/infomirror.png"
            alt="大官網"
          />
        </a>
        <div class="md:flex-grow md:pl-6">
          <h2 class="!mt-0 !mb-2">大官網</h2>
          <p class="leading-relaxed">形象網站，包含鏡文學、鏡好聽等網站介紹，讓使用者們更認識其旗下子公司的產品。</p>
          <ul class="leading-relaxed">
            <li>技術：JavaScript、SCSS</li>
            <li>框架：Vue、TailwindCSS</li>
            <li>應用框架：Gridsome</li>
            <li>內容：RWD 切版、多國語系</li>
            <li>架構：SPA</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-wrap pt-8 md:flex-nowrap">
        <a
          class="flex flex-col flex-shrink-0 mb-6 !border-none w-24 md:mb-0"
          href="https://one-liang.github.io/avatar-doll"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="!m-0 object-cover"
            src="../assets/images/avatar-doll.png"
            alt="大官網"
          />
        </a>
        <div class="md:flex-grow md:pl-6">
          <h2 class="!mt-0 !mb-2">似顏繪</h2>
          <p class="leading-relaxed">小遊戲，手繪製作專屬個人風格的頭像。</p>
          <ul class="leading-relaxed">
            <li>技術：JavaScript、SCSS</li>
            <li>框架：Vue、TailwindCSS</li>
            <li>應用框架：Nuxt</li>
            <li>內容：RWD 切版、Vuex 切換頭貼</li>
            <li>架構：SPA</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>
