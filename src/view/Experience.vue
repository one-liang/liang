<template>
  <section class="mx-auto prose">
    <h1 class="!mb-0">工作經歷</h1>
    <p class="!mt-1 opacity-80 italic">Work experience</p>
    <div class="flex flex-wrap">
      <div class="relative flex w-full pt-10 pb-20 mx-auto sm:items-center">
        <div
          class="absolute inset-0 flex items-center justify-center w-6 h-full"
        >
          <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
        </div>
        <div
          class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-gray-500 rounded-full sm:mt-0"
        >
          1
        </div>
        <div
          class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row"
        >
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 overflow-hidden text-indigo-500 bg-white rounded-full"
          >
            <img
              class="object-cover"
              src="../assets/images/mirrorfiction_logo.png"
              alt="鏡文學股份有限公司"
            />
          </div>
          <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
            <h2 class="!m-0">鏡文學股份有限公司</h2>
            <p>前端工程師</p>
            <ul>
              <li>負責與設計師溝通，製作網站介面</li>
              <li>與後端工程師協調串接 API</li>
              <li>維護網站更新與持續優化</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="relative flex w-full pb-20 mx-auto sm:items-center">
        <div
          class="absolute inset-0 flex items-center justify-center w-6 h-full"
        >
          <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
        </div>
        <div
          class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-gray-500 rounded-full sm:mt-0"
        >
          2
        </div>
        <div
          class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row"
        >
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 overflow-hidden text-indigo-500 bg-white rounded-full"
          >
            <img
              class="object-cover"
              src="../assets/images/richmond_tours_logo.jpg"
              alt="山富旅遊"
            />
          </div>
          <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
            <h2 class="!m-0">山富旅遊</h2>
            <p>網頁設計師</p>
            <ul>
              <li>設計網頁內容，提供更好的使用者體驗</li>
              <li>製作Banner、DM等廣告宣傳</li>
              <li>參與過公司網站大型改版，負責協助與網站首頁的切版</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="relative flex w-full pb-20 mx-auto sm:items-center">
        <div
          class="absolute inset-0 flex items-center justify-center w-6 h-full"
        >
          <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
        </div>
        <div
          class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-gray-500 rounded-full sm:mt-0"
        >
          3
        </div>
        <div
          class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row"
        >
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 overflow-hidden text-indigo-500 bg-white rounded-full"
          >
            <img
              class="object-cover"
              src="../assets/images/inventec_logo.png"
              alt="英業達股份有限公司"
            />
          </div>
          <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
            <h2 class="!m-0">英業達股份有限公司</h2>
            <p>品管工程師</p>
            <ul>
              <li>軟硬體設備測試</li>
              <li>負責筆電與伺服器的核心驗證</li>
              <li>與PM溝通協調專案的進度和問題</li>
            </ul>
          </div>
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