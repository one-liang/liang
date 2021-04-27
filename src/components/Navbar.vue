<template>
  <header class="text-gray-600">
    <div class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
      <router-link to="/" class="mb-4 text-xl font-medium md:mb-0">Liang
      </router-link>
      <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto">
        <router-link to="/" class="mr-5">Home</router-link>
        <router-link to="/about" class="mr-5">About</router-link>
        <ToggleTheme />
      </nav>
    </div>
  </header>
</template>

<script>
import ToggleTheme from './ToggleTheme.vue';

export default {
  name: "Navbar",
  components: { ToggleTheme },
};
</script>