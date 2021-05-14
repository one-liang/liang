<template>
  <section class="mx-auto prose">
    <h1 class="!mb-0">工作經歷</h1>
    <p class="!mt-1 opacity-60 italic">由非網頁領域轉職到前端的經歷</p>
    <div class="flex flex-wrap w-full mt-8">
      <div class="relative flex w-full pb-12">
        <div
          class="absolute inset-0 flex items-center justify-center w-10 h-full"
        >
          <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
        </div>
        <div
          class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 p-2 overflow-hidden bg-gray-200 rounded-full"
        >
          <img
            class="object-cover"
            src="../assets/images/mirrorfiction_logo.png"
            alt="鏡文學股份有限公司"
          />
        </div>
        <div class="flex-grow pl-6">
          <h2 class="!m-0">鏡文學股份有限公司</h2>
          <p class="opacity-80 !mb-0">前端工程師</p>
          <p class="opacity-80 !m-0">2018/9~2021/3</p>
          <ul>
            <li>參與公司三個專案開發</li>
            <li>負責與設計師溝通，製作網站介面</li>
            <li>與後端工程師協調串接 API</li>
            <li>維護網站更新與持續優化</li>
          </ul>
        </div>
      </div>
      <div class="relative flex w-full pb-12">
        <div
          class="absolute inset-0 flex items-center justify-center w-10 h-full"
        >
          <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
        </div>
        <div
          class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 overflow-hidden bg-gray-200 rounded-full"
        >
          <img
            class="object-cover"
            src="../assets/images/richmond_tours_logo.jpg"
            alt="山富旅遊"
          />
        </div>
        <div class="flex-grow pl-6">
          <h2 class="!m-0">山富旅遊</h2>
          <p class="opacity-80 !mb-0">網頁設計師</p>
          <p class="opacity-80 !m-0">2016/11~2018/7</p>
          <ul>
            <li>設計網頁內容，提供更好的使用者體驗</li>
            <li>製作Banner、DM等廣告宣傳</li>
            <li>參與過公司網站大型改版，負責協助與網站首頁的切版</li>
          </ul>
        </div>
      </div>
      <div class="relative flex w-full">
        <div
          class="absolute inset-0 flex items-center justify-center w-10 h-full"
        >
          <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
        </div>
        <div
          class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 overflow-hidden bg-gray-200 rounded-full"
        >
          <img
            class="object-cover"
            src="../assets/images/inventec_logo.png"
            alt="英業達股份有限公司"
          />
        </div>
        <div class="flex-grow pl-6">
          <h2 class="!m-0">英業達股份有限公司</h2>
          <p class="opacity-80 !mb-0">品管工程師</p>
          <p class="opacity-80 !m-0">2015/7~2016/7</p>
          <ul>
            <li>軟硬體設備測試</li>
            <li>負責筆電與伺服器的核心驗證</li>
            <li>與PM溝通協調專案的進度和問題</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
};
</script>