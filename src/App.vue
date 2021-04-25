<template>
  <Navbar />
  <main class="px-4">
    <router-view />
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
