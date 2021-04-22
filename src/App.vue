<template>
  <h1 class="leading-8 text-gray-800 bg-red-200 dark:text-white dark:bg-black">Dark Mode</h1>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <ToggleTheme class="flex items-center justify-center" />
</template>

<script>
import ToggleTheme from './components/ToggleTheme.vue'

export default {
  components: {
    ToggleTheme,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
