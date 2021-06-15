<template>
  <Navbar />
  <main class="px-6 py-6 lg:px-4">
    <router-view />
  </main>
  <Footer />
</template>

<style lang="postcss">
#app {
  @apply min-h-screen;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
